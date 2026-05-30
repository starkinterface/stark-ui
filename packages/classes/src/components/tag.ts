import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const tagClasses = tv({
  slots: {
    closeTrigger: "tag-close-trigger",
    root: "tag",
  },
})

export type TagVariantProps = VariantProps<typeof tagClasses>
