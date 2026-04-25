import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const switchClasses = tv({
  slots: {
    control: "switch-control",
    hiddenInput: "switch-hidden-input",
    label: "switch-label",
    root: "switch",
    thumb: "switch-thumb",
  },
  variants: {
    size: {
      lg: {
        root: "switch--lg",
      },
      md: {
        root: "switch--md",
      },
      sm: {
        root: "switch--sm",
      },
    },
    variant: {
      accent: {
        root: "switch--accent",
      },
      primary: {
        root: "switch--primary",
      },
    },
  },
})

export type SwitchVariantProps = VariantProps<typeof switchClasses>
