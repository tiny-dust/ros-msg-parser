import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      include: ['index.ts', 'ros-to-ts/src/**/*'],
      outDir: 'dist',
      insertTypesEntry: true,
    }),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: {
        index: resolve(__dirname, 'index.ts'),
        'ros-to-ts': resolve(__dirname, 'ros-to-ts/src/index.ts'),
        'ros-to-ts/cli': resolve(__dirname, 'ros-to-ts/src/cli.ts'),
      },
      formats: ['cjs', 'es'],
      name: 'ScriptsLib',
      fileName: (format, entryName) => {
        const ext = format === 'cjs' ? 'cjs' : 'js';
        return `${entryName}.${ext}`;
      },
    },
    rollupOptions: {
      external: [
        'commander',
        'fs-extra',
        'glob',
        'unconfig',
        'simple-git',
        'fs',
        'path',
        'process',
        'os',
        'url',
      ],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'ros-to-ts/src'),
    },
  },
});
