import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const switchClasses = tv({
  slots: {
    control: "switch-control",
    hiddenInput: "switch-hidden-input",
    label: "switch-label",
    root: "switch",
    thumb: "switch-thumb",
  },
})

export type SwitchVariantProps = VariantProps<typeof switchClasses>
