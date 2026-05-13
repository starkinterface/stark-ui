import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const buttonGroupClasses = tv({
  base: "base-group button-group",
  variants: {
    orientation: {
      horizontal: "base-group--horizontal",
      vertical: "base-group--vertical",
    },
    spacing: {
      attached: "base-group--attached",
      regular: "base-group--regular",
      separated: "base-group--separated",
    },
  },
})

export type ButtonGroupVariantProps = VariantProps<typeof buttonGroupClasses>
