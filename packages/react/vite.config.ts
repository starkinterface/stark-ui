import { resolve } from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import pkg from "./package.json" with { type: "json" }

const root = import.meta.dirname

export default defineConfig({
  build: {
    lib: { entry: resolve(root, "src/index.ts"), formats: ["es"] },
    minify: false,
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies ?? {}),
        ...Object.keys(pkg.peerDependencies ?? {}),
        /^react($|\/)/,
        /^react-dom($|\/)/,
        /^@ark-ui/,
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
    react(),
    dts({
      entryRoot: "src",
      exclude: ["**/*.stories.tsx", "**/examples/**"],
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
