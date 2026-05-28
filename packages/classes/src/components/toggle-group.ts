import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const toggleGroupClasses = tv({
  slots: {
    item: "toggle-group-item",
    root: "toggle-group",
  },
  variants: {
    orientation: {
      horizontal: {
        root: "toggle-group--horizontal",
      },
      vertical: {
        root: "toggle-group--vertical",
      },
    },
    size: {
      "icon-lg": {
        root: "toggle-group--icon-lg",
      },
      "icon-md": {
        root: "toggle-group--icon-md",
      },
      "icon-sm": {
        root: "toggle-group--icon-sm",
      },
      "icon-xs": {
        root: "toggle-group--icon-xs",
      },
      lg: {
        root: "toggle-group--lg",
      },
      md: {
        root: "toggle-group--md",
      },
      sm: {
        root: "toggle-group--sm",
      },
      xs: {
        root: "toggle-group--xs",
      },
    },
    spacing: {
      attached: {
        root: "toggle-group--attached",
      },
      regular: {
        root: "toggle-group--regular",
      },
      separated: {
        root: "toggle-group--separated",
      },
    },
    variant: {
      ghost: {
        root: "toggle-group--ghost",
      },
      outline: {
        root: "toggle-group--outline",
      },
      secondary: {
        root: "toggle-group--secondary",
      },
    },
    variantActive: {
      accent: {
        root: "toggle-group--active-accent",
      },
      primary: {
        root: "toggle-group--active-primary",
      },
    },
  },
})

export type ToggleGroupVariantProps = VariantProps<typeof toggleGroupClasses>
