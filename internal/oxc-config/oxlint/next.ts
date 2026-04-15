import react from "@stark-ui/oxc-config/oxlint/react"
import { defineConfig } from "oxlint"
import next from "ultracite/oxlint/next"

export default defineConfig({
  extends: [react, next],
})
