import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const scrollAreaClasses = tv({
  slots: {
    content: "scroll-area-content",
    corner: "scroll-area-corner",
    root: "scroll-area",
    scrollbar: "scroll-area-scrollbar",
    thumb: "scroll-area-thumb",
    viewport: "scroll-area-viewport",
  },
  variants: {
    scrollFade: {
      true: {
        viewport: "scroll-area-viewport--fade",
      },
    },
  },
})

export type ScrollAreaVariantProps = VariantProps<typeof scrollAreaClasses>
