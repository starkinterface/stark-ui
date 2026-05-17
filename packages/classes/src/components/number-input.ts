import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const numberInputClasses = tv({
  slots: {
    addon: "input-group-addon number-input-addon",
    control: "input-group number-input-control",
    decrementTrigger: "input-group-button number-input-decrement-trigger",
    icon: "input-group-icon number-input-icon",
    incrementTrigger: "input-group-button number-input-increment-trigger",
    input: "input-group-input number-input-input",
    label: "field-label number-input-label",
    root: "field number-input",
    scrubber: "number-input-scrubber",
    text: "input-group-text number-input-text",
    valueText: "number-input-value-text",
  },
})

export type NumberInputVariantProps = VariantProps<typeof numberInputClasses>
