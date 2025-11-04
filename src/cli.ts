#!/usr/bin/env node
import { Command } from "commander";
import { getCliVersion } from "./utils";

const program = new Command();

program.version(getCliVersion());

program.action(async () => {
	const { main } = await import("./parse");

	return main();
});

program.parse();
