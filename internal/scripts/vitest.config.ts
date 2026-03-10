import { resolve } from "node:path"
import { defineConfig } from "vitest/config"

const root = import.meta.dirname

export default defineConfig({
  resolve: {
    alias: {
      "#": root,
      "@": resolve(root, "src"),
    },
  },
  test: {
    environment: "node",
    globals: true,
  },
})
