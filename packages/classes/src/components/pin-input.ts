import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const pinInputClasses = tv({
  slots: {
    control: "pin-input-control",
    hiddenInput: "pin-input-hidden-input",
    input: "base-input pin-input-input",
    label: "field-label pin-input-label",
    root: "field pin-input",
  },
})

export type PinInputVariantProps = VariantProps<typeof pinInputClasses>
