import { defineConfig } from "ros-msg-parser";

export default defineConfig({
	input: "./examples/ros",
	module: "custom_pkg",
	output: "./examples/ros.d.ts",
});
