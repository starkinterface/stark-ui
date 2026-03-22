import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const toggleTipClasses = tv({
  base: "toggle-tip",
  slots: {
    content: "toggle-tip-content",
  },
})

export type ToggleTipVariantProps = VariantProps<typeof toggleTipClasses>
