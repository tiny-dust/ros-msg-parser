import type { Parse } from "../types";
import { builtinInterfaces } from "./builtin_interfaces";
import { diagnosticMsgs } from "./diagnostic_msgs";
import { exampleInterfaces } from "./example_interfaces";
import { geometryMsgs } from "./geometry_msgs";
import { navMsgs } from "./nav_msgs";
import { objectRecognitionMsgs } from "./object_recognition_msgs";
import { sensorMsgs } from "./sensor_msgs";
import { shapeMsgs } from "./shape_msgs";
import { stdMsgs } from "./std_msgs";
import { stdSrvs } from "./std_srvs";
import { tf2Msgs } from "./tf2_msgs";

export const BuiltInMsg: Record<string, Parse> = {
	...stdMsgs,
	...builtinInterfaces,
	...geometryMsgs,
	...sensorMsgs,
	...navMsgs,
	...shapeMsgs,
	...objectRecognitionMsgs,
	...diagnosticMsgs,
	...tf2Msgs,
};

export const BuiltInSrv: Record<string, Parse> = {
	...stdSrvs,
};

export const BuiltInAction: Record<string, Parse> = {
	...exampleInterfaces,
};

export const BuiltInTypes = {
	...BuiltInMsg,
	...BuiltInSrv,
	...BuiltInAction,
};
