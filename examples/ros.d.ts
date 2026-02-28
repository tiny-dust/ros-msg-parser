// Built-in ROS message types

    export enum AtsHmiDispatcherControlRequestStation {
  STATION_ALL=0,
  STATION_SEEDING=1,
  STATION_REPLENISH=2,
}

export enum AtsHmiDispatcherControlRequestControl {
  CONTROL_START=0,
  CONTROL_PAUSE=1,
  CONTROL_RESUME=2,
  CONTROL_FINISH=3,
}

export enum AtsHmiDispatcherControlRequestOperationMode {
  OPERATION_MODE_DEFAULT=0,
  OPERATION_MODE_DEMO=1,
  OPERATION_MODE_INTERACTIVE=2,
}

export enum AtsHmiDispatcherControlRequestLoopType {
  LOOP_TYPE_RANDOM=1,
  LOOP_TYPE_SEQUENTIAL=2,
}

/**
 * 机器控制 srv
 */
export interface AtsHmiDispatcherControlRequest {
  station?: AtsHmiDispatcherControlRequestStation;
  control?: AtsHmiDispatcherControlRequestControl;
  tree_names?: string[];
  col?: number;
  row?: number;
  operation_mode?: AtsHmiDispatcherControlRequestOperationMode;
  /**
   * demo mode loop type
   */
  loop_type?: AtsHmiDispatcherControlRequestLoopType;
  /**
   * demo mode loop running start col
   */
  col_start?: number;
  /**
   * demo mode loop running start col
   */
  col_end?: number;
}

/**
 * result
 */
export interface AtsHmiDispatcherControlResponse {
  /**
   * result
   */
  success?: boolean;
  message?: string;
}

export enum RobotStateMode {
  /**
   * Idle
   */
  MODE_IDLE=0,
  /**
   * Active
   */
  MODE_ACTIVE=1,
  /**
   * Error
   */
  MODE_ERROR=2,
}

/**
 * Robot state with header, name, enum mode and pose
 */
export interface RobotState {
  /**
   * Standard header
   */
  header: StdMsgsHeader;
  /**
   * Robot name
   */
  name: string;
  mode: RobotStateMode;
  /**
   * Current pose in map frame
   */
  pose: GeometryMsgsPose;
}

/**
 * Composite message referencing another custom message in the same module
 */
export interface Composite {
  /**
   * Current state
   */
  state: RobotState;
  /**
   * History of states
   */
  history: RobotState[];
}

/**
 * Navigate to a target pose
 * Goal
 */
export interface NavigateGoal {
  /**
   * Goal
   */
  target?: GeometryMsgsPose;
}

/**
 * Feedback
 */
export interface NavigateFeedback {
  /**
   * Feedback
   * 0.0~1.0
   */
  progress?: number;
}

/**
 * Result
 */
export interface NavigateResult {
  /**
   * Result
   */
  reached?: boolean;
}

/**
 * Standard metadata for higher-level stamped data types.
 */
export interface StdMsgsHeader {
  /**
   * Time stamp for the data.
   */
  stamp: BuiltinInterfacesTime;
  /**
   * Frame this data is associated with.
   */
  frame_id: string;
}

/**
 * Position and orientation in 3D space.
 */
export interface GeometryMsgsPose {
  /**
   * Position in 3D space.
   */
  position: GeometryMsgsPoint;
  /**
   * Orientation as quaternion.
   */
  orientation: GeometryMsgsQuaternion;
}

/**
 * Time representation.
 */
export interface BuiltinInterfacesTime {
  /**
   * Seconds since epoch.
   */
  sec: number;
  /**
   * Nanoseconds since the last second.
   */
  nanosec: number;
}

/**
 * Point representation in 3D space.
 */
export interface GeometryMsgsPoint {
  /**
   * X coordinate.
   */
  x: number;
  /**
   * Y coordinate.
   */
  y: number;
  /**
   * Z coordinate.
   */
  z: number;
}

/**
 * Quaternion representation for rotation.
 */
export interface GeometryMsgsQuaternion {
  /**
   * X component.
   */
  x: number;
  /**
   * Y component.
   */
  y: number;
  /**
   * Z component.
   */
  z: number;
  /**
   * W component.
   */
  w: number;
}

// End of auto-generated content
