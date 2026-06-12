import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const tooltipClasses = tv({
  slots: {
    arrow: "tooltip-arrow",
    arrowTip: "tooltip-arrow-tip",
    content: "tooltip-content",
    positioner: "tooltip-positioner",
    root: "tooltip",
    trigger: "tooltip-trigger",
  },
})

export type TooltipVariantProps = VariantProps<typeof tooltipClasses>
