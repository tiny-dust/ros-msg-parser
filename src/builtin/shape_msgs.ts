import type { Parse } from "../types";

export const shapeMsgs: Record<string, Parse> = {
	"shape_msgs/SolidPrimitive": {
		namespace: "ShapeMsgsSolidPrimitive",
		desc: ["Definition of a solid primitive shape."],
		fields: [
			{
				name: "type",
				type: "uint8",
				isArray: false,
				comment: ["Type of primitive."],
			},
			{
				name: "dimensions",
				type: "float64",
				isArray: true,
				comment: ["Dimensions of the primitive."],
			},
		],
	},
	"shape_msgs/Mesh": {
		namespace: "ShapeMsgsMesh",
		desc: ["Definition of a mesh."],
		fields: [
			{
				name: "triangles",
				type: "shape_msgs/MeshTriangle",
				isArray: true,
				comment: ["List of triangles."],
			},
			{
				name: "vertices",
				type: "geometry_msgs/Point",
				isArray: true,
				comment: ["List of vertices."],
			},
		],
	},
	"shape_msgs/MeshTriangle": {
		namespace: "ShapeMsgsMeshTriangle",
		desc: ["Definition of a triangle in a mesh."],
		fields: [
			{
				name: "vertex_indices",
				type: "uint32",
				isArray: true,
				comment: ["Indices of vertices that form this triangle."],
			},
		],
	},
	"shape_msgs/Plane": {
		namespace: "ShapeMsgsPlane",
		desc: ["Definition of a plane."],
		fields: [
			{
				name: "coef",
				type: "float64",
				isArray: true,
				comment: [
					"Plane coefficients a, b, c, d for equation ax + by + cz + d = 0.",
				],
			},
		],
	},
};
