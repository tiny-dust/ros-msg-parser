import type { Parse } from "../types";

export const diagnosticMsgs: Record<string, Parse> = {
	"diagnostic_msgs/DiagnosticArray": {
		namespace: "DiagnosticMsgsDiagnosticArray",
		desc: ["Array of diagnostic information."],
		fields: [
			{
				name: "header",
				type: "std_msgs/Header",
				isArray: false,
				comment: ["Header with timestamp and frame."],
			},
			{
				name: "status",
				type: "diagnostic_msgs/DiagnosticStatus",
				isArray: true,
				comment: ["Array of diagnostic status."],
			},
		],
	},
	"diagnostic_msgs/DiagnosticStatus": {
		namespace: "DiagnosticMsgsDiagnosticStatus",
		desc: ["Diagnostic status information."],
		fields: [
			{
				name: "level",
				type: "uint8",
				isArray: false,
				comment: ["Level of diagnostic status."],
			},
			{
				name: "name",
				type: "string",
				isArray: false,
				comment: ["Component name."],
			},
			{
				name: "message",
				type: "string",
				isArray: false,
				comment: ["Diagnostic message."],
			},
			{
				name: "hardware_id",
				type: "string",
				isArray: false,
				comment: ["Hardware identifier."],
			},
			{
				name: "values",
				type: "diagnostic_msgs/KeyValue",
				isArray: true,
				comment: ["Array of key-value pairs."],
			},
		],
	},
	"diagnostic_msgs/KeyValue": {
		namespace: "DiagnosticMsgsKeyValue",
		desc: ["Key-value pair for diagnostic information."],
		fields: [
			{ name: "key", type: "string", isArray: false, comment: ["Key name."] },
			{ name: "value", type: "string", isArray: false, comment: ["Value."] },
		],
	},
};
