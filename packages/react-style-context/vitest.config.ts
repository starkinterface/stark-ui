import { resolve } from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

const root = import.meta.dirname

export default defineConfig({
  plugins: [react()],
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
