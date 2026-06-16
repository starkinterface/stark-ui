import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const segmentGroupClasses = tv({
  slots: {
    content: "segment-group-content",
    indicator: "segment-group-indicator",
    item: "segment-group-item",
    itemControl: "segment-group-item-control",
    itemHiddenInput: "segment-group-item-hidden-input",
    itemText: "segment-group-item-text",
    label: "segment-group-label",
    root: "segment-group",
  },
})

export type SegmentGroupVariantProps = VariantProps<typeof segmentGroupClasses>
