import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const toggleGroupClasses = tv({
  slots: {
    item: "toggle-group-item",
    root: "toggle-group",
  },
})

export type ToggleGroupVariantProps = VariantProps<typeof toggleGroupClasses>
