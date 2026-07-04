import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const dialogClasses = tv({
  slots: {
    backdrop: "dialog-backdrop",
    body: "dialog-body",
    closeTrigger: "dialog-close-trigger",
    content: "dialog-content",
    description: "dialog-description",
    footer: "dialog-footer",
    header: "dialog-header",
    positioner: "dialog-positioner",
    root: "dialog",
    title: "dialog-title",
    trigger: "dialog-trigger",
  },
  variants: {
    placement: {
      bottom: {
        positioner: "dialog-positioner--bottom",
      },
      center: {
        positioner: "dialog-positioner--center",
      },
      top: {
        positioner: "dialog-positioner--top",
      },
    },
    scroll: {
      inside: {
        positioner: "dialog-positioner--scroll-inside",
      },
      outside: {
        positioner: "dialog-positioner--scroll-outside",
      },
    },
    size: {
      full: {
        content: "dialog-content--full",
      },
      lg: {
        content: "dialog-content--lg",
      },
      md: {
        content: "dialog-content--md",
      },
      sm: {
        content: "dialog-content--sm",
      },
    },
  },
})

export type DialogVariantProps = VariantProps<typeof dialogClasses>
