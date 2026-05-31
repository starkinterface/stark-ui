import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const tagsInputClasses = tv({
  slots: {
    clearTrigger: "tags-input-clear-trigger",
    control: "tags-input-control",
    hiddenInput: "tags-input-hidden-input",
    input: "tags-input-input",
    item: "tags-input-item",
    itemDeleteTrigger: "tags-input-item-delete-trigger",
    itemInput: "tags-input-item-input",
    itemPreview: "tags-input-item-preview",
    itemText: "tags-input-item-text",
    label: "tags-input-label",
    root: "tags-input",
  },
})

export type TagsInputVariantProps = VariantProps<typeof tagsInputClasses>
