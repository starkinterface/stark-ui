import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const datePickerClasses = tv({
  slots: {
    clearTrigger: "date-picker-clear-trigger",
    content: "date-picker-content",
    control: "date-picker-control",
    input: "date-picker-input",
    label: "date-picker-label",
    positioner: "date-picker-positioner",
    presetTrigger: "date-picker-preset-trigger",
    root: "date-picker",
    trigger: "date-picker-trigger",
  },
})

export type DatePickerVariantProps = VariantProps<typeof datePickerClasses>
