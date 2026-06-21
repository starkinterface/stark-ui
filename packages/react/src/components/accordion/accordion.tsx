import { accordionClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Accordion as ArkAccordion } from "@ark-ui/react/accordion"
import { ark } from "@ark-ui/react/factory"

import type { AccordionVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"
import type { ComponentProps } from "react"

const { withProviderSlot, withSlot } = createStyleContext(accordionClasses, {
  name: "Accordion",
})

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type AccordionRootProviderProps = Assign<
  ArkAccordion.RootProviderProps,
  AccordionVariantProps & UnstyledProp
>

const AccordionRootProvider = withProviderSlot<
  HTMLDivElement,
  AccordionRootProviderProps
>(ArkAccordion.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Root

type AccordionRootProps = Assign<
  ArkAccordion.RootProps,
  AccordionVariantProps & UnstyledProp
>

const AccordionRoot = withProviderSlot<HTMLDivElement, AccordionRootProps>(
  ArkAccordion.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Item

type AccordionItemProps = Assign<ArkAccordion.ItemProps, UnstyledProp>

const AccordionItem = withSlot<HTMLDivElement, AccordionItemProps>(
  ArkAccordion.Item,
  "item"
)

///////////////////////////////////////////////////////////////////////////////
/// ItemTrigger

type AccordionItemTriggerProps = Assign<
  ArkAccordion.ItemTriggerProps,
  UnstyledProp
>

const AccordionItemTrigger = withSlot<
  HTMLButtonElement,
  AccordionItemTriggerProps
>(ArkAccordion.ItemTrigger, "itemTrigger")

///////////////////////////////////////////////////////////////////////////////
/// ItemTriggerOverlay

type AccordionItemTriggerOverlayProps = Assign<
  ArkAccordion.ItemTriggerProps,
  UnstyledProp
>

const AccordionItemTriggerOverlay = withSlot<
  HTMLButtonElement,
  AccordionItemTriggerOverlayProps
>(ArkAccordion.ItemTrigger, "itemTriggerOverlay")

///////////////////////////////////////////////////////////////////////////////
/// ItemContent

type AccordionItemContentProps = Assign<
  ArkAccordion.ItemContentProps,
  UnstyledProp
>

const AccordionItemContent = withSlot<
  HTMLDivElement,
  AccordionItemContentProps
>(ArkAccordion.ItemContent, "itemContent")

///////////////////////////////////////////////////////////////////////////////
/// ItemIndicator

type AccordionItemIndicatorProps = Assign<
  ArkAccordion.ItemIndicatorProps,
  UnstyledProp
>

const AccordionItemIndicator = withSlot<
  HTMLDivElement,
  AccordionItemIndicatorProps
>(ArkAccordion.ItemIndicator, "itemIndicator")

///////////////////////////////////////////////////////////////////////////////
/// ItemBody

type AccordionItemBodyProps = Assign<
  ComponentProps<typeof ark.div>,
  UnstyledProp
>

const AccordionItemBody = withSlot<HTMLDivElement, AccordionItemBodyProps>(
  ark.div,
  "itemBody"
)

///////////////////////////////////////////////////////////////////////////////
/// ItemTriggerAction

type AccordionItemTriggerActionProps = Assign<
  ComponentProps<typeof ark.div>,
  UnstyledProp
>

const AccordionItemTriggerAction = withSlot<
  HTMLDivElement,
  AccordionItemTriggerActionProps
>(ark.div, "itemTriggerAction")

///////////////////////////////////////////////////////////////////////////////
/// ItemTitle

type AccordionItemTitleProps = Assign<
  ComponentProps<typeof ark.span>,
  UnstyledProp
>

const AccordionItemTitle = withSlot<HTMLSpanElement, AccordionItemTitleProps>(
  ark.span,
  "itemTitle"
)

///////////////////////////////////////////////////////////////////////////////
/// ItemSubtitle

type AccordionItemSubtitleProps = Assign<
  ComponentProps<typeof ark.span>,
  UnstyledProp
>

const AccordionItemSubtitle = withSlot<
  HTMLSpanElement,
  AccordionItemSubtitleProps
>(ark.span, "itemSubtitle")

///////////////////////////////////////////////////////////////////////////////
/// ItemIcon

type AccordionItemIconProps = Assign<
  ComponentProps<typeof ark.div>,
  UnstyledProp
>

const AccordionItemIcon = withSlot<HTMLDivElement, AccordionItemIconProps>(
  ark.div,
  "itemIcon"
)

///////////////////////////////////////////////////////////////////////////////
/// ItemAddon

type AccordionItemAddonProps = Assign<
  ComponentProps<typeof ark.div> & {
    "data-align"?: "inline-start" | "inline-end" | "block-start" | "block-end"
  },
  UnstyledProp
>

const AccordionItemAddon = withSlot<HTMLDivElement, AccordionItemAddonProps>(
  ark.div,
  "itemAddon"
)

///////////////////////////////////////////////////////////////////////////////
/// Context

type AccordionContextProps = ArkAccordion.ContextProps

const AccordionContext = ArkAccordion.Context

///////////////////////////////////////////////////////////////////////////////
/// ItemContext

type AccordionItemContextProps = ArkAccordion.ItemContextProps

const AccordionItemContext = ArkAccordion.ItemContext

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  AccordionRootProvider,
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
  AccordionItemBody,
  AccordionItemIndicator,
  AccordionItemTriggerAction,
  AccordionItemTriggerOverlay,
  AccordionItemTitle,
  AccordionItemSubtitle,
  AccordionItemIcon,
  AccordionItemAddon,
  AccordionContext,
  AccordionItemContext,
}
export type {
  AccordionRootProviderProps,
  AccordionRootProps,
  AccordionItemProps,
  AccordionItemTriggerProps,
  AccordionItemContentProps,
  AccordionItemBodyProps,
  AccordionItemIndicatorProps,
  AccordionItemTriggerActionProps,
  AccordionItemTriggerOverlayProps,
  AccordionItemTitleProps,
  AccordionItemSubtitleProps,
  AccordionItemIconProps,
  AccordionItemAddonProps,
  AccordionContextProps,
  AccordionItemContextProps,
}
