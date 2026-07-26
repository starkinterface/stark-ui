import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const dateInputClasses = tv({
  slots: {
    control: "date-input-control",
    hiddenInput: "date-input-hidden-input",
    label: "date-input-label",
    root: "date-input",
    segment: "date-input-segment",
    segmentGroup: "date-input-segment-group",
  },
})

export type DateInputVariantProps = VariantProps<typeof dateInputClasses>
