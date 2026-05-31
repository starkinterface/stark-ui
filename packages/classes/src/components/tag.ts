import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const tagClasses = tv({
  slots: {
    deleteTrigger: "tag-delete-trigger",
    root: "tag",
  },
})

export type TagVariantProps = VariantProps<typeof tagClasses>
