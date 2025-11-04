import type { Parse } from "../types";

export const geometryMsgs: Record<string, Parse> = {
	"geometry_msgs/Point": {
		namespace: "GeometryMsgsPoint",
		desc: ["Point representation in 3D space."],
		fields: [
			{
				name: "x",
				type: "float64",
				isArray: false,
				comment: ["X coordinate."],
			},
			{
				name: "y",
				type: "float64",
				isArray: false,
				comment: ["Y coordinate."],
			},
			{
				name: "z",
				type: "float64",
				isArray: false,
				comment: ["Z coordinate."],
			},
		],
	},
	"geometry_msgs/Vector3": {
		namespace: "GeometryMsgsVector3",
		desc: ["3D vector representation."],
		fields: [
			{ name: "x", type: "float64", isArray: false, comment: ["X component."] },
			{ name: "y", type: "float64", isArray: false, comment: ["Y component."] },
			{ name: "z", type: "float64", isArray: false, comment: ["Z component."] },
		],
	},
	"geometry_msgs/Quaternion": {
		namespace: "GeometryMsgsQuaternion",
		desc: ["Quaternion representation for rotation."],
		fields: [
			{ name: "x", type: "float64", isArray: false, comment: ["X component."] },
			{ name: "y", type: "float64", isArray: false, comment: ["Y component."] },
			{ name: "z", type: "float64", isArray: false, comment: ["Z component."] },
			{ name: "w", type: "float64", isArray: false, comment: ["W component."] },
		],
	},
	"geometry_msgs/Pose": {
		namespace: "GeometryMsgsPose",
		desc: ["Position and orientation in 3D space."],
		fields: [
			{
				name: "position",
				type: "geometry_msgs/Point",
				isArray: false,
				comment: ["Position in 3D space."],
			},
			{
				name: "orientation",
				type: "geometry_msgs/Quaternion",
				isArray: false,
				comment: ["Orientation as quaternion."],
			},
		],
	},
	"geometry_msgs/Pose2D": {
		namespace: "GeometryMsgsPose2D",
		desc: ["2D pose with x, y, and theta (yaw)."],
		fields: [
			{
				name: "x",
				type: "float64",
				isArray: false,
				comment: ["X coordinate."],
			},
			{
				name: "y",
				type: "float64",
				isArray: false,
				comment: ["Y coordinate."],
			},
			{
				name: "theta",
				type: "float64",
				isArray: false,
				comment: ["Rotation around Z axis (yaw) in radians."],
			},
		],
	},
	"geometry_msgs/PoseStamped": {
		namespace: "GeometryMsgsPoseStamped",
		desc: ["Pose with timestamp and frame information."],
		fields: [
			{
				name: "header",
				type: "std_msgs/Header",
				isArray: false,
				comment: ["Header with timestamp and frame."],
			},
			{
				name: "pose",
				type: "geometry_msgs/Pose",
				isArray: false,
				comment: ["Pose in 3D space."],
			},
		],
	},
	"geometry_msgs/Twist": {
		namespace: "GeometryMsgsTwist",
		desc: ["Linear and angular velocity."],
		fields: [
			{
				name: "linear",
				type: "geometry_msgs/Vector3",
				isArray: false,
				comment: ["Linear velocity."],
			},
			{
				name: "angular",
				type: "geometry_msgs/Vector3",
				isArray: false,
				comment: ["Angular velocity."],
			},
		],
	},
	"geometry_msgs/Wrench": {
		namespace: "GeometryMsgsWrench",
		desc: ["Force and torque representation."],
		fields: [
			{
				name: "force",
				type: "geometry_msgs/Vector3",
				isArray: false,
				comment: ["Force vector."],
			},
			{
				name: "torque",
				type: "geometry_msgs/Vector3",
				isArray: false,
				comment: ["Torque vector."],
			},
		],
	},
	"geometry_msgs/TransformStamped": {
		namespace: "GeometryMsgsTransformStamped",
		desc: ["Transform with timestamp and frame information."],
		fields: [
			{
				name: "header",
				type: "std_msgs/Header",
				isArray: false,
				comment: ["Header with timestamp and frame."],
			},
			{
				name: "child_frame_id",
				type: "string",
				isArray: false,
				comment: ["Child frame ID."],
			},
			{
				name: "transform",
				type: "geometry_msgs/Transform",
				isArray: false,
				comment: ["Transform data."],
			},
		],
	},
	"geometry_msgs/Transform": {
		namespace: "GeometryMsgsTransform",
		desc: ["Transformation representation."],
		fields: [
			{
				name: "translation",
				type: "geometry_msgs/Vector3",
				isArray: false,
				comment: ["Translation component."],
			},
			{
				name: "rotation",
				type: "geometry_msgs/Quaternion",
				isArray: false,
				comment: ["Rotation component."],
			},
		],
	},
};
