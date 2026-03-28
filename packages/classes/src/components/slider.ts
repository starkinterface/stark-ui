import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const sliderClasses = tv({
  slots: {
    control: "slider-control",
    draggingIndicator: "slider-dragging-indicator",
    hiddenInput: "slider-hidden-input",
    label: "slider-label",
    marker: "slider-marker",
    markerGroup: "slider-marker-group",
    range: "slider-range",
    root: "slider",
    thumb: "slider-thumb",
    track: "slider-track",
    valueText: "slider-value-text",
  },
})

export type SliderVariantProps = VariantProps<typeof sliderClasses>
