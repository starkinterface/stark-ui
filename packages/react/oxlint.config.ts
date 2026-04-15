import base from "./../../oxlint.config.ts"
import { defineConfig } from "oxlint"
import react from "ultracite/oxlint/react"

export default defineConfig({
  extends: [base, react],
})
