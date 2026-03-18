import { resolve } from "node:path"
import pkg from "./package.json" with { type: "json" }
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

const root = import.meta.dirname

export default defineConfig({
  build: {
    lib: { entry: resolve(root, "src/index.ts"), formats: ["es"] },
    minify: false,
    rollupOptions: {
      external: [...Object.keys(pkg.dependencies ?? {}), /^tailwind-variants/],
      output: {
        entryFileNames: "[name].js",
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
    target: "esnext",
  },
  plugins: [
    dts({
      entryRoot: "src",
      staticImport: true,
    }),
  ],
})
