#!/usr/bin/env node
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { Command } from "commander";
import fse from "fs-extra";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const CLI_PACKAGE_JSON = resolve(__dirname, "../package.json");

function getCliVersion() {
	try {
		return fse.readJsonSync(CLI_PACKAGE_JSON).version as string;
	} catch {
		return "0.0.0";
	}
}

const program = new Command();

program.version(getCliVersion());

program.action(async () => {
	const { main } = await import("./parse");

	return main();
});

program.parse();
