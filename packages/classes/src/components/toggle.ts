import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const toggleClasses = tv({
  slots: {
    indicator: "toggle-indicator",
    root: "button toggle",
  },
  variants: {
    size: {
      "icon-lg": {
        root: "button--icon-lg",
      },
      "icon-md": {
        root: "button--icon-md",
      },
      "icon-sm": {
        root: "button--icon-sm",
      },
      "icon-xs": {
        root: "button--icon-xs",
      },
      lg: {
        root: "button--lg",
      },
      md: {
        root: "button--md",
      },
      sm: {
        root: "button--sm",
      },
      xs: {
        root: "button--xs",
      },
    },
    variant: {
      ghost: {
        root: "button--ghost",
      },
      outline: {
        root: "button--outline",
      },
      secondary: {
        root: "button--secondary",
      },
    },
    variantActive: {
      accent: {
        root: "data-[state=on]:button--accent",
      },
      primary: {
        root: "data-[state=on]:button--primary",
      },
    },
  },
})

export type ToggleVariantProps = VariantProps<typeof toggleClasses>
