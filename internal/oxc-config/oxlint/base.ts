import { defineConfig } from "oxlint"
import core from "ultracite/oxlint/core"

export default defineConfig({
  extends: [core],
  rules: {
    "oxc/no-barrel-file": "off",
  },
})
