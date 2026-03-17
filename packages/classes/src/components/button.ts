import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const buttonClasses = tv({
  base: "button",
  variants: {
    size: {
      "icon-lg": "button--icon-lg",
      "icon-md": "button--icon-md",
      "icon-sm": "button--icon-sm",
      "icon-xs": "button--icon-xs",
      lg: "button--lg",
      md: "button--md",
      sm: "button--sm",
      xs: "button--xs",
    },
    variant: {
      accent: "button--accent",
      danger: "button--danger",
      "danger-soft": "button--danger-soft",
      ghost: "button--ghost",
      outline: "button--outline",
      primary: "button--primary",
      secondary: "button--secondary",
    },
  },
})

export type ButtonVariantProps = VariantProps<typeof buttonClasses>
