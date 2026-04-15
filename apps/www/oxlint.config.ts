import base from "./../../oxlint.config.ts"
import { defineConfig } from "oxlint"
import next from "ultracite/oxlint/next"
import react from "ultracite/oxlint/react"

export default defineConfig({
  extends: [base, next, react],
})
