import type { Parse } from "../types";

export const navMsgs: Record<string, Parse> = {
	"nav_msgs/OccupancyGrid": {
		namespace: "NavMsgsOccupancyGrid",
		desc: ["Occupancy grid representation."],
		fields: [
			{
				name: "header",
				type: "std_msgs/Header",
				isArray: false,
				comment: ["Header with timestamp and frame."],
			},
			{
				name: "info",
				type: "nav_msgs/MapMetaData",
				isArray: false,
				comment: ["Metadata for the map."],
			},
			{
				name: "data",
				type: "int8",
				isArray: true,
				comment: ["Map data, row-major order."],
			},
		],
	},
	"nav_msgs/MapMetaData": {
		namespace: "NavMsgsMapMetaData",
		desc: ["Metadata for occupancy grid maps."],
		fields: [
			{
				name: "map_load_time",
				type: "builtin_interfaces/Time",
				isArray: false,
				comment: ["Time when map was loaded."],
			},
			{
				name: "resolution",
				type: "float32",
				isArray: false,
				comment: ["Map resolution [m/cell]."],
			},
			{
				name: "width",
				type: "uint32",
				isArray: false,
				comment: ["Map width [cells]."],
			},
			{
				name: "height",
				type: "uint32",
				isArray: false,
				comment: ["Map height [cells]."],
			},
			{
				name: "origin",
				type: "geometry_msgs/Pose",
				isArray: false,
				comment: ["Origin of the map."],
			},
		],
	},
};
