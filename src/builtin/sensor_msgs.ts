import type { Parse } from "../types";

export const sensorMsgs: Record<string, Parse> = {
	"sensor_msgs/LaserScan": {
		namespace: "SensorMsgsLaserScan",
		desc: ["Laser scan data."],
		fields: [
			{
				name: "header",
				type: "std_msgs/Header",
				isArray: false,
				comment: ["Header with timestamp and frame."],
			},
			{
				name: "angle_min",
				type: "float32",
				isArray: false,
				comment: ["Start angle of scan [rad]."],
			},
			{
				name: "angle_max",
				type: "float32",
				isArray: false,
				comment: ["End angle of scan [rad]."],
			},
			{
				name: "angle_increment",
				type: "float32",
				isArray: false,
				comment: ["Angular distance between measurements [rad]."],
			},
			{
				name: "time_increment",
				type: "float32",
				isArray: false,
				comment: ["Time between measurements [seconds]."],
			},
			{
				name: "scan_time",
				type: "float32",
				isArray: false,
				comment: ["Time between scans [seconds]."],
			},
			{
				name: "range_min",
				type: "float32",
				isArray: false,
				comment: ["Minimum range value [m]."],
			},
			{
				name: "range_max",
				type: "float32",
				isArray: false,
				comment: ["Maximum range value [m]."],
			},
			{
				name: "ranges",
				type: "float32",
				isArray: true,
				comment: ["Range data [m]."],
			},
			{
				name: "intensities",
				type: "float32",
				isArray: true,
				comment: ["Intensity data."],
			},
		],
	},
	"sensor_msgs/Image": {
		namespace: "SensorMsgsImage",
		desc: ["Uncompressed image message."],
		fields: [
			{
				name: "header",
				type: "std_msgs/Header",
				isArray: false,
				comment: ["Header with timestamp and frame."],
			},
			{
				name: "height",
				type: "uint32",
				isArray: false,
				comment: ["Image height [pixels]."],
			},
			{
				name: "width",
				type: "uint32",
				isArray: false,
				comment: ["Image width [pixels]."],
			},
			{
				name: "encoding",
				type: "string",
				isArray: false,
				comment: ["Encoding of pixels."],
			},
			{
				name: "is_bigendian",
				type: "uint8",
				isArray: false,
				comment: ["Is data bigendian?"],
			},
			{
				name: "step",
				type: "uint32",
				isArray: false,
				comment: ["Full row length in bytes."],
			},
			{
				name: "data",
				type: "uint8",
				isArray: true,
				comment: ["Actual matrix data."],
			},
		],
	},
	"sensor_msgs/CompressedImage": {
		namespace: "SensorMsgsCompressedImage",
		desc: ["Compressed image message."],
		fields: [
			{
				name: "header",
				type: "std_msgs/Header",
				isArray: false,
				comment: ["Header with timestamp and frame."],
			},
			{
				name: "format",
				type: "string",
				isArray: false,
				comment: ["Specifies the format of the data."],
			},
			{
				name: "data",
				type: "uint8",
				isArray: true,
				comment: ["Compressed image data."],
			},
		],
	},
	"sensor_msgs/JointState": {
		namespace: "SensorMsgsJointState",
		desc: ["Sensor data for joint state information."],
		fields: [
			{
				name: "header",
				type: "std_msgs/Header",
				isArray: false,
				comment: ["Header with timestamp and frame."],
			},
			{
				name: "name",
				type: "string",
				isArray: true,
				comment: ["Joint names."],
			},
			{
				name: "position",
				type: "float64",
				isArray: true,
				comment: ["Joint positions."],
			},
			{
				name: "velocity",
				type: "float64",
				isArray: true,
				comment: ["Joint velocities."],
			},
			{
				name: "effort",
				type: "float64",
				isArray: true,
				comment: ["Joint efforts/torques."],
			},
		],
	},
};
