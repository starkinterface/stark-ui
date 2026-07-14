import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const clipboardClasses = tv({
  slots: {
    control: "clipboard-control",
    indicator: "clipboard-indicator",
    input: "clipboard-input",
    label: "clipboard-label",
    root: "clipboard",
    trigger: "clipboard-trigger",
    valueText: "clipboard-value-text",
  },
})

export type ClipboardVariantProps = VariantProps<typeof clipboardClasses>
