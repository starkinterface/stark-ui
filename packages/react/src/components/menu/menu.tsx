import { menuClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { ark } from "@ark-ui/react/factory"
import { Menu as ArkMenu } from "@ark-ui/react/menu"

import type { MenuVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"
import type { ComponentProps } from "react"

const { withProviderSlot, withSlot } = createStyleContext(menuClasses, {
  name: "Menu",
})

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type MenuRootProviderProps = Assign<
  ArkMenu.RootProviderProps,
  MenuVariantProps & UnstyledProp
>

const MenuRootProvider = withProviderSlot<
  HTMLDivElement,
  MenuRootProviderProps
>(ArkMenu.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Root

type MenuRootProps = Assign<ArkMenu.RootProps, MenuVariantProps & UnstyledProp>

const MenuRoot = withProviderSlot<HTMLDivElement, MenuRootProps>(
  ArkMenu.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Arrow

type MenuArrowProps = Assign<ArkMenu.ArrowProps, UnstyledProp>

const MenuArrow = withSlot<HTMLDivElement, MenuArrowProps>(
  ArkMenu.Arrow,
  "arrow"
)

///////////////////////////////////////////////////////////////////////////////
/// ArrowTip

type MenuArrowTipProps = Assign<ArkMenu.ArrowTipProps, UnstyledProp>

const MenuArrowTip = withSlot<HTMLDivElement, MenuArrowTipProps>(
  ArkMenu.ArrowTip,
  "arrowTip"
)

///////////////////////////////////////////////////////////////////////////////
/// CheckboxItem

type MenuCheckboxItemProps = Assign<ArkMenu.CheckboxItemProps, UnstyledProp>

const MenuCheckboxItem = withSlot<HTMLDivElement, MenuCheckboxItemProps>(
  ArkMenu.CheckboxItem,
  "checkboxItem"
)

///////////////////////////////////////////////////////////////////////////////
/// Content

type MenuContentProps = Assign<ArkMenu.ContentProps, UnstyledProp>

const MenuContent = withSlot<HTMLDivElement, MenuContentProps>(
  ArkMenu.Content,
  "content"
)

///////////////////////////////////////////////////////////////////////////////
/// ContextTrigger

type MenuContextTriggerProps = Assign<ArkMenu.ContextTriggerProps, UnstyledProp>

const MenuContextTrigger = withSlot<HTMLDivElement, MenuContextTriggerProps>(
  ArkMenu.ContextTrigger,
  "contextTrigger"
)

///////////////////////////////////////////////////////////////////////////////
/// Indicator

type MenuIndicatorProps = Assign<ArkMenu.IndicatorProps, UnstyledProp>

const MenuIndicator = withSlot<HTMLDivElement, MenuIndicatorProps>(
  ArkMenu.Indicator,
  "indicator"
)

///////////////////////////////////////////////////////////////////////////////
/// Item

type MenuItemProps = Assign<ArkMenu.ItemProps, UnstyledProp>

const MenuItem = withSlot<HTMLDivElement, MenuItemProps>(ArkMenu.Item, "item")

///////////////////////////////////////////////////////////////////////////////
/// ItemGroup

type MenuItemGroupProps = Assign<ArkMenu.ItemGroupProps, UnstyledProp>

const MenuItemGroup = withSlot<HTMLDivElement, MenuItemGroupProps>(
  ArkMenu.ItemGroup,
  "itemGroup"
)

///////////////////////////////////////////////////////////////////////////////
/// ItemGroupLabel

type MenuItemGroupLabelProps = Assign<ArkMenu.ItemGroupLabelProps, UnstyledProp>

const MenuItemGroupLabel = withSlot<HTMLDivElement, MenuItemGroupLabelProps>(
  ArkMenu.ItemGroupLabel,
  "itemGroupLabel"
)

///////////////////////////////////////////////////////////////////////////////
/// ItemIndicator

type MenuItemIndicatorProps = Assign<ArkMenu.ItemIndicatorProps, UnstyledProp>

const MenuItemIndicator = withSlot<HTMLDivElement, MenuItemIndicatorProps>(
  ArkMenu.ItemIndicator,
  "itemIndicator"
)

///////////////////////////////////////////////////////////////////////////////
/// ItemShortcut

type MenuItemShortcutProps = Assign<
  ComponentProps<typeof ark.kbd>,
  UnstyledProp
>

const MenuItemShortcut = withSlot<HTMLElement, MenuItemShortcutProps>(
  ark.kbd,
  "itemShortcut"
)

///////////////////////////////////////////////////////////////////////////////
/// ItemText

type MenuItemTextProps = Assign<ArkMenu.ItemTextProps, UnstyledProp>

const MenuItemText = withSlot<HTMLDivElement, MenuItemTextProps>(
  ArkMenu.ItemText,
  "itemText"
)

///////////////////////////////////////////////////////////////////////////////
/// Positioner

type MenuPositionerProps = Assign<ArkMenu.PositionerProps, UnstyledProp>

const MenuPositioner = withSlot<HTMLDivElement, MenuPositionerProps>(
  ArkMenu.Positioner,
  "positioner"
)

///////////////////////////////////////////////////////////////////////////////
/// RadioItem

type MenuRadioItemProps = Assign<ArkMenu.RadioItemProps, UnstyledProp>

const MenuRadioItem = withSlot<HTMLDivElement, MenuRadioItemProps>(
  ArkMenu.RadioItem,
  "radioItem"
)

///////////////////////////////////////////////////////////////////////////////
/// RadioItemGroup

type MenuRadioItemGroupProps = Assign<ArkMenu.RadioItemGroupProps, UnstyledProp>

const MenuRadioItemGroup = withSlot<HTMLDivElement, MenuRadioItemGroupProps>(
  ArkMenu.RadioItemGroup,
  "radioItemGroup"
)

///////////////////////////////////////////////////////////////////////////////
/// Separator

type MenuSeparatorProps = Assign<ArkMenu.SeparatorProps, UnstyledProp>

const MenuSeparator = withSlot<HTMLHRElement, MenuSeparatorProps>(
  ArkMenu.Separator,
  "separator"
)

///////////////////////////////////////////////////////////////////////////////
/// Trigger

type MenuTriggerProps = Assign<ArkMenu.TriggerProps, UnstyledProp>

const MenuTrigger = withSlot<HTMLButtonElement, MenuTriggerProps>(
  ArkMenu.Trigger,
  "trigger"
)

///////////////////////////////////////////////////////////////////////////////
/// TriggerItem

type MenuTriggerItemProps = Assign<ArkMenu.TriggerItemProps, UnstyledProp>

const MenuTriggerItem = withSlot<HTMLDivElement, MenuTriggerItemProps>(
  ArkMenu.TriggerItem,
  "triggerItem"
)

///////////////////////////////////////////////////////////////////////////////
/// Context

type MenuContextProps = ArkMenu.ContextProps

const MenuContext = ArkMenu.Context

///////////////////////////////////////////////////////////////////////////////
/// ItemContext

type MenuItemContextProps = ArkMenu.ItemContextProps

const MenuItemContext = ArkMenu.ItemContext

export {
  MenuRootProvider,
  MenuRoot,
  MenuArrow,
  MenuArrowTip,
  MenuCheckboxItem,
  MenuContent,
  MenuContextTrigger,
  MenuIndicator,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuItemIndicator,
  MenuItemShortcut,
  MenuItemText,
  MenuPositioner,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
  MenuContext,
  MenuItemContext,
}

export type {
  MenuRootProviderProps,
  MenuRootProps,
  MenuArrowProps,
  MenuArrowTipProps,
  MenuCheckboxItemProps,
  MenuContentProps,
  MenuContextTriggerProps,
  MenuIndicatorProps,
  MenuItemProps,
  MenuItemGroupProps,
  MenuItemGroupLabelProps,
  MenuItemIndicatorProps,
  MenuItemShortcutProps,
  MenuItemTextProps,
  MenuPositionerProps,
  MenuRadioItemProps,
  MenuRadioItemGroupProps,
  MenuSeparatorProps,
  MenuTriggerProps,
  MenuTriggerItemProps,
  MenuContextProps,
  MenuItemContextProps,
}
