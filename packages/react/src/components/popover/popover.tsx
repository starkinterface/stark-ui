import { popoverClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { ark } from "@ark-ui/react/factory"
import { Popover as ArkPopover } from "@ark-ui/react/popover"

import type { PopoverVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"
import type { ComponentProps } from "react"

const { withProviderSlot, withSlot } = createStyleContext(popoverClasses, {
  name: "Popover",
})

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type PopoverRootProviderProps = Assign<
  ArkPopover.RootProviderProps,
  PopoverVariantProps & UnstyledProp
>

const PopoverRootProvider = withProviderSlot<
  HTMLDivElement,
  PopoverRootProviderProps
>(ArkPopover.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Root

type PopoverRootProps = Assign<
  ArkPopover.RootProps,
  PopoverVariantProps & UnstyledProp
>

const PopoverRoot = withProviderSlot<HTMLDivElement, PopoverRootProps>(
  ArkPopover.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Anchor

type PopoverAnchorProps = Assign<ArkPopover.AnchorProps, UnstyledProp>

const PopoverAnchor = withSlot<HTMLDivElement, PopoverAnchorProps>(
  ArkPopover.Anchor,
  "anchor"
)

///////////////////////////////////////////////////////////////////////////////
/// Arrow

type PopoverArrowProps = Assign<ArkPopover.ArrowProps, UnstyledProp>

const PopoverArrow = withSlot<HTMLDivElement, PopoverArrowProps>(
  ArkPopover.Arrow,
  "arrow"
)

///////////////////////////////////////////////////////////////////////////////
/// ArrowTip

type PopoverArrowTipProps = Assign<ArkPopover.ArrowTipProps, UnstyledProp>

const PopoverArrowTip = withSlot<HTMLDivElement, PopoverArrowTipProps>(
  ArkPopover.ArrowTip,
  "arrowTip"
)

///////////////////////////////////////////////////////////////////////////////
/// Body

type PopoverBodyProps = Assign<ComponentProps<typeof ark.div>, UnstyledProp>

const PopoverBody = withSlot<HTMLDivElement, PopoverBodyProps>(ark.div, "body")

///////////////////////////////////////////////////////////////////////////////
/// CloseTrigger

type PopoverCloseTriggerProps = Assign<
  ArkPopover.CloseTriggerProps,
  UnstyledProp
>

const PopoverCloseTrigger = withSlot<
  HTMLButtonElement,
  PopoverCloseTriggerProps
>(ArkPopover.CloseTrigger, "closeTrigger")

///////////////////////////////////////////////////////////////////////////////
/// Content

type PopoverContentProps = Assign<ArkPopover.ContentProps, UnstyledProp>

const PopoverContent = withSlot<HTMLDivElement, PopoverContentProps>(
  ArkPopover.Content,
  "content"
)

///////////////////////////////////////////////////////////////////////////////
/// Description

type PopoverDescriptionProps = Assign<ArkPopover.DescriptionProps, UnstyledProp>

const PopoverDescription = withSlot<
  HTMLParagraphElement,
  PopoverDescriptionProps
>(ArkPopover.Description, "description")

///////////////////////////////////////////////////////////////////////////////
/// Footer

type PopoverFooterProps = Assign<ComponentProps<typeof ark.div>, UnstyledProp>

const PopoverFooter = withSlot<HTMLDivElement, PopoverFooterProps>(
  ark.div,
  "footer"
)

///////////////////////////////////////////////////////////////////////////////
/// Header

type PopoverHeaderProps = Assign<ComponentProps<typeof ark.div>, UnstyledProp>

const PopoverHeader = withSlot<HTMLDivElement, PopoverHeaderProps>(
  ark.div,
  "header"
)

///////////////////////////////////////////////////////////////////////////////
/// Positioner

type PopoverPositionerProps = Assign<ArkPopover.PositionerProps, UnstyledProp>

const PopoverPositioner = withSlot<HTMLDivElement, PopoverPositionerProps>(
  ArkPopover.Positioner,
  "positioner"
)

///////////////////////////////////////////////////////////////////////////////
/// Title

type PopoverTitleProps = Assign<ArkPopover.TitleProps, UnstyledProp>

const PopoverTitle = withSlot<HTMLHeadingElement, PopoverTitleProps>(
  ArkPopover.Title,
  "title"
)

///////////////////////////////////////////////////////////////////////////////
/// Trigger

type PopoverTriggerProps = Assign<ArkPopover.TriggerProps, UnstyledProp>

const PopoverTrigger = withSlot<HTMLButtonElement, PopoverTriggerProps>(
  ArkPopover.Trigger,
  "trigger"
)

///////////////////////////////////////////////////////////////////////////////
/// Context

type PopoverContextProps = ArkPopover.ContextProps

const PopoverContext = ArkPopover.Context

export {
  PopoverRootProvider,
  PopoverRoot,
  PopoverAnchor,
  PopoverArrow,
  PopoverArrowTip,
  PopoverBody,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverPositioner,
  PopoverTitle,
  PopoverTrigger,
  PopoverContext,
}

export type {
  PopoverRootProviderProps,
  PopoverRootProps,
  PopoverAnchorProps,
  PopoverArrowProps,
  PopoverArrowTipProps,
  PopoverBodyProps,
  PopoverCloseTriggerProps,
  PopoverContentProps,
  PopoverDescriptionProps,
  PopoverFooterProps,
  PopoverHeaderProps,
  PopoverPositionerProps,
  PopoverTitleProps,
  PopoverTriggerProps,
  PopoverContextProps,
}
