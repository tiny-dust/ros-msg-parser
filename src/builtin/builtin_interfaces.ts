import type { Parse } from "../types";

export const builtinInterfaces: Record<string, Parse> = {
	"builtin_interfaces/Time": {
		namespace: "BuiltinInterfacesTime",
		desc: ["Time representation."],
		fields: [
			{
				name: "sec",
				type: "int32",
				isArray: false,
				comment: ["Seconds since epoch."],
			},
			{
				name: "nanosec",
				type: "uint32",
				isArray: false,
				comment: ["Nanoseconds since the last second."],
			},
		],
	},
	"builtin_interfaces/Duration": {
		namespace: "BuiltinInterfacesDuration",
		desc: ["Duration representation."],
		fields: [
			{
				name: "sec",
				type: "int32",
				isArray: false,
				comment: ["Seconds component of duration."],
			},
			{
				name: "nanosec",
				type: "uint32",
				isArray: false,
				comment: ["Nanoseconds component of duration."],
			},
		],
	},
};
