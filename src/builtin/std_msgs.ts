import type { Parse } from "../types";

export const stdMsgs: Record<string, Parse> = {
	"std_msgs/Header": {
		namespace: "StdMsgsHeader",
		desc: ["Standard metadata for higher-level stamped data types."],
		fields: [
			{
				name: "stamp",
				type: "builtin_interfaces/Time",
				isArray: false,
				comment: ["Time stamp for the data."],
			},
			{
				name: "frame_id",
				type: "string",
				isArray: false,
				comment: ["Frame this data is associated with."],
			},
		],
	},
	"std_msgs/String": {
		namespace: "StdMsgsString",
		desc: ["String message type."],
		fields: [
			{
				name: "data",
				type: "string",
				isArray: false,
				comment: ["String data."],
			},
		],
	},
	"std_msgs/Bool": {
		namespace: "StdMsgsBool",
		desc: ["Boolean message type."],
		fields: [
			{
				name: "data",
				type: "boolean",
				isArray: false,
				comment: ["Boolean data."],
			},
		],
	},
	"std_msgs/Int8": {
		namespace: "StdMsgsInt8",
		desc: ["8-bit signed integer message type."],
		fields: [
			{
				name: "data",
				type: "int8",
				isArray: false,
				comment: ["8-bit signed integer data."],
			},
		],
	},
	"std_msgs/Int16": {
		namespace: "StdMsgsInt16",
		desc: ["16-bit signed integer message type."],
		fields: [
			{
				name: "data",
				type: "int16",
				isArray: false,
				comment: ["16-bit signed integer data."],
			},
		],
	},
	"std_msgs/Int32": {
		namespace: "StdMsgsInt32",
		desc: ["32-bit signed integer message type."],
		fields: [
			{
				name: "data",
				type: "int32",
				isArray: false,
				comment: ["32-bit signed integer data."],
			},
		],
	},
	"std_msgs/Int64": {
		namespace: "StdMsgsInt64",
		desc: ["64-bit signed integer message type."],
		fields: [
			{
				name: "data",
				type: "int64",
				isArray: false,
				comment: ["64-bit signed integer data."],
			},
		],
	},
	"std_msgs/UInt8": {
		namespace: "StdMsgsUInt8",
		desc: ["8-bit unsigned integer message type."],
		fields: [
			{
				name: "data",
				type: "uint8",
				isArray: false,
				comment: ["8-bit unsigned integer data."],
			},
		],
	},
	"std_msgs/UInt16": {
		namespace: "StdMsgsUInt16",
		desc: ["16-bit unsigned integer message type."],
		fields: [
			{
				name: "data",
				type: "uint16",
				isArray: false,
				comment: ["16-bit unsigned integer data."],
			},
		],
	},
	"std_msgs/UInt32": {
		namespace: "StdMsgsUInt32",
		desc: ["32-bit unsigned integer message type."],
		fields: [
			{
				name: "data",
				type: "uint32",
				isArray: false,
				comment: ["32-bit unsigned integer data."],
			},
		],
	},
	"std_msgs/UInt64": {
		namespace: "StdMsgsUInt64",
		desc: ["64-bit unsigned integer message type."],
		fields: [
			{
				name: "data",
				type: "uint64",
				isArray: false,
				comment: ["64-bit unsigned integer data."],
			},
		],
	},
	"std_msgs/Float32": {
		namespace: "StdMsgsFloat32",
		desc: ["32-bit floating point message type."],
		fields: [
			{
				name: "data",
				type: "float32",
				isArray: false,
				comment: ["32-bit floating point data."],
			},
		],
	},
	"std_msgs/Float64": {
		namespace: "StdMsgsFloat64",
		desc: ["64-bit floating point message type."],
		fields: [
			{
				name: "data",
				type: "float64",
				isArray: false,
				comment: ["64-bit floating point data."],
			},
		],
	},

	// arrays
	"std_msgs/ByteMultiArray": {
		namespace: "StdMsgsByteMultiArray",
		desc: ["Multi-dimensional array of bytes."],
		fields: [
			{
				name: "layout",
				type: "std_msgs/MultiArrayLayout",
				isArray: false,
				comment: ["Layout specification."],
			},
			{ name: "data", type: "uint8", isArray: true, comment: ["Array data."] },
		],
	},
	"std_msgs/MultiArrayLayout": {
		namespace: "StdMsgsMultiArrayLayout",
		desc: ["Layout specification for multi-dimensional arrays."],
		fields: [
			{
				name: "dim",
				type: "std_msgs/MultiArrayDimension",
				isArray: true,
				comment: ["Array dimensions."],
			},
			{
				name: "data_offset",
				type: "uint32",
				isArray: false,
				comment: ["Data offset."],
			},
		],
	},
	"std_msgs/MultiArrayDimension": {
		namespace: "StdMsgsMultiArrayDimension",
		desc: ["Dimension specification for multi-dimensional arrays."],
		fields: [
			{
				name: "label",
				type: "string",
				isArray: false,
				comment: ["Dimension label."],
			},
			{
				name: "size",
				type: "uint32",
				isArray: false,
				comment: ["Dimension size."],
			},
			{
				name: "stride",
				type: "uint32",
				isArray: false,
				comment: ["Dimension stride."],
			},
		],
	},
};
