import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const pinInputClasses = tv({
  slots: {
    control: "pin-input-control",
    hiddenInput: "pin-input-hidden-input",
    input: "pin-input-input",
    label: "pin-input-label",
    root: "pin-input",
    separator: "pin-input-separator",
  },
})

export type PinInputVariantProps = VariantProps<typeof pinInputClasses>
