import fse from "fs-extra";
import { BuiltInMsg, BuiltInTypes, DataTypeMap, failure } from ".";
import type { Field, Parse, ParseFileOptions, ParseResult } from "./types";

const enumRegex =
	/^enum ([A-Za-z_][A-Za-z0-9_]*)\s*=\s*([-+]?\d+(?:\.\d+)?)(?:\s+(.*))?$/; // enum field=value comment

// Note: CLI-specific utilities (like reading package version) are implemented in src/cli.ts

/**
 * 将输入转换成大驼峰命名
 */
export function toPascalCase(input: string, ...rest: string[]): string {
	const combined = [input, ...rest].join("_");

	return combined
		.replace(/(^\w|_\w)/g, (match) => match.replace("_", "").toUpperCase())
		.replace(/[^a-zA-Z0-9]/g, "");
}

export function trackEnum(
	data: Parse[],
	untrackEnum: { name: string; namespace: string }[],
) {
	for (const item of untrackEnum) {
		const found = data.find((d) => d.namespace === item.namespace);
		if (found) {
			const field = found.fields.find((f) => f.name === item.name);
			if (field) {
				field.type = toPascalCase(item.namespace, item.name);
			}
		}
	}
}

/**
 * @desc 递归遍历使用到的内置类型
 * @param {Set<string>} typeSet 需要处理的类型namespace集合
 * @return {Set<string>} 所有使用到的内置类型namespace集合
 */
export function resolveBuiltInTypes(typeSet: Set<string>): Set<string> {
	const builtInTypes = Object.keys(BuiltInTypes);
	const resultSet = new Set<string>(typeSet);

	function traverse(type: string) {
		if (!builtInTypes.includes(type)) {
			failure("内置类型解析", `当前内置ros2类型没有此元素: ${type}`);
			return;
		}
		if (builtInTypes.includes(type)) {
			resultSet.add(type);
			const builtIn = BuiltInTypes[type];
			if (builtIn) {
				for (const field of builtIn.fields) {
					const fieldType = field.type.replace("[]", "");
					if (builtInTypes.includes(fieldType)) {
						traverse(fieldType);
					}
				}
			}
		}
	}

	for (const type of typeSet) {
		traverse(type);
	}

	return resultSet;
}

/**
 *  @desc 解析 msg 文件内容
 *  @rules 1 首行开始的注释直至第一个字段行或空行 为 描述信息
 *  @rules 2 紧贴字段的注释和 字段后放的注释  为 field 的注释
 *  @rules 3 枚举值上方必有 # enum field 注释
 *  @rules 4 字段的枚举值也可以  # enum field=value comment
 * @returns 解析后的对象
 */
