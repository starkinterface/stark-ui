import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const toastClasses = tv({
  defaultVariants: {
    type: "info",
  },
  slots: {
    actionTrigger: "toast-action-trigger",
    closeTrigger: "toast-close-trigger",
    description: "toast-description",
    root: "toast",
    title: "toast-title",
  },
  variants: {
    type: {
      error: {
        root: "toast--error",
      },
      info: {
        root: "toast--info",
      },
      loading: {
        root: "toast--loading",
      },
      success: {
        root: "toast--success",
      },
      warning: {
        root: "toast--warning",
      },
    },
  },
})

export type ToastVariantProps = VariantProps<typeof toastClasses>
