import { collapsibleClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Collapsible as ArkCollapsible } from "@ark-ui/react/collapsible"
import { ark } from "@ark-ui/react/factory"

import type { CollapsibleVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"
import type { ComponentProps } from "react"

const { withProviderSlot, withSlot } = createStyleContext(collapsibleClasses, {
  name: "Collapsible",
})

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type CollapsibleRootProviderProps = Assign<
  ArkCollapsible.RootProviderProps,
  CollapsibleVariantProps & UnstyledProp
>

const CollapsibleRootProvider = withProviderSlot<
  HTMLDivElement,
  CollapsibleRootProviderProps
>(ArkCollapsible.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Root

type CollapsibleRootProps = Assign<
  ArkCollapsible.RootProps,
  CollapsibleVariantProps & UnstyledProp
>

const CollapsibleRoot = withProviderSlot<HTMLDivElement, CollapsibleRootProps>(
  ArkCollapsible.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Trigger

type CollapsibleTriggerProps = Assign<ArkCollapsible.TriggerProps, UnstyledProp>

const CollapsibleTrigger = withSlot<HTMLButtonElement, CollapsibleTriggerProps>(
  ArkCollapsible.Trigger,
  "trigger"
)

///////////////////////////////////////////////////////////////////////////////
/// Content

type CollapsibleContentProps = Assign<ArkCollapsible.ContentProps, UnstyledProp>

const CollapsibleContent = withSlot<HTMLDivElement, CollapsibleContentProps>(
  ArkCollapsible.Content,
  "content"
)

///////////////////////////////////////////////////////////////////////////////
/// Indicator

type CollapsibleIndicatorProps = Assign<
  ArkCollapsible.IndicatorProps,
  UnstyledProp
>

const CollapsibleIndicator = withSlot<
  HTMLDivElement,
  CollapsibleIndicatorProps
>(ArkCollapsible.Indicator, "indicator")

///////////////////////////////////////////////////////////////////////////////
/// Body

type CollapsibleBodyProps = Assign<ComponentProps<typeof ark.div>, UnstyledProp>

const CollapsibleBody = withSlot<HTMLDivElement, CollapsibleBodyProps>(
  ark.div,
  "body"
)

///////////////////////////////////////////////////////////////////////////////
/// Context

type CollapsibleContextProps = ArkCollapsible.ContextProps

const CollapsibleContext = ArkCollapsible.Context

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  CollapsibleRootProvider,
  CollapsibleRoot,
  CollapsibleTrigger,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleBody,
  CollapsibleContext,
}
export type {
  CollapsibleRootProviderProps,
  CollapsibleRootProps,
  CollapsibleTriggerProps,
  CollapsibleContentProps,
  CollapsibleIndicatorProps,
  CollapsibleBodyProps,
  CollapsibleContextProps,
}
