import base from "./../../oxlint.config.ts"
import { defineConfig } from "oxlint"
import vue from "ultracite/oxlint/vue"

export default defineConfig({
  extends: [base, vue],
  rules: {
    "vue/define-props-destructuring": "allow",
  },
})
