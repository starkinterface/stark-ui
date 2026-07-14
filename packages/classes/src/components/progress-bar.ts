import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const progressBarClasses = tv({
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
  slots: {
    label: "progress-bar-label",
    range: "progress-bar-range",
    root: "progress-bar",
    track: "progress-bar-track",
    valueText: "progress-bar-value-text",
  },
  variants: {
    variant: {
      accent: {
        track: "progress-bar--accent",
      },
      primary: {
        track: "progress-bar--primary",
      },
    },
  },
})

export type ProgressBarVariantProps = VariantProps<typeof progressBarClasses>
