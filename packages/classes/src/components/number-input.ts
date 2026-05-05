import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const numberInputClasses = tv({
  slots: {
    control: "number-input-control",
    decrementTrigger:
      "button button--icon-xs button--outline number-input-decrement-trigger",
    incrementTrigger:
      "button button--icon-xs button--outline number-input-increment-trigger",
    input: "base-input number-input-input",
    label: "number-input-label",
    root: "number-input",
    scrubber: "number-input-scrubber",
    triggerGroup: "number-input-trigger-group",
    valueText: "number-input-value-text",
  },
})

export type NumberInputVariantProps = VariantProps<typeof numberInputClasses>
