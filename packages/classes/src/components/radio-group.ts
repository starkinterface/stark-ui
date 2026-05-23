import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const radioGroupClasses = tv({
  slots: {
    indicator: "radio-group-indicator",
    item: "radio-group-item",
    itemControl: "radio-group-item-control",
    itemHiddenInput: "radio-group-item-hidden-input",
    itemText: "field-label radio-group-item-text",
    label: "field-label radio-group-label",
    root: "field radio-group",
  },
  variants: {
    variant: {
      accent: {
        root: "radio-group--accent",
      },
      primary: {
        root: "radio-group--primary",
      },
    },
  },
})

export type RadioGroupVariantProps = VariantProps<typeof radioGroupClasses>
