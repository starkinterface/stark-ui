import { selectClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Select as ArkSelect } from "@ark-ui/react/select"

import type { SelectVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign, CollectionItem } from "@ark-ui/react"
import type { JSX, RefAttributes } from "react"

const { withProviderSlot, withSlot } = createStyleContext(selectClasses, {
  name: "Select",
})

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type SelectRootProviderBaseProps<T extends CollectionItem = CollectionItem> =
  Assign<ArkSelect.RootProviderBaseProps<T>, SelectVariantProps> & UnstyledProp

type SelectRootProviderProps<T extends CollectionItem = CollectionItem> =
  Assign<ArkSelect.RootProviderProps<T>, SelectRootProviderBaseProps<T>>

type SelectRootProviderComponent = <T extends CollectionItem>(
  props: SelectRootProviderProps<T> & RefAttributes<HTMLDivElement>
) => JSX.Element

const SelectRootProvider = withProviderSlot<
  HTMLDivElement,
  SelectRootProviderProps
>(ArkSelect.RootProvider, "root") as SelectRootProviderComponent

///////////////////////////////////////////////////////////////////////////////
/// Root

type SelectRootBaseProps<T extends CollectionItem = CollectionItem> = Assign<
  ArkSelect.RootBaseProps<T>,
  SelectVariantProps
> &
  UnstyledProp

type SelectRootProps<T extends CollectionItem = CollectionItem> = Assign<
  ArkSelect.RootProps<T>,
  SelectRootBaseProps<T>
>

type SelectRootComponent = <T extends CollectionItem>(
  props: SelectRootProps<T> & RefAttributes<HTMLDivElement>
) => JSX.Element

const SelectRoot = withProviderSlot<HTMLDivElement, SelectRootProps>(
  ArkSelect.Root,
  "root"
) as SelectRootComponent

///////////////////////////////////////////////////////////////////////////////
/// Label

type SelectLabelProps = Assign<ArkSelect.LabelProps, UnstyledProp>

const SelectLabel = withSlot<HTMLLabelElement, SelectLabelProps>(
  ArkSelect.Label,
  "label"
)

///////////////////////////////////////////////////////////////////////////////
/// Control

type SelectControlProps = Assign<ArkSelect.ControlProps, UnstyledProp>

const SelectControl = withSlot<HTMLDivElement, SelectControlProps>(
  ArkSelect.Control,
  "control"
)

///////////////////////////////////////////////////////////////////////////////
/// Trigger

type SelectTriggerProps = Assign<ArkSelect.TriggerProps, UnstyledProp>

const SelectTrigger = withSlot<HTMLButtonElement, SelectTriggerProps>(
  ArkSelect.Trigger,
  "trigger"
)

///////////////////////////////////////////////////////////////////////////////
/// ValueText

type SelectValueTextProps = Assign<ArkSelect.ValueTextProps, UnstyledProp>

const SelectValueText = withSlot<HTMLSpanElement, SelectValueTextProps>(
  ArkSelect.ValueText,
  "valueText"
)

///////////////////////////////////////////////////////////////////////////////
/// ClearTrigger

type SelectClearTriggerProps = Assign<ArkSelect.ClearTriggerProps, UnstyledProp>

const SelectClearTrigger = withSlot<HTMLButtonElement, SelectClearTriggerProps>(
  ArkSelect.ClearTrigger,
  "clearTrigger"
)

///////////////////////////////////////////////////////////////////////////////
/// Indicator

type SelectIndicatorProps = Assign<ArkSelect.IndicatorProps, UnstyledProp>

const SelectIndicator = withSlot<HTMLDivElement, SelectIndicatorProps>(
  ArkSelect.Indicator,
  "indicator"
)

///////////////////////////////////////////////////////////////////////////////
/// Positioner

type SelectPositionerProps = Assign<ArkSelect.PositionerProps, UnstyledProp>

const SelectPositioner = withSlot<HTMLDivElement, SelectPositionerProps>(
  ArkSelect.Positioner,
  "positioner"
)

///////////////////////////////////////////////////////////////////////////////
/// Content

type SelectContentProps = Assign<ArkSelect.ContentProps, UnstyledProp>

const SelectContent = withSlot<HTMLDivElement, SelectContentProps>(
  ArkSelect.Content,
  "content"
)

///////////////////////////////////////////////////////////////////////////////
/// ItemGroup

type SelectItemGroupProps = Assign<ArkSelect.ItemGroupProps, UnstyledProp>

const SelectItemGroup = withSlot<HTMLDivElement, SelectItemGroupProps>(
  ArkSelect.ItemGroup,
  "itemGroup"
)

///////////////////////////////////////////////////////////////////////////////
/// ItemGroupLabel

type SelectItemGroupLabelProps = Assign<
  ArkSelect.ItemGroupLabelProps,
  UnstyledProp
>

const SelectItemGroupLabel = withSlot<
  HTMLDivElement,
  SelectItemGroupLabelProps
>(ArkSelect.ItemGroupLabel, "itemGroupLabel")

///////////////////////////////////////////////////////////////////////////////
/// Item

type SelectItemProps = Assign<ArkSelect.ItemProps, UnstyledProp>

const SelectItem = withSlot<HTMLDivElement, SelectItemProps>(
  ArkSelect.Item,
  "item"
)

///////////////////////////////////////////////////////////////////////////////
/// ItemIndicator

type SelectItemIndicatorProps = Assign<
  ArkSelect.ItemIndicatorProps,
  UnstyledProp
>

const SelectItemIndicator = withSlot<HTMLDivElement, SelectItemIndicatorProps>(
  ArkSelect.ItemIndicator,
  "itemIndicator"
)

///////////////////////////////////////////////////////////////////////////////
/// ItemText

type SelectItemTextProps = Assign<ArkSelect.ItemTextProps, UnstyledProp>

const SelectItemText = withSlot<HTMLDivElement, SelectItemTextProps>(
  ArkSelect.ItemText,
  "itemText"
)

///////////////////////////////////////////////////////////////////////////////
/// HiddenSelect

type SelectHiddenSelectProps = Assign<ArkSelect.HiddenSelectProps, UnstyledProp>

const SelectHiddenSelect = withSlot<HTMLSelectElement, SelectHiddenSelectProps>(
  ArkSelect.HiddenSelect,
  "hiddenSelect"
)

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  SelectRoot,
  SelectRootProvider,
  SelectLabel,
  SelectControl,
  SelectTrigger,
  SelectValueText,
  SelectClearTrigger,
  SelectIndicator,
  SelectPositioner,
  SelectContent,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectHiddenSelect,
}
export type {
  SelectRootProps,
  SelectRootProviderProps,
  SelectLabelProps,
  SelectControlProps,
  SelectTriggerProps,
  SelectValueTextProps,
  SelectClearTriggerProps,
  SelectIndicatorProps,
  SelectPositionerProps,
  SelectContentProps,
  SelectItemGroupProps,
  SelectItemGroupLabelProps,
  SelectItemProps,
  SelectItemIndicatorProps,
  SelectItemTextProps,
  SelectHiddenSelectProps,
}
