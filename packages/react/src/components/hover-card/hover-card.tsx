import { hoverCardClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { HoverCard as ArkHoverCard } from "@ark-ui/react/hover-card"

import type { HoverCardVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(hoverCardClasses, {
  name: "HoverCard",
})

///////////////////////////////////////////////////////////////////////////////
/// Root

type HoverCardRootProps = Assign<
  ArkHoverCard.RootProps,
  HoverCardVariantProps & UnstyledProp
>

const HoverCardRoot = withProviderSlot<HTMLDivElement, HoverCardRootProps>(
  ArkHoverCard.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type HoverCardRootProviderProps = Assign<
  ArkHoverCard.RootProviderProps,
  HoverCardVariantProps & UnstyledProp
>

const HoverCardRootProvider = withProviderSlot<
  HTMLDivElement,
  HoverCardRootProviderProps
>(ArkHoverCard.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Trigger

type HoverCardTriggerProps = Assign<ArkHoverCard.TriggerProps, UnstyledProp>

const HoverCardTrigger = withSlot<HTMLAnchorElement, HoverCardTriggerProps>(
  ArkHoverCard.Trigger,
  "trigger"
)

///////////////////////////////////////////////////////////////////////////////
/// Positioner

type HoverCardPositionerProps = Assign<
  ArkHoverCard.PositionerProps,
  UnstyledProp
>

const HoverCardPositioner = withSlot<HTMLDivElement, HoverCardPositionerProps>(
  ArkHoverCard.Positioner,
  "positioner"
)

///////////////////////////////////////////////////////////////////////////////
/// Content

type HoverCardContentProps = Assign<ArkHoverCard.ContentProps, UnstyledProp>

const HoverCardContent = withSlot<HTMLDivElement, HoverCardContentProps>(
  ArkHoverCard.Content,
  "content"
)

///////////////////////////////////////////////////////////////////////////////
/// Arrow

type HoverCardArrowProps = Assign<ArkHoverCard.ArrowProps, UnstyledProp>

const HoverCardArrow = withSlot<HTMLDivElement, HoverCardArrowProps>(
  ArkHoverCard.Arrow,
  "arrow"
)

///////////////////////////////////////////////////////////////////////////////
/// ArrowTip

type HoverCardArrowTipProps = Assign<ArkHoverCard.ArrowTipProps, UnstyledProp>

const HoverCardArrowTip = withSlot<HTMLDivElement, HoverCardArrowTipProps>(
  ArkHoverCard.ArrowTip,
  "arrowTip"
)

///////////////////////////////////////////////////////////////////////////////
/// Context

type HoverCardContextProps = ArkHoverCard.ContextProps

const HoverCardContext = ArkHoverCard.Context

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  HoverCardRoot,
  HoverCardRootProvider,
  HoverCardTrigger,
  HoverCardPositioner,
  HoverCardContent,
  HoverCardArrow,
  HoverCardArrowTip,
  HoverCardContext,
}

export { useHoverCard, useHoverCardContext } from "@ark-ui/react/hover-card"

export type {
  HoverCardRootProps,
  HoverCardRootProviderProps,
  HoverCardTriggerProps,
  HoverCardPositionerProps,
  HoverCardContentProps,
  HoverCardArrowProps,
  HoverCardArrowTipProps,
  HoverCardContextProps,
}

export type {
  UseHoverCardProps,
  UseHoverCardReturn,
  UseHoverCardContext,
} from "@ark-ui/react/hover-card"
