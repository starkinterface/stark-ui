import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const progressCircleClasses = tv({
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
  slots: {
    circle: "progress-circle-circle",
    circleRange: "progress-circle-range",
    circleTrack: "progress-circle-track",
    icon: "progress-circle-icon",
    root: "progress-circle",
    valueText: "progress-circle-value-text",
  },
  variants: {
    size: {
      lg: {
        root: "progress-circle--lg",
      },
      md: {
        root: "progress-circle--md",
      },
      sm: {
        root: "progress-circle--sm",
      },
      xs: {
        root: "progress-circle--xs",
      },
    },
    variant: {
      accent: {
        root: "progress-circle--accent",
      },
      primary: {
        root: "progress-circle--primary",
      },
    },
  },
})

export type ProgressCircleVariantProps = VariantProps<
  typeof progressCircleClasses
>
