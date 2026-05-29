import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const checkboxClasses = tv({
  slots: {
    control: "checkbox-control",
    hiddenInput: "checkbox-hidden-input",
    indicator: "checkbox-indicator",
    label: "checkbox-label",
    root: "checkbox",
  },
  variants: {
    variant: {
      accent: {
        root: "checkbox--accent",
      },
      primary: {
        root: "checkbox--primary",
      },
    },
  },
})

export type CheckboxVariantProps = VariantProps<typeof checkboxClasses>
