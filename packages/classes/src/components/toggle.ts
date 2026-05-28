import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const toggleClasses = tv({
  slots: {
    indicator: "toggle-indicator",
    root: "toggle",
  },
  variants: {
    size: {
      "icon-lg": {
        root: "toggle--icon-lg",
      },
      "icon-md": {
        root: "toggle--icon-md",
      },
      "icon-sm": {
        root: "toggle--icon-sm",
      },
      "icon-xs": {
        root: "toggle--icon-xs",
      },
      lg: {
        root: "toggle--lg",
      },
      md: {
        root: "toggle--md",
      },
      sm: {
        root: "toggle--sm",
      },
      xs: {
        root: "toggle--xs",
      },
    },
    variant: {
      ghost: {
        root: "toggle--ghost",
      },
      outline: {
        root: "toggle--outline",
      },
      secondary: {
        root: "toggle--secondary",
      },
    },
    variantActive: {
      accent: {
        root: "toggle--active-accent",
      },
      primary: {
        root: "toggle--active-primary",
      },
    },
  },
})

export type ToggleVariantProps = VariantProps<typeof toggleClasses>
