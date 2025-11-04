import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    dts({
      include: ["src/**/*"],
      outDir: "dist",
      insertTypesEntry: true,
    }),
  ],
  build: {
    outDir: "dist",
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        cli: resolve(__dirname, "src/cli.ts"),
      },
      formats: ["cjs", "es"],
      name: "RosMsgParser",
      fileName: (format, entryName) => {
        const ext = format === "cjs" ? "cjs" : "js";
        return `${entryName}.${ext}`;
      },
    },
    rollupOptions: {
      external: [
        // runtime deps
        "commander",
        "glob",
        "unconfig",
        "simple-git",
        "fs-extra",
        "graceful-fs",
        // node built-ins
        "fs",
        "path",
        "process",
        "os",
        "url",
        "util",
        "node:path",
        "node:url",
        "node:util",
      ],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
