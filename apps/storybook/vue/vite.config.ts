import { resolve } from "node:path"
import tailwindcss from "@tailwindcss/vite"
import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"

const root = import.meta.dirname

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "#": resolve(root, "../../../packages/vue"),
      "@": resolve(root, "../../../packages/vue/src"),
    },
  },
})
