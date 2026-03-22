import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const fieldClasses = tv({
  slots: {
    errorText: "field-error-text",
    helperText: "field-helper-text",
    input: "field-input",
    label: "field-label",
    root: "field",
    select: "field-select",
    textarea: "field-textarea",
  },
})

export type FieldVariantProps = VariantProps<typeof fieldClasses>
