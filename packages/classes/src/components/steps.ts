import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const stepsClasses = tv({
  defaultVariants: {
    variant: "primary",
  },
  slots: {
    completedContent: "steps-completed-content",
    content: "steps-content",
    description: "steps-description",
    header: "steps-header",
    indicator: "steps-indicator",
    item: "steps-item",
    list: "steps-list",
    nextTrigger: "steps-next-trigger",
    prevTrigger: "steps-prev-trigger",
    root: "steps",
    separator: "steps-separator",
    title: "steps-title",
    trigger: "steps-trigger",
  },
  variants: {
    variant: {
      accent: {
        root: "steps--accent",
      },
      primary: {
        root: "steps--primary",
      },
    },
  },
})

export type StepsVariantProps = VariantProps<typeof stepsClasses>
