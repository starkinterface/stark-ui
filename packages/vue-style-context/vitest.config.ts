import { resolve } from "node:path"
import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vitest/config"

const root = import.meta.dirname

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "#": root,
      "@": resolve(root, "src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./__tests__/setup.ts"],
  },
})
