import { resolve } from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const root = import.meta.dirname

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "#": resolve(root, "../../../packages/react"),
      "@": resolve(root, "../../../packages/react/src"),
    },
  },
})
