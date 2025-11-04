import type { Parse } from "../types";

export const tf2Msgs: Record<string, Parse> = {
	"tf2_msgs/TFMessage": {
		namespace: "Tf2MsgsTFMessage",
		desc: ["Transform message containing multiple transforms."],
		fields: [
			{
				name: "transforms",
				type: "geometry_msgs/TransformStamped",
				isArray: true,
				comment: ["Array of transforms."],
			},
		],
	},
};
