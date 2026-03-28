import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const numberInputClasses = tv({
  slots: {
    control: "number-input-control",
    decrementTrigger: "number-input-decrement-trigger",
    incrementTrigger: "number-input-increment-trigger",
    input: "number-input-input",
    label: "number-input-label",
    root: "number-input",
    scrubber: "number-input-scrubber",
    valueText: "number-input-value-text",
  },
})

export type NumberInputVariantProps = VariantProps<typeof numberInputClasses>
