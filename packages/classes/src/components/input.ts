import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const inputClasses = tv({
  base: "base-input input",
})

export type InputVariantProps = VariantProps<typeof inputClasses>
