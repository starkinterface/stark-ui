import { progressBarClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Progress as ArkProgress } from "@ark-ui/react/progress"

import type { ProgressBarVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(progressBarClasses, {
  name: "ProgressBar",
})

///////////////////////////////////////////////////////////////////////////////
/// Root

type ProgressBarRootProps = Assign<
  ArkProgress.RootProps,
  ProgressBarVariantProps & UnstyledProp
>

const ProgressBarRoot = withProviderSlot<HTMLDivElement, ProgressBarRootProps>(
  ArkProgress.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Label

type ProgressBarLabelProps = Assign<ArkProgress.LabelProps, UnstyledProp>

const ProgressBarLabel = withSlot<HTMLSpanElement, ProgressBarLabelProps>(
  ArkProgress.Label,
  "label"
)

///////////////////////////////////////////////////////////////////////////////
/// Track

type ProgressBarTrackProps = Assign<ArkProgress.TrackProps, UnstyledProp>

const ProgressBarTrack = withSlot<HTMLDivElement, ProgressBarTrackProps>(
  ArkProgress.Track,
  "track"
)

///////////////////////////////////////////////////////////////////////////////
/// Range

type ProgressBarRangeProps = Assign<ArkProgress.RangeProps, UnstyledProp>

const ProgressBarRange = withSlot<HTMLDivElement, ProgressBarRangeProps>(
  ArkProgress.Range,
  "range"
)

///////////////////////////////////////////////////////////////////////////////
/// ValueText

type ProgressBarValueTextProps = Assign<
  ArkProgress.ValueTextProps,
  UnstyledProp
>

const ProgressBarValueText = withSlot<
  HTMLSpanElement,
  ProgressBarValueTextProps
>(ArkProgress.ValueText, "valueText")

///////////////////////////////////////////////////////////////////////////////
/// Context

type ProgressBarContextProps = ArkProgress.ContextProps

const ProgressBarContext = ArkProgress.Context

export {
  ProgressBarRoot,
  ProgressBarLabel,
  ProgressBarTrack,
  ProgressBarRange,
  ProgressBarValueText,
  ProgressBarContext,
}

export type {
  ProgressBarRootProps,
  ProgressBarLabelProps,
  ProgressBarTrackProps,
  ProgressBarRangeProps,
  ProgressBarValueTextProps,
  ProgressBarContextProps,
}