export function parseContent(
	content: string,
	namespace: string,
	options: ParseFileOptions,
): ParseResult {
	const lines = content.split("\n");
	const { module = "", required = false } = options;

	const result: Parse[] = [];

	let isFieldSection = false; // 判断是否进入字段定义区，判断逻辑：遇到第一个非注释行
	let fieldType: "base" | "custom" | "builtIn" = "base";
	let untrackComment: string[] = []; // 未追踪的 comment，通常在字段定义之前的注释
	const untrackEnum: { name: string; namespace: string }[] = [];

	const constants: Field[] = [];
	const fields: Field[] = [];
	const desc: string[] = [];
	for (let i = 0; i < lines.length; i++) {
		const trimmedLine = lines[i].trim();
		const isLastLine = i === lines.length - 1;

		//  处理枚举字段是最后的内容时  直接跳过导致不生成的问题
		if (isLastLine) {
			if (constants.length > 0 && untrackEnum.length > 0) {
				const enumName = untrackEnum[untrackEnum.length - 1];
				result.push({
					namespace: toPascalCase(enumName.namespace, enumName.name),
					desc: [],
					isEnum: true,
					required,
					fields: [...constants],
				});
				constants.length = 0;
				untrackComment = [];
			}
		}

		if (!trimmedLine.startsWith("#") && !isFieldSection) {
			isFieldSection = true;
		}

		if (isFieldSection && trimmedLine.startsWith("#")) {
			untrackComment.push(trimmedLine.replace("#", "").trim());
		}

		// 跳过空行
		if (!trimmedLine) continue;

		// 获取类型描述
		if (trimmedLine.startsWith("#") && fields.length === 0) {
			desc.push(trimmedLine.replace(/^#\s?/, ""));
			continue;
		}

		// 获取字段信息
		const [fieldPart, comment] = trimmedLine.split("#");
		const [type, name] = fieldPart.split(" ");

		if (!type || !name) continue;

		// 收集常量信息  定义枚举数据
		if (name.includes("=")) {
			// 常量定义
			const [constName, constValue] = name.split("=");
			if (!constName || !constValue) continue;
			let description = [comment?.trim()].filter(Boolean);
			//  说明定义了字段追踪 并且有自己的注释
			if (untrackComment.length > 0 && untrackComment[0].startsWith("field")) {
				const enumName = untrackComment[0].replace("field", "").trim();

				untrackEnum.push({
					name: enumName,
					namespace,
				});
			}
			const enumDescription = untrackComment.filter(
				(c) => !c?.startsWith("field"),
			);
			description = [...description, ...enumDescription];

			constants.push({
				name: constName.trim(),
				type: "enum",
				value: constValue.trim(),
				isEnum: true,
				comment: description,
			});
			untrackComment = [];

			continue;
		}

		if (constants.length > 0 && untrackEnum.length > 0) {
			const enumName = untrackEnum[untrackEnum.length - 1];
			result.push({
				namespace: toPascalCase(enumName.namespace, enumName.name),
				desc: [],
				isEnum: true,
				required,
				fields: [...constants],
			});
			constants.length = 0;
			untrackComment = [];
		}

		let finallyComment = [...untrackComment, comment?.trim()].filter(Boolean);

		const isArray = type.endsWith("[]");
		let msgType = isArray ? type.split("[")[0] : type;

		if (msgType.startsWith(`${module}/`)) {
			fieldType = "custom";
			msgType = msgType.replace(`${module}/`, "");
		} else if (!DataTypeMap[msgType] && msgType.includes("/")) {
			fieldType = "builtIn";
		}

		msgType = DataTypeMap[msgType] ?? msgType;

		// 处理untrackComment 中是否含有枚举信息
		const enums = untrackComment.filter((c) => c.startsWith("enum"));
		const enumDesc = untrackComment.filter((c) => !c.startsWith("enum"));
		const enumFields: Field[] = [];
		for (const ctx of enums) {
			// 枚举注释格式  # enum field=value comment
			const match = ctx.match(enumRegex);
			if (match) {
				const [, field, value, comment] = match;
				enumFields.push({
					name: field.trim(),
					type: "enum",
					value: value.trim(),
					isEnum: true,
					comment: comment?.trim() ? [comment.trim()] : [],
				});
			}
		}
		if (enumFields.length > 0) {
			const enumName = toPascalCase(namespace, name);
			result.push({
				namespace: enumName,
				desc: [],
				isEnum: true,
				required,
				fields: [...enumFields],
			});
			msgType = enumName;
			finallyComment = [...enumDesc];
		}

		fields.push({
			name: name,
			type: msgType,
			isBuiltIn: fieldType === "builtIn",
			isArray,
			comment: finallyComment,
		});
		fieldType = "base";
		untrackComment = [];
	}
	result.push({
		namespace,
		required,
		desc,
		fields,
	});

	return { data: result, untrackEnum };
}

export function parseMsg(file: string, options: ParseFileOptions): ParseResult {
	const namespace = file.split("/").pop()?.replace(".msg", "");
	if (!namespace) {
		failure("parse msg", "Invalid file name, cannot extract namespace");
		throw new Error("Invalid file name, cannot extract namespace");
	}
	const content = fse.readFileSync(file, "utf-8");

	return parseContent(content, toPascalCase(namespace), options);
}

export function parseSrv(file: string, options: ParseFileOptions): ParseResult {
	const namespace = file.split("/").pop()?.replace(".srv", "");
	if (!namespace) {
		failure("parse srv", "Invalid file name, cannot extract namespace");
		throw new Error("Invalid file name, cannot extract namespace");
	}
	const content = fse.readFileSync(file, "utf-8");
	const [reqContent, resContent] = content.split("---");

	const requestParse = parseContent(
		reqContent,
		toPascalCase(namespace, "Request"),
		options,
	);

	const responseParse = parseContent(
		resContent,
		toPascalCase(namespace, "Response"),
		options,
	);

	return {
		data: [...requestParse.data, ...responseParse.data],
		untrackEnum: [
			...(requestParse.untrackEnum ?? []),
			...(responseParse.untrackEnum ?? []),
		],
	};
}
export function parseAction(
	file: string,
	options: ParseFileOptions,
): ParseResult {
	const namespace = file.split("/").pop()?.replace(".action", "");
	if (!namespace) {
		failure("parse action", "Invalid file name, cannot extract namespace");
		throw new Error("Invalid file name, cannot extract namespace");
	}
	const content = fse.readFileSync(file, "utf-8");
	const [goalContent, feedbackContent, resContent] = content.split("---");

	const goalParse = parseContent(
		goalContent,
		toPascalCase(namespace, "Goal"),
		options,
	);

	const feedbackParse = parseContent(
		feedbackContent,
		toPascalCase(namespace, "Feedback"),
		options,
	);

	const resultParse = parseContent(
		resContent,
		toPascalCase(namespace, "Result"),
		options,
	);

	const finallyData = [
		...goalParse.data,
		...feedbackParse.data,
		...resultParse.data,
	];
	const untrackEnum = [
		...(goalParse.untrackEnum ?? []),
		...(feedbackParse.untrackEnum ?? []),
		...(resultParse.untrackEnum ?? []),
	];

	return {
		data: finallyData,
		untrackEnum,
	};
}

/**
 * 生成 TypeScript 类型
 * @param  {Parse[]} params  解析 msg/srv/action 后的对象数组
 * @return {string} 生成的 TypeScript 类型字符串
 */
export function genTsContent(params: Parse[]) {
	const errorTypes = new Set<string>();
	const builtInSet = new Set<string>();
	const builtInTypes = Object.keys(BuiltInTypes);

	let output = "// Auto-generated by ros-msg-parser\n\n";
	for (const item of params) {
		// 生成描述
		if (item.desc.length > 0) {
			output += "/**\n";
			for (const line of item.desc) {
				output += ` * ${line}\n`;
			}
			output += " */\n";
		}
		if (item.fields.length === 0) {
			continue;
		}

		output += `export ${item.isEnum ? "enum" : "interface"} ${
			item.namespace
		} {\n`;

		for (const field of item.fields) {
			// 生成字段描述
			if (field.comment && field.comment.length > 0) {
				output += "  /**\n";
				for (const line of field.comment) {
					output += `   * ${line}\n`;
				}
				output += "   */\n";
			}
			if (item.isEnum) {
				output += `  ${field.name}=${field.value},\n`;
			} else {
				if (field.isBuiltIn) {
					if (!builtInTypes.includes(field.type)) {
						errorTypes.add(field.type);
					} else {
						builtInSet.add(field.type);
						field.type = BuiltInMsg[field.type].namespace;
					}
				}

				output += `  ${field.name}${item.required ? "" : "?"}: ${field.type}${
					field.isArray ? "[]" : ""
				};\n`;
			}
		}
		output += "}\n\n";
	}
	if (errorTypes.size > 0) {
		for (const type of errorTypes) {
			failure("生成内置类型", `没有找到内置类型: ${type}`);
		}
	}
	// 如果用到了内置类型，则把内置类型的定义也加上
	if (builtInSet.size > 0) {
		const resolvedTypes = resolveBuiltInTypes(builtInSet);
		output = `// Built-in ROS message types

    ${output}`;
		for (const type of resolvedTypes) {
			const builtIn = BuiltInTypes[type];
			if (builtIn) {
				// 生成描述
				if (builtIn.desc.length > 0) {
					output += "/**\n";
					for (const line of builtIn.desc) {
						output += ` * ${line}\n`;
					}
					output += " */\n";
				}
				output += `export interface ${builtIn.namespace} {\n`;
				for (const field of builtIn.fields) {
					// 生成字段描述
					if (field.comment && field.comment.length > 0) {
						output += "  /**\n";
						for (const line of field.comment) {
							output += `   * ${line}\n`;
						}
						output += "   */\n";
					}
					field.type =
						BuiltInTypes[field.type]?.namespace ??
						DataTypeMap[field.type] ??
						field.type;
					output += `  ${field.name}: ${field.type}${
						field.isArray ? "[]" : ""
					};\n`;
				}
				output += "}\n\n";
			} else {
				failure("生成内置类型", `没有找到内置类型: ${builtIn}`);
			}
		}
	}
	output += "// End of auto-generated content\n";
	return output;
}
