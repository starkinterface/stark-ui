import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const kbdClasses = tv({
  slots: {
    key: "kbd-key",
    root: "kbd",
    separator: "kbd-separator",
  },
  variants: {
    spacing: {
      attached: {
        root: "kbd--attached",
      },
      separated: {
        root: "kbd--separated",
      },
    },
  },
})

export type KbdVariantProps = VariantProps<typeof kbdClasses>
