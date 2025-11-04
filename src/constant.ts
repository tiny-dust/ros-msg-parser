// 生成一个 ros2 所有数据类型对应 ts 类型的映射关系
export const DataTypeMap: Record<string, string> = {
	bool: "boolean",
	byte: "number",
	string: "string",
	char: "string",
	float32: "number",
	float64: "number",
	int8: "number",
	uint8: "number",
	int16: "number",
	uint16: "number",
	int32: "number",
	uint32: "number",
	int64: "number",
	uint64: "number",
} as const;
