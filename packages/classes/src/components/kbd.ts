import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const kbdClasses = tv({
  base: "kbd",
  variants: {
    size: {
      lg: "kbd--lg",
      md: "kbd--md",
      sm: "kbd--sm",
      xs: "kbd--xs",
    },
  },
})

export type KbdVariantProps = VariantProps<typeof kbdClasses>
