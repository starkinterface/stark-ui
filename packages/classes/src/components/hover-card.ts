import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const hoverCardClasses = tv({
  slots: {
    arrow: "hover-card-arrow",
    arrowTip: "hover-card-arrow-tip",
    content: "hover-card-content",
    positioner: "hover-card-positioner",
    root: "hover-card",
    trigger: "hover-card-trigger",
  },
})

export type HoverCardVariantProps = VariantProps<typeof hoverCardClasses>
