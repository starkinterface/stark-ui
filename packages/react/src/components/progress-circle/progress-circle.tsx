import { progressCircleClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { ark } from "@ark-ui/react/factory"
import { Progress as ArkProgress } from "@ark-ui/react/progress"

import type { ProgressCircleVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"
import type { ComponentProps } from "react"

const { withProviderSlot, withSlot } = createStyleContext(
  progressCircleClasses,
  {
    name: "ProgressCircle",
  }
)

///////////////////////////////////////////////////////////////////////////////
/// Root

type ProgressCircleRootProps = Assign<
  ArkProgress.RootProps,
  ProgressCircleVariantProps & UnstyledProp
>

const ProgressCircleRoot = withProviderSlot<
  HTMLDivElement,
  ProgressCircleRootProps
>(ArkProgress.Root, "root")

///////////////////////////////////////////////////////////////////////////////
/// ValueText

type ProgressCircleValueTextProps = Assign<
  ArkProgress.ValueTextProps,
  UnstyledProp
>

const ProgressCircleValueText = withSlot<
  HTMLSpanElement,
  ProgressCircleValueTextProps
>(ArkProgress.ValueText, "valueText")

///////////////////////////////////////////////////////////////////////////////
/// Icon

type ProgressCircleIconProps = Assign<
  ComponentProps<typeof ark.div>,
  UnstyledProp
>

const ProgressCircleIcon = withSlot<HTMLDivElement, ProgressCircleIconProps>(
  ark.div,
  "icon"
)

///////////////////////////////////////////////////////////////////////////////
/// Circle

type ProgressCircleCircleProps = Assign<ArkProgress.CircleProps, UnstyledProp>

const ProgressCircleCircle = withSlot<SVGSVGElement, ProgressCircleCircleProps>(
  ArkProgress.Circle,
  "circle"
)

///////////////////////////////////////////////////////////////////////////////
/// CircleTrack

type ProgressCircleCircleTrackProps = Assign<
  ArkProgress.CircleTrackProps,
  UnstyledProp
>

const ProgressCircleCircleTrack = withSlot<
  SVGCircleElement,
  ProgressCircleCircleTrackProps
>(ArkProgress.CircleTrack, "circleTrack")

///////////////////////////////////////////////////////////////////////////////
/// CircleRange

type ProgressCircleCircleRangeProps = Assign<
  ArkProgress.CircleRangeProps,
  UnstyledProp
>

const ProgressCircleCircleRange = withSlot<
  SVGCircleElement,
  ProgressCircleCircleRangeProps
>(ArkProgress.CircleRange, "circleRange")

///////////////////////////////////////////////////////////////////////////////
/// Context

type ProgressCircleContextProps = ArkProgress.ContextProps

const ProgressCircleContext = ArkProgress.Context

export {
  ProgressCircleRoot,
  ProgressCircleValueText,
  ProgressCircleIcon,
  ProgressCircleCircle,
  ProgressCircleCircleTrack,
  ProgressCircleCircleRange,
  ProgressCircleContext,
}

export type {
  ProgressCircleRootProps,
  ProgressCircleValueTextProps,
  ProgressCircleIconProps,
  ProgressCircleCircleProps,
  ProgressCircleCircleTrackProps,
  ProgressCircleCircleRangeProps,
  ProgressCircleContextProps,
}
