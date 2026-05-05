import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const textareaClasses = tv({
  base: "base-input textarea",
})

export type TextareaVariantProps = VariantProps<typeof textareaClasses>
