import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const selectClasses = tv({
  slots: {
    clearTrigger: "select-clear-trigger",
    content: "select-content",
    control: "select-control",
    hiddenSelect: "select-hidden-select",
    indicator: "select-indicator",
    item: "select-item",
    itemGroup: "select-item-group",
    itemGroupLabel: "select-item-group-label",
    itemIndicator: "select-item-indicator",
    itemText: "select-item-text",
    label: "select-label",
    positioner: "select-positioner",
    root: "select",
    trigger: "select-trigger",
    valueText: "select-value-text",
  },
})

export type SelectVariantProps = VariantProps<typeof selectClasses>
