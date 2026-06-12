import { tooltipClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Tooltip as ArkTooltip } from "@ark-ui/react/tooltip"

import type { TooltipVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(tooltipClasses, {
  name: "Tooltip",
})

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type TooltipRootProviderProps = Assign<
  ArkTooltip.RootProviderProps,
  TooltipVariantProps & UnstyledProp
>

const TooltipRootProvider = withProviderSlot<
  HTMLDivElement,
  TooltipRootProviderProps
>(ArkTooltip.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Root

type TooltipRootProps = Assign<
  ArkTooltip.RootProps,
  TooltipVariantProps & UnstyledProp
>

const TooltipRoot = withProviderSlot<HTMLDivElement, TooltipRootProps>(
  ArkTooltip.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Trigger

type TooltipTriggerProps = Assign<ArkTooltip.TriggerProps, UnstyledProp>

const TooltipTrigger = withSlot<HTMLButtonElement, TooltipTriggerProps>(
  ArkTooltip.Trigger,
  "trigger"
)

///////////////////////////////////////////////////////////////////////////////
/// Positioner

type TooltipPositionerProps = Assign<ArkTooltip.PositionerProps, UnstyledProp>

const TooltipPositioner = withSlot<HTMLDivElement, TooltipPositionerProps>(
  ArkTooltip.Positioner,
  "positioner"
)

///////////////////////////////////////////////////////////////////////////////
/// Content

type TooltipContentProps = Assign<ArkTooltip.ContentProps, UnstyledProp>

const TooltipContent = withSlot<HTMLDivElement, TooltipContentProps>(
  ArkTooltip.Content,
  "content"
)

///////////////////////////////////////////////////////////////////////////////
/// Arrow

type TooltipArrowProps = Assign<ArkTooltip.ArrowProps, UnstyledProp>

const TooltipArrow = withSlot<SVGSVGElement, TooltipArrowProps>(
  ArkTooltip.Arrow,
  "arrow"
)

///////////////////////////////////////////////////////////////////////////////
/// ArrowTip

type TooltipArrowTipProps = Assign<ArkTooltip.ArrowTipProps, UnstyledProp>

const TooltipArrowTip = withSlot<HTMLDivElement, TooltipArrowTipProps>(
  ArkTooltip.ArrowTip,
  "arrowTip"
)

///////////////////////////////////////////////////////////////////////////////
/// Context

type TooltipContextProps = ArkTooltip.ContextProps

const TooltipContext = ArkTooltip.Context

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  TooltipRoot,
  TooltipRootProvider,
  TooltipTrigger,
  TooltipPositioner,
  TooltipContent,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContext,
}

export type {
  TooltipRootProps,
  TooltipRootProviderProps,
  TooltipTriggerProps,
  TooltipPositionerProps,
  TooltipContentProps,
  TooltipArrowProps,
  TooltipArrowTipProps,
  TooltipContextProps,
}
