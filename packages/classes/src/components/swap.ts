import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const swapClasses = tv({
  slots: {
    indicator: "swap-indicator",
    root: "swap",
  },
  variants: {
    animate: {
      fade: {
        root: "swap--fade",
      },
      flip: {
        root: "swap--flip",
      },
      "move-bottom": {
        root: "swap--move-bottom",
      },
      "move-left": {
        root: "swap--move-left",
      },
      "move-right": {
        root: "swap--move-right",
      },
      "move-top": {
        root: "swap--move-top",
      },
      rotate: {
        root: "swap--rotate",
      },
      scale: {
        root: "swap--scale",
      },
    },
  },
})

export type SwapVariantProps = VariantProps<typeof swapClasses>
