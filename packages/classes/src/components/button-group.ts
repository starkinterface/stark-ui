import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const buttonGroupClasses = tv({
  base: "button-group",
  variants: {
    orientation: {
      horizontal: "button-group--horizontal",
      vertical: "button-group--vertical",
    },
    spacing: {
      attached: "button-group--attached",
      regular: "button-group--regular",
      separated: "button-group--separated",
    },
  },
})

export type ButtonGroupVariantProps = VariantProps<typeof buttonGroupClasses>
