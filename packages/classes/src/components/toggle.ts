import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const toggleClasses = tv({
  base: "toggle",
})

export type ToggleVariantProps = VariantProps<typeof toggleClasses>
