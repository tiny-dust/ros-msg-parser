import { Parse } from '../types';

export const BuiltInMsg: Record<string, Parse> = {
  'std_msgs/Header': {
    namespace: 'StdMsgsHeader',
    desc: ['Standard metadata for higher-level stamped data types.'],
    fields: [
      {
        name: 'stamp',
        type: 'builtin_interfaces/Time',
        isArray: false,
        comment: ['Time stamp for the data.'],
      },
      {
        name: 'frame_id',
        type: 'string',
        isArray: false,
        comment: ['Frame this data is associated with.'],
      },
    ],
  },
  'std_msgs/String': {
    namespace: 'StdMsgsString',
    desc: ['String message type.'],
    fields: [
      {
        name: 'data',
        type: 'string',
        isArray: false,
        comment: ['String data.'],
      },
    ],
  },
  'std_msgs/Bool': {
    namespace: 'StdMsgsBool',
    desc: ['Boolean message type.'],
    fields: [
      {
        name: 'data',
        type: 'boolean',
        isArray: false,
        comment: ['Boolean data.'],
      },
    ],
  },
  'std_msgs/Int8': {
    namespace: 'StdMsgsInt8',
    desc: ['8-bit signed integer message type.'],
    fields: [
      {
        name: 'data',
        type: 'int8',
        isArray: false,
        comment: ['8-bit signed integer data.'],
      },
    ],
  },
  'std_msgs/Int16': {
    namespace: 'StdMsgsInt16',
    desc: ['16-bit signed integer message type.'],
    fields: [
      {
        name: 'data',
        type: 'int16',
        isArray: false,
        comment: ['16-bit signed integer data.'],
      },
    ],
  },
  'std_msgs/Int32': {
    namespace: 'StdMsgsInt32',
    desc: ['32-bit signed integer message type.'],
    fields: [
      {
        name: 'data',
        type: 'int32',
        isArray: false,
        comment: ['32-bit signed integer data.'],
      },
    ],
  },
  'std_msgs/Int64': {
    namespace: 'StdMsgsInt64',
    desc: ['64-bit signed integer message type.'],
    fields: [
      {
        name: 'data',
        type: 'int64',
        isArray: false,
        comment: ['64-bit signed integer data.'],
      },
    ],
  },
  'std_msgs/UInt8': {
    namespace: 'StdMsgsUInt8',
    desc: ['8-bit unsigned integer message type.'],
    fields: [
      {
        name: 'data',
        type: 'uint8',
        isArray: false,
        comment: ['8-bit unsigned integer data.'],
      },
    ],
  },
  'std_msgs/UInt16': {
    namespace: 'StdMsgsUInt16',
    desc: ['16-bit unsigned integer message type.'],
    fields: [
      {
        name: 'data',
        type: 'uint16',
        isArray: false,
        comment: ['16-bit unsigned integer data.'],
      },
    ],
  },
  'std_msgs/UInt32': {
    namespace: 'StdMsgsUInt32',
    desc: ['32-bit unsigned integer message type.'],
    fields: [
      {
        name: 'data',
        type: 'uint32',
        isArray: false,
        comment: ['32-bit unsigned integer data.'],
      },
    ],
  },
  'std_msgs/UInt64': {
    namespace: 'StdMsgsUInt64',
    desc: ['64-bit unsigned integer message type.'],
    fields: [
      {
        name: 'data',
        type: 'uint64',
        isArray: false,
        comment: ['64-bit unsigned integer data.'],
      },
    ],
  },
  'std_msgs/Float32': {
    namespace: 'StdMsgsFloat32',
    desc: ['32-bit floating point message type.'],
    fields: [
      {
        name: 'data',
        type: 'float32',
        isArray: false,
        comment: ['32-bit floating point data.'],
      },
    ],
  },
  'std_msgs/Float64': {
    namespace: 'StdMsgsFloat64',
    desc: ['64-bit floating point message type.'],
    fields: [
      {
        name: 'data',
        type: 'float64',
        isArray: false,
        comment: ['64-bit floating point data.'],
      },
    ],
  },

  // builtin_interfaces
  'builtin_interfaces/Time': {
    namespace: 'BuiltinInterfacesTime',
    desc: ['Time representation.'],
    fields: [
      {
        name: 'sec',
        type: 'int32',
        isArray: false,
        comment: ['Seconds since epoch.'],
      },
      {
        name: 'nanosec',
        type: 'uint32',
        isArray: false,
        comment: ['Nanoseconds since the last second.'],
      },
    ],
  },
  'builtin_interfaces/Duration': {
    namespace: 'BuiltinInterfacesDuration',
    desc: ['Duration representation.'],
    fields: [
      {
        name: 'sec',
        type: 'int32',
        isArray: false,
        comment: ['Seconds component of duration.'],
      },
      {
        name: 'nanosec',
        type: 'uint32',
        isArray: false,
        comment: ['Nanoseconds component of duration.'],
      },
    ],
  },

  // geometry_msgs
  'geometry_msgs/Point': {
    namespace: 'GeometryMsgsPoint',
    desc: ['Point representation in 3D space.'],
    fields: [
      {
        name: 'x',
        type: 'float64',
        isArray: false,
        comment: ['X coordinate.'],
      },
      {
        name: 'y',
        type: 'float64',
        isArray: false,
        comment: ['Y coordinate.'],
      },
      {
        name: 'z',
        type: 'float64',
        isArray: false,
        comment: ['Z coordinate.'],
      },
    ],
  },
  'geometry_msgs/Vector3': {
    namespace: 'GeometryMsgsVector3',
    desc: ['3D vector representation.'],
    fields: [
      {
        name: 'x',
        type: 'float64',
        isArray: false,
        comment: ['X component.'],
      },
      {
        name: 'y',
        type: 'float64',
        isArray: false,
        comment: ['Y component.'],
      },
      {
        name: 'z',
        type: 'float64',
        isArray: false,
        comment: ['Z component.'],
      },
    ],
  },
  'geometry_msgs/Quaternion': {
    namespace: 'GeometryMsgsQuaternion',
    desc: ['Quaternion representation for rotation.'],
    fields: [
      {
        name: 'x',
        type: 'float64',
        isArray: false,
        comment: ['X component.'],
      },
      {
        name: 'y',
        type: 'float64',
        isArray: false,
        comment: ['Y component.'],
      },
      {
        name: 'z',
        type: 'float64',
        isArray: false,
        comment: ['Z component.'],
      },
      {
        name: 'w',
        type: 'float64',
        isArray: false,
        comment: ['W component.'],
      },
    ],
  },
  'geometry_msgs/Pose': {
    namespace: 'GeometryMsgsPose',
    desc: ['Position and orientation in 3D space.'],
    fields: [
      {
        name: 'position',
        type: 'geometry_msgs/Point',
        isArray: false,
        comment: ['Position in 3D space.'],
      },
      {
        name: 'orientation',
        type: 'geometry_msgs/Quaternion',
        isArray: false,
        comment: ['Orientation as quaternion.'],
      },
    ],
  },
  'geometry_msgs/Pose2D': {
    namespace: 'GeometryMsgsPose2D',
    desc: ['2D pose with x, y, and theta (yaw).'],
    fields: [
      {
        name: 'x',
        type: 'float64',
        isArray: false,
        comment: ['X coordinate.'],
      },
      {
        name: 'y',
        type: 'float64',
        isArray: false,
        comment: ['Y coordinate.'],
      },
      {
        name: 'theta',
        type: 'float64',
        isArray: false,
        comment: ['Rotation around Z axis (yaw) in radians.'],
      },
    ],
  },
  'geometry_msgs/PoseStamped': {
    namespace: 'GeometryMsgsPoseStamped',
    desc: ['Pose with timestamp and frame information.'],
    fields: [
      {
        name: 'header',
        type: 'std_msgs/Header',
        isArray: false,
        comment: ['Header with timestamp and frame.'],
      },
      {
        name: 'pose',
        type: 'geometry_msgs/Pose',
        isArray: false,
        comment: ['Pose in 3D space.'],
      },
    ],
  },

  'geometry_msgs/Twist': {
    namespace: 'GeometryMsgsTwist',
    desc: ['Linear and angular velocity.'],
    fields: [
      {
        name: 'linear',
        type: 'geometry_msgs/Vector3',
        isArray: false,
        comment: ['Linear velocity.'],
      },
      {
        name: 'angular',
        type: 'geometry_msgs/Vector3',
        isArray: false,
        comment: ['Angular velocity.'],
      },
    ],
  },
  'geometry_msgs/Wrench': {
    namespace: 'GeometryMsgsWrench',
    desc: ['Force and torque representation.'],
    fields: [
      {
        name: 'force',
        type: 'geometry_msgs/Vector3',
        isArray: false,
        comment: ['Force vector.'],
      },
      {
        name: 'torque',
        type: 'geometry_msgs/Vector3',
        isArray: false,
        comment: ['Torque vector.'],
      },
    ],
  },

  // sensor_msgs
  'sensor_msgs/LaserScan': {
    namespace: 'SensorMsgsLaserScan',
    desc: ['Laser scan data.'],
    fields: [
      {
        name: 'header',
        type: 'std_msgs/Header',
        isArray: false,
        comment: ['Header with timestamp and frame.'],
      },
      {
        name: 'angle_min',
        type: 'float32',
        isArray: false,
        comment: ['Start angle of scan [rad].'],
      },
      {
        name: 'angle_max',
        type: 'float32',
        isArray: false,
        comment: ['End angle of scan [rad].'],
      },
      {
        name: 'angle_increment',
        type: 'float32',
        isArray: false,
        comment: ['Angular distance between measurements [rad].'],
      },
      {
        name: 'time_increment',
        type: 'float32',
        isArray: false,
        comment: ['Time between measurements [seconds].'],
      },
      {
        name: 'scan_time',
        type: 'float32',
        isArray: false,
        comment: ['Time between scans [seconds].'],
      },
      {
        name: 'range_min',
        type: 'float32',
        isArray: false,
        comment: ['Minimum range value [m].'],
      },
      {
        name: 'range_max',
        type: 'float32',
        isArray: false,
        comment: ['Maximum range value [m].'],
      },
      {
        name: 'ranges',
        type: 'float32',
        isArray: true,
        comment: ['Range data [m].'],
      },
      {
        name: 'intensities',
        type: 'float32',
        isArray: true,
        comment: ['Intensity data.'],
      },
    ],
  },
  'sensor_msgs/Image': {
    namespace: 'SensorMsgsImage',
    desc: ['Uncompressed image message.'],
    fields: [
      {
        name: 'header',
        type: 'std_msgs/Header',
        isArray: false,
        comment: ['Header with timestamp and frame.'],
      },
      {
        name: 'height',
        type: 'uint32',
        isArray: false,
        comment: ['Image height [pixels].'],
      },
      {
        name: 'width',
        type: 'uint32',
        isArray: false,
        comment: ['Image width [pixels].'],
      },
      {
        name: 'encoding',
        type: 'string',
        isArray: false,
        comment: ['Encoding of pixels.'],
      },
      {
        name: 'is_bigendian',
        type: 'uint8',
        isArray: false,
        comment: ['Is data bigendian?'],
      },
      {
        name: 'step',
        type: 'uint32',
        isArray: false,
        comment: ['Full row length in bytes.'],
      },
      {
        name: 'data',
        type: 'uint8',
        isArray: true,
        comment: ['Actual matrix data.'],
      },
    ],
  },
  'sensor_msgs/CompressedImage': {
    namespace: 'SensorMsgsCompressedImage',
    desc: ['Compressed image message.'],
    fields: [
      {
        name: 'header',
        type: 'std_msgs/Header',
        isArray: false,
        comment: ['Header with timestamp and frame.'],
      },
      {
        name: 'format',
        type: 'string',
        isArray: false,
        comment: ['Specifies the format of the data.'],
      },
      {
        name: 'data',
        type: 'uint8',
        isArray: true,
        comment: ['Compressed image data.'],
      },
    ],
  },
  'sensor_msgs/JointState': {
    namespace: 'SensorMsgsJointState',
    desc: ['Sensor data for joint state information.'],
    fields: [
      {
        name: 'header',
        type: 'std_msgs/Header',
        isArray: false,
        comment: ['Header with timestamp and frame.'],
      },
      {
        name: 'name',
        type: 'string',
        isArray: true,
        comment: ['Joint names.'],
      },
      {
        name: 'position',
        type: 'float64',
        isArray: true,
        comment: ['Joint positions.'],
      },
      {
        name: 'velocity',
        type: 'float64',
        isArray: true,
        comment: ['Joint velocities.'],
      },
      {
        name: 'effort',
        type: 'float64',
        isArray: true,
        comment: ['Joint efforts/torques.'],
      },
    ],
  },

  // nav_msgs
  'nav_msgs/OccupancyGrid': {
    namespace: 'NavMsgsOccupancyGrid',
    desc: ['Occupancy grid representation.'],
    fields: [
      {
        name: 'header',
        type: 'std_msgs/Header',
        isArray: false,
        comment: ['Header with timestamp and frame.'],
      },
      {
        name: 'info',
        type: 'nav_msgs/MapMetaData',
        isArray: false,
        comment: ['Metadata for the map.'],
      },
      {
        name: 'data',
        type: 'int8',
        isArray: true,
        comment: ['Map data, row-major order.'],
      },
    ],
  },
  'nav_msgs/MapMetaData': {
    namespace: 'NavMsgsMapMetaData',
    desc: ['Metadata for occupancy grid maps.'],
    fields: [
      {
        name: 'map_load_time',
        type: 'builtin_interfaces/Time',
        isArray: false,
        comment: ['Time when map was loaded.'],
      },
      {
        name: 'resolution',
        type: 'float32',
        isArray: false,
        comment: ['Map resolution [m/cell].'],
      },
      {
        name: 'width',
        type: 'uint32',
        isArray: false,
        comment: ['Map width [cells].'],
      },
      {
        name: 'height',
        type: 'uint32',
        isArray: false,
        comment: ['Map height [cells].'],
      },
      {
        name: 'origin',
        type: 'geometry_msgs/Pose',
        isArray: false,
        comment: ['Origin of the map.'],
      },
    ],
  },

  // shape_msgs
  'shape_msgs/SolidPrimitive': {
    namespace: 'ShapeMsgsSolidPrimitive',
    desc: ['Definition of a solid primitive shape.'],
    fields: [
      {
        name: 'type',
        type: 'uint8',
        isArray: false,
        comment: ['Type of primitive.'],
      },
      {
        name: 'dimensions',
        type: 'float64',
        isArray: true,
        comment: ['Dimensions of the primitive.'],
      },
    ],
  },
  'shape_msgs/Mesh': {
    namespace: 'ShapeMsgsMesh',
    desc: ['Definition of a mesh.'],
    fields: [
      {
        name: 'triangles',
        type: 'shape_msgs/MeshTriangle',
        isArray: true,
        comment: ['List of triangles.'],
      },
      {
        name: 'vertices',
        type: 'geometry_msgs/Point',
        isArray: true,
        comment: ['List of vertices.'],
      },
    ],
  },
  'shape_msgs/MeshTriangle': {
    namespace: 'ShapeMsgsMeshTriangle',
    desc: ['Definition of a triangle in a mesh.'],
    fields: [
      {
        name: 'vertex_indices',
        type: 'uint32',
        isArray: true,
        comment: ['Indices of vertices that form this triangle.'],
      },
    ],
  },
  'shape_msgs/Plane': {
    namespace: 'ShapeMsgsPlane',
    desc: ['Definition of a plane.'],
    fields: [
      {
        name: 'coef',
        type: 'float64',
        isArray: true,
        comment: [
          'Plane coefficients a, b, c, d for equation ax + by + cz + d = 0.',
        ],
      },
    ],
  },

  // object_recognition_msgs
  'object_recognition_msgs/ObjectType': {
    namespace: 'ObjectRecognitionMsgsObjectType',
    desc: ['Type of an object in object recognition.'],
    fields: [
      {
        name: 'key',
        type: 'string',
        isArray: false,
        comment: ['Object type key.'],
      },
      {
        name: 'db',
        type: 'string',
        isArray: false,
        comment: ['Database name.'],
      },
    ],
  },

  // diagnostic_msgs
  'diagnostic_msgs/DiagnosticArray': {
    namespace: 'DiagnosticMsgsDiagnosticArray',
    desc: ['Array of diagnostic information.'],
    fields: [
      {
        name: 'header',
        type: 'std_msgs/Header',
        isArray: false,
        comment: ['Header with timestamp and frame.'],
      },
      {
        name: 'status',
        type: 'diagnostic_msgs/DiagnosticStatus',
        isArray: true,
        comment: ['Array of diagnostic status.'],
      },
    ],
  },
  'diagnostic_msgs/DiagnosticStatus': {
    namespace: 'DiagnosticMsgsDiagnosticStatus',
    desc: ['Diagnostic status information.'],
    fields: [
      {
        name: 'level',
        type: 'uint8',
        isArray: false,
        comment: ['Level of diagnostic status.'],
      },
      {
        name: 'name',
        type: 'string',
        isArray: false,
        comment: ['Component name.'],
      },
      {
        name: 'message',
        type: 'string',
        isArray: false,
        comment: ['Diagnostic message.'],
      },
      {
        name: 'hardware_id',
        type: 'string',
        isArray: false,
        comment: ['Hardware identifier.'],
      },
      {
        name: 'values',
        type: 'diagnostic_msgs/KeyValue',
        isArray: true,
        comment: ['Array of key-value pairs.'],
      },
    ],
  },
  'diagnostic_msgs/KeyValue': {
    namespace: 'DiagnosticMsgsKeyValue',
    desc: ['Key-value pair for diagnostic information.'],
    fields: [
      {
        name: 'key',
        type: 'string',
        isArray: false,
        comment: ['Key name.'],
      },
      {
        name: 'value',
        type: 'string',
        isArray: false,
        comment: ['Value.'],
      },
    ],
  },

  // std_msgs arrays
  'std_msgs/ByteMultiArray': {
    namespace: 'StdMsgsByteMultiArray',
    desc: ['Multi-dimensional array of bytes.'],
    fields: [
      {
        name: 'layout',
        type: 'std_msgs/MultiArrayLayout',
        isArray: false,
        comment: ['Layout specification.'],
      },
      {
        name: 'data',
        type: 'uint8',
        isArray: true,
        comment: ['Array data.'],
      },
    ],
  },
  'std_msgs/MultiArrayLayout': {
    namespace: 'StdMsgsMultiArrayLayout',
    desc: ['Layout specification for multi-dimensional arrays.'],
    fields: [
      {
        name: 'dim',
        type: 'std_msgs/MultiArrayDimension',
        isArray: true,
        comment: ['Array dimensions.'],
      },
      {
        name: 'data_offset',
        type: 'uint32',
        isArray: false,
        comment: ['Data offset.'],
      },
    ],
  },
  'std_msgs/MultiArrayDimension': {
    namespace: 'StdMsgsMultiArrayDimension',
    desc: ['Dimension specification for multi-dimensional arrays.'],
    fields: [
      {
        name: 'label',
        type: 'string',
        isArray: false,
        comment: ['Dimension label.'],
      },
      {
        name: 'size',
        type: 'uint32',
        isArray: false,
        comment: ['Dimension size.'],
      },
      {
        name: 'stride',
        type: 'uint32',
        isArray: false,
        comment: ['Dimension stride.'],
      },
    ],
  },

  // tf2_msgs
  'tf2_msgs/TFMessage': {
    namespace: 'Tf2MsgsTFMessage',
    desc: ['Transform message containing multiple transforms.'],
    fields: [
      {
        name: 'transforms',
        type: 'geometry_msgs/TransformStamped',
        isArray: true,
        comment: ['Array of transforms.'],
      },
    ],
  },

  // geometry_msgs additional types
  'geometry_msgs/TransformStamped': {
    namespace: 'GeometryMsgsTransformStamped',
    desc: ['Transform with timestamp and frame information.'],
    fields: [
      {
        name: 'header',
        type: 'std_msgs/Header',
        isArray: false,
        comment: ['Header with timestamp and frame.'],
      },
      {
        name: 'child_frame_id',
        type: 'string',
        isArray: false,
        comment: ['Child frame ID.'],
      },
      {
        name: 'transform',
        type: 'geometry_msgs/Transform',
        isArray: false,
        comment: ['Transform data.'],
      },
    ],
  },
  'geometry_msgs/Transform': {
    namespace: 'GeometryMsgsTransform',
    desc: ['Transformation representation.'],
    fields: [
      {
        name: 'translation',
        type: 'geometry_msgs/Vector3',
        isArray: false,
        comment: ['Translation component.'],
      },
      {
        name: 'rotation',
        type: 'geometry_msgs/Quaternion',
        isArray: false,
        comment: ['Rotation component.'],
      },
    ],
  },
};

