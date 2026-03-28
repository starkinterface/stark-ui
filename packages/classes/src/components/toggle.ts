import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const toggleClasses = tv({
  slots: {
    indicator: "toggle-indicator",
    root: "toggle",
  },
})

export type ToggleVariantProps = VariantProps<typeof toggleClasses>
