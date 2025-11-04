import { loadConfig } from "unconfig";
import type { ParseConfig } from "./types";

export function defineConfig(config: ParseConfig) {
	return config;
}

export async function getConfig(): Promise<ParseConfig> {
	const { config } = await loadConfig<ParseConfig>({
		sources: [
			{
				files: "ros-generator.config",
			},
		],
	});
	return config ?? {};
}
