import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const comboboxClasses = tv({
  slots: {
    clearTrigger: "combobox-clear-trigger",
    content: "combobox-content",
    control: "combobox-control",
    emptyText: "combobox-empty-text",
    indicator: "combobox-indicator",
    input: "combobox-input",
    item: "combobox-item",
    itemGroup: "combobox-item-group",
    itemGroupLabel: "combobox-item-group-label",
    itemIndicator: "combobox-item-indicator",
    itemText: "combobox-item-text",
    label: "field-label combobox-label",
    positioner: "combobox-positioner",
    root: "field combobox",
    trigger: "combobox-trigger",
  },
})

export type ComboboxVariantProps = VariantProps<typeof comboboxClasses>
