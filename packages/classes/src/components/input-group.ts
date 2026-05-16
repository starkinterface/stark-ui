import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const inputGroupClasses = tv({
  slots: {
    addon: "input-group-addon",
    button: "input-group-button",
    input: "input-group-input",
    root: "input-group",
    text: "input-group-text",
    textarea: "input-group-textarea",
  },
})

export type InputGroupVariantProps = VariantProps<typeof inputGroupClasses>