// 服务类型
export const BuiltInSrv: Record<string, Parse> = {
  'std_srvs/Empty': {
    namespace: 'StdSrvsEmpty',
    desc: ['Empty service with no request or response data.'],
    fields: [],
  },
  'std_srvs/SetBool': {
    namespace: 'StdSrvsSetBool',
    desc: ['Service to set a boolean value.'],
    fields: [
      {
        name: 'data',
        type: 'boolean',
        isArray: false,
        comment: ['Boolean value to set.'],
      },
    ],
  },
  'std_srvs/Trigger': {
    namespace: 'StdSrvsTrigger',
    desc: ['Service to trigger an action.'],
    fields: [
      {
        name: 'success',
        type: 'boolean',
        isArray: false,
        comment: ['Whether the trigger was successful.'],
      },
      {
        name: 'message',
        type: 'string',
        isArray: false,
        comment: ['Message describing the result.'],
      },
    ],
  },
};

// 动作类型
export const BuiltInAction: Record<string, Parse> = {
  'example_interfaces/Fibonacci': {
    namespace: 'ExampleInterfacesFibonacci',
    desc: ['Fibonacci action for computing fibonacci sequence.'],
    fields: [
      {
        name: 'order',
        type: 'int32',
        isArray: false,
        comment: ['Order of fibonacci sequence to compute.'],
      },
    ],
  },
};

// 导出所有内置类型
export const BuiltInTypes = {
  ...BuiltInMsg,
  ...BuiltInSrv,
  ...BuiltInAction,
};
