import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const collapsibleClasses = tv({
  slots: {
    body: "collapsible-body",
    content: "collapsible-content",
    indicator: "collapsible-indicator",
    root: "collapsible",
    trigger: "collapsible-trigger",
  },
})

export type CollapsibleVariantProps = VariantProps<typeof collapsibleClasses>
