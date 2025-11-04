#!/usr/bin/env node
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { Command } from "commander";
import fse from "fs-extra";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const CLI_PACKAGE_JSON = resolve(__dirname, "../package.json");

function getCliVersion() {
	try {
		return fse.readJsonSync(CLI_PACKAGE_JSON).version as string;
	} catch {
		return "0.0.0";
	}
}

const program = new Command();

program.version(getCliVersion());

program.action(async () => {
	const { main } = await import("./parse");
	return main();
});

program
	.command("ros-msg-parser")
	.description("解析 ROS 中的 msg/srv/action 文件")
	.option("-i, --input <dir>", "输入目录", "examples/ros")
	.option("-m, --module <name>", "模块名（用于去掉前缀）", "custom_pkg")
	.option("-o, --output <file>", "输出的 d.ts 文件", "ros.d.ts")
	.action(async (opts: { input: string; module: string; output: string }) => {
		const { generate } = await import("./parse");
		const input = resolve(process.cwd(), opts.input);
		return generate({
			input,
			module: opts.module,
			output: opts.output,
			clean: true,
		});
	});

program.parse();
