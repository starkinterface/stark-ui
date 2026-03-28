import { sliderClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Slider as ArkSlider } from "@ark-ui/react/slider"

import type { SliderVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(sliderClasses, {
  name: "Slider",
})

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type SliderRootProviderBaseProps = Assign<
  ArkSlider.RootProviderBaseProps,
  SliderVariantProps
> &
  UnstyledProp

type SliderRootProviderProps = Assign<
  ArkSlider.RootProviderProps,
  SliderRootProviderBaseProps
>

const SliderRootProvider = withProviderSlot<
  HTMLDivElement,
  SliderRootProviderProps
>(ArkSlider.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Root

type SliderRootBaseProps = Assign<ArkSlider.RootBaseProps, SliderVariantProps> &
  UnstyledProp

type SliderRootProps = Assign<ArkSlider.RootProps, SliderRootBaseProps>

const SliderRoot = withProviderSlot<HTMLDivElement, SliderRootProps>(
  ArkSlider.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Label

type SliderLabelProps = Assign<ArkSlider.LabelProps, UnstyledProp>

const SliderLabel = withSlot<HTMLLabelElement, SliderLabelProps>(
  ArkSlider.Label,
  "label"
)

///////////////////////////////////////////////////////////////////////////////
/// ValueText

type SliderValueTextProps = Assign<ArkSlider.ValueTextProps, UnstyledProp>

const SliderValueText = withSlot<HTMLSpanElement, SliderValueTextProps>(
  ArkSlider.ValueText,
  "valueText"
)

///////////////////////////////////////////////////////////////////////////////
/// Control

type SliderControlProps = Assign<ArkSlider.ControlProps, UnstyledProp>

const SliderControl = withSlot<HTMLDivElement, SliderControlProps>(
  ArkSlider.Control,
  "control"
)

///////////////////////////////////////////////////////////////////////////////
/// Track

type SliderTrackProps = Assign<ArkSlider.TrackProps, UnstyledProp>

const SliderTrack = withSlot<HTMLDivElement, SliderTrackProps>(
  ArkSlider.Track,
  "track"
)

///////////////////////////////////////////////////////////////////////////////
/// Range

type SliderRangeProps = Assign<ArkSlider.RangeProps, UnstyledProp>

const SliderRange = withSlot<HTMLDivElement, SliderRangeProps>(
  ArkSlider.Range,
  "range"
)

///////////////////////////////////////////////////////////////////////////////
/// Thumb

type SliderThumbProps = Assign<ArkSlider.ThumbProps, UnstyledProp>

const SliderThumb = withSlot<HTMLDivElement, SliderThumbProps>(
  ArkSlider.Thumb,
  "thumb"
)

///////////////////////////////////////////////////////////////////////////////
/// HiddenInput

type SliderHiddenInputProps = Assign<ArkSlider.HiddenInputProps, UnstyledProp>

const SliderHiddenInput = withSlot<HTMLInputElement, SliderHiddenInputProps>(
  ArkSlider.HiddenInput,
  "hiddenInput"
)

///////////////////////////////////////////////////////////////////////////////
/// MarkerGroup

type SliderMarkerGroupProps = Assign<ArkSlider.MarkerGroupProps, UnstyledProp>

const SliderMarkerGroup = withSlot<HTMLDivElement, SliderMarkerGroupProps>(
  ArkSlider.MarkerGroup,
  "markerGroup"
)

///////////////////////////////////////////////////////////////////////////////
/// Marker

type SliderMarkerProps = Assign<ArkSlider.MarkerProps, UnstyledProp>

const SliderMarker = withSlot<HTMLSpanElement, SliderMarkerProps>(
  ArkSlider.Marker,
  "marker"
)

///////////////////////////////////////////////////////////////////////////////
/// DraggingIndicator

type SliderDraggingIndicatorProps = Assign<
  ArkSlider.DraggingIndicatorProps,
  UnstyledProp
>

const SliderDraggingIndicator = withSlot<
  HTMLSpanElement,
  SliderDraggingIndicatorProps
>(ArkSlider.DraggingIndicator, "draggingIndicator")

///////////////////////////////////////////////////////////////////////////////
/// Context

type SliderContextProps = ArkSlider.ContextProps

const SliderContext = ArkSlider.Context

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  SliderContext,
  SliderControl,
  SliderDraggingIndicator,
  SliderHiddenInput,
  SliderLabel,
  SliderMarker,
  SliderMarkerGroup,
  SliderRange,
  SliderRoot,
  SliderRootProvider,
  SliderThumb,
  SliderTrack,
  SliderValueText,
}
export type {
  SliderContextProps,
  SliderControlProps,
  SliderDraggingIndicatorProps,
  SliderHiddenInputProps,
  SliderLabelProps,
  SliderMarkerProps,
  SliderMarkerGroupProps,
  SliderRangeProps,
  SliderRootProps,
  SliderRootProviderProps,
  SliderThumbProps,
  SliderTrackProps,
  SliderValueTextProps,
}
