import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const inputClasses = tv({
  base: "input",
})

export type InputVariantProps = VariantProps<typeof inputClasses>
