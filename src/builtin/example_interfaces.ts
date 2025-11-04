import type { Parse } from "../types";

export const exampleInterfaces: Record<string, Parse> = {
	"example_interfaces/Fibonacci": {
		namespace: "ExampleInterfacesFibonacci",
		desc: ["Fibonacci action for computing fibonacci sequence."],
		fields: [
			{
				name: "order",
				type: "int32",
				isArray: false,
				comment: ["Order of fibonacci sequence to compute."],
			},
		],
	},
};
