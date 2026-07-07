import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const drawerClasses = tv({
  slots: {
    backdrop: "drawer-backdrop",
    body: "drawer-body",
    closeTrigger: "drawer-close-trigger",
    content: "drawer-content",
    description: "drawer-description",
    footer: "drawer-footer",
    grabber: "drawer-grabber",
    grabberIndicator: "drawer-grabber-indicator",
    header: "drawer-header",
    positioner: "drawer-positioner",
    root: "drawer",
    swipeArea: "drawer-swipe-area",
    title: "drawer-title",
    trigger: "drawer-trigger",
  },
  variants: {
    placement: {
      bottom: {
        positioner: "drawer-positioner--bottom",
      },
      left: {
        positioner: "drawer-positioner--left",
      },
      right: {
        positioner: "drawer-positioner--right",
      },
      top: {
        positioner: "drawer-positioner--top",
      },
    },
    size: {
      full: {
        content: "drawer-content--full",
      },
      lg: {
        content: "drawer-content--lg",
      },
      md: {
        content: "drawer-content--md",
      },
      sm: {
        content: "drawer-content--sm",
      },
    },
  },
})

export type DrawerVariantProps = VariantProps<typeof drawerClasses>
