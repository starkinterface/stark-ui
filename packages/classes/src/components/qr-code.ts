import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const qrCodeClasses = tv({
  defaultVariants: {
    size: "md",
  },
  slots: {
    downloadTrigger: "qr-code-download-trigger",
    frame: "qr-code-frame",
    overlay: "qr-code-overlay",
    pattern: "qr-code-pattern",
    root: "qr-code",
  },
  variants: {
    size: {
      lg: {
        root: "qr-code--lg",
      },
      md: {
        root: "qr-code--md",
      },
      sm: {
        root: "qr-code--sm",
      },
    },
  },
})

export type QrCodeVariantProps = VariantProps<typeof qrCodeClasses>
