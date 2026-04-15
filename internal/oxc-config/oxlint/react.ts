import base from "@stark-ui/oxc-config/oxlint/base"
import { defineConfig } from "oxlint"
import react from "ultracite/oxlint/react"

export default defineConfig({
  extends: [base, react],
})
