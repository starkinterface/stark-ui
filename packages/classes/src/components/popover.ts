import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const popoverClasses = tv({
  slots: {
    anchor: "popover-anchor",
    arrow: "popover-arrow",
    arrowTip: "popover-arrow-tip",
    body: "popover-body",
    closeTrigger: "popover-close-trigger",
    content: "popover-content",
    description: "popover-description",
    footer: "popover-footer",
    header: "popover-header",
    positioner: "popover-positioner",
    root: "popover",
    title: "popover-title",
    trigger: "popover-trigger",
  },
})

export type PopoverVariantProps = VariantProps<typeof popoverClasses>
