import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const toggleGroupClasses = tv({
  slots: {
    item: "button toggle-group-item",
    root: "toggle-group",
  },
  variants: {
    compact: {
      false: {
        root: "toggle-group--regular",
      },
      true: {
        root: "toggle-group--compact",
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
    variant: {
      ghost: {
        item: "button--ghost",
      },
      secondary: {
        item: "button--secondary",
      },
    },
    variantActive: {
      accent: {
        item: "data-[state=on]:button--accent",
      },
      primary: {
        item: "data-[state=on]:button--primary",
      },
    },
  },
})

export type ToggleGroupVariantProps = VariantProps<typeof toggleGroupClasses>
