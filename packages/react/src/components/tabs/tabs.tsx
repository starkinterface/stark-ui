import { tabsClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Tabs as ArkTabs } from "@ark-ui/react/tabs"

import type { TabsVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(tabsClasses, {
  name: "Tabs",
})

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type TabsRootProviderProps = Assign<
  ArkTabs.RootProviderProps,
  TabsVariantProps & UnstyledProp
>

const TabsRootProvider = withProviderSlot<
  HTMLDivElement,
  TabsRootProviderProps
>(ArkTabs.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Root

type TabsRootProps = Assign<ArkTabs.RootProps, TabsVariantProps & UnstyledProp>

const TabsRoot = withProviderSlot<HTMLDivElement, TabsRootProps>(
  ArkTabs.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// List

type TabListProps = Assign<ArkTabs.ListProps, UnstyledProp>

const TabList = withSlot<HTMLDivElement, TabListProps>(ArkTabs.List, "list")

///////////////////////////////////////////////////////////////////////////////
/// Trigger

type TabTriggerProps = Assign<ArkTabs.TriggerProps, UnstyledProp>

const TabTrigger = withSlot<HTMLButtonElement, TabTriggerProps>(
  ArkTabs.Trigger,
  "trigger"
)

///////////////////////////////////////////////////////////////////////////////
/// Content

type TabContentProps = Assign<ArkTabs.ContentProps, UnstyledProp>

const TabContent = withSlot<HTMLDivElement, TabContentProps>(
  ArkTabs.Content,
  "content"
)

///////////////////////////////////////////////////////////////////////////////
/// Indicator

type TabIndicatorProps = Assign<ArkTabs.IndicatorProps, UnstyledProp>

const TabIndicator = withSlot<HTMLDivElement, TabIndicatorProps>(
  ArkTabs.Indicator,
  "indicator"
)

///////////////////////////////////////////////////////////////////////////////
/// Context

type TabsContextProps = ArkTabs.ContextProps

const TabsContext = ArkTabs.Context

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  TabsRootProvider,
  TabsRoot,
  TabList,
  TabTrigger,
  TabContent,
  TabIndicator,
  TabsContext,
}
export type {
  TabsRootProviderProps,
  TabsRootProps,
  TabListProps,
  TabTriggerProps,
  TabContentProps,
  TabIndicatorProps,
  TabsContextProps,
}
