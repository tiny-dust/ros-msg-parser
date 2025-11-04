import type { Parse } from "../types";

export const objectRecognitionMsgs: Record<string, Parse> = {
	"object_recognition_msgs/ObjectType": {
		namespace: "ObjectRecognitionMsgsObjectType",
		desc: ["Type of an object in object recognition."],
		fields: [
			{
				name: "key",
				type: "string",
				isArray: false,
				comment: ["Object type key."],
			},
			{
				name: "db",
				type: "string",
				isArray: false,
				comment: ["Database name."],
			},
		],
	},
};
