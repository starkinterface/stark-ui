import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const toggleGroupClasses = tv({
  slots: {
    item: "button",
    root: "base-group toggle-group",
  },
  variants: {
    orientation: {
      horizontal: {
        root: "base-group--horizontal",
      },
      vertical: {
        root: "base-group--vertical",
      },
    },
    size: {
      "icon-lg": {
        item: "button--icon-lg",
      },
      "icon-md": {
        item: "button--icon-md",
      },
      "icon-sm": {
        item: "button--icon-sm",
      },
      "icon-xs": {
        item: "button--icon-xs",
      },
      lg: {
        item: "button--lg",
      },
      md: {
        item: "button--md",
      },
      sm: {
        item: "button--sm",
      },
      xs: {
        item: "button--xs",
      },
    },
    spacing: {
      attached: {
        root: "base-group--attached",
      },
      regular: {
        root: "base-group--regular",
      },
      separated: {
        root: "base-group--separated",
      },
    },
    variant: {
      ghost: {
        item: "button--ghost",
      },
      outline: {
        item: "button--outline",
      },
      secondary: {
        item: "button--secondary",
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
