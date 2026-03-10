import { resolve } from "node:path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

const root = import.meta.dirname

export default defineConfig({
  build: {
    lib: { entry: resolve(root, "src/index.ts"), formats: ["es"] },
    minify: false,
    rollupOptions: {
      external: [/^vue($|\/)/, /^clsx/],
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
      exclude: ["**/__tests__/**", "**/*.test.ts", "**/*.test.tsx"],
      staticImport: true,
    }),
  ],
  resolve: {
    alias: {
      "#": root,
      "@": resolve(root, "src"),
    },
  },
})
