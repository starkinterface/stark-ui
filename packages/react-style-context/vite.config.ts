import path from "node:path"
import preserveDirectives from "rollup-preserve-directives"
import dts from "unplugin-dts/vite"
import { defineConfig } from "vite"

const root = import.meta.dirname

export default defineConfig({
  build: {
    lib: { entry: path.resolve(root, "src/index.ts"), formats: ["es"] },
    minify: false,
    rollupOptions: {
      external: [
        /^react(?:$|\/)/u,
        /^react-dom(?:$|\/)/u,
        /^tailwind-variants/u,
      ],
      output: {
        entryFileNames: "[name].js",
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
    target: "esnext",
  },
  plugins: [
    preserveDirectives(),
    dts({
      entryRoot: "src",
      exclude: ["**/__tests__/**", "**/*.test.ts", "**/*.test.tsx"],
      staticImport: true,
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
})
