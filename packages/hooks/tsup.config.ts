import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  entry: ['src/meta.ts'],
  treeshake: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  dts: true,
  skipNodeModulesBundle: true,
  outDir: 'dist',
  format: ['esm'],
  minify: !options.watch
}))
