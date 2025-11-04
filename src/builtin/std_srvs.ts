import type { Parse } from "../types";

export const stdSrvs: Record<string, Parse> = {
	"std_srvs/Empty": {
		namespace: "StdSrvsEmpty",
		desc: ["Empty service with no request or response data."],
		fields: [],
	},
	"std_srvs/SetBool": {
		namespace: "StdSrvsSetBool",
		desc: ["Service to set a boolean value."],
		fields: [
			{
				name: "data",
				type: "boolean",
				isArray: false,
				comment: ["Boolean value to set."],
			},
		],
	},
	"std_srvs/Trigger": {
		namespace: "StdSrvsTrigger",
		desc: ["Service to trigger an action."],
		fields: [
			{
				name: "success",
				type: "boolean",
				isArray: false,
				comment: ["Whether the trigger was successful."],
			},
			{
				name: "message",
				type: "string",
				isArray: false,
				comment: ["Message describing the result."],
			},
		],
	},
};
