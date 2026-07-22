import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const fieldsetClasses = tv({
  slots: {
    content: "fieldset-content",
    errorText: "fieldset-error-text",
    helperText: "fieldset-helper-text",
    legend: "fieldset-legend",
    root: "fieldset",
  },
})

export type FieldsetVariantProps = VariantProps<typeof fieldsetClasses>
