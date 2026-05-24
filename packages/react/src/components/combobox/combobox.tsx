import { comboboxClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Combobox as ArkCombobox } from "@ark-ui/react/combobox"
import { ark } from "@ark-ui/react/factory"

import type { ComboboxVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign, CollectionItem } from "@ark-ui/react"
import type { ComponentProps, JSX, RefAttributes } from "react"

const { withProviderSlot, withSlot } = createStyleContext(comboboxClasses, {
  name: "Combobox",
})

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type ComboboxRootProviderProps<T extends CollectionItem = CollectionItem> =
  Assign<ArkCombobox.RootProviderProps<T>, ComboboxVariantProps & UnstyledProp>

type ComboboxRootProviderComponent = <T extends CollectionItem>(
  props: ComboboxRootProviderProps<T> & RefAttributes<HTMLDivElement>
) => JSX.Element

const ComboboxRootProvider = withProviderSlot<
  HTMLDivElement,
  ComboboxRootProviderProps
>(ArkCombobox.RootProvider, "root") as ComboboxRootProviderComponent

///////////////////////////////////////////////////////////////////////////////
/// Root

type ComboboxRootProps<T extends CollectionItem = CollectionItem> = Assign<
  ArkCombobox.RootProps<T>,
  ComboboxVariantProps & UnstyledProp
>

type ComboboxRootComponent = <T extends CollectionItem>(
  props: ComboboxRootProps<T> & RefAttributes<HTMLDivElement>
) => JSX.Element

const ComboboxRoot = withProviderSlot<HTMLDivElement, ComboboxRootProps>(
  ArkCombobox.Root,
  "root"
) as ComboboxRootComponent

///////////////////////////////////////////////////////////////////////////////
/// Label

type ComboboxLabelProps = Assign<ArkCombobox.LabelProps, UnstyledProp>

const ComboboxLabel = withSlot<HTMLLabelElement, ComboboxLabelProps>(
  ArkCombobox.Label,
  "label"
)

///////////////////////////////////////////////////////////////////////////////
/// Control

type ComboboxControlProps = Assign<ArkCombobox.ControlProps, UnstyledProp>

const ComboboxControl = withSlot<HTMLDivElement, ComboboxControlProps>(
  ArkCombobox.Control,
  "control"
)

///////////////////////////////////////////////////////////////////////////////
/// Input

type ComboboxInputProps = Assign<ArkCombobox.InputProps, UnstyledProp>

const ComboboxInput = withSlot<HTMLInputElement, ComboboxInputProps>(
  ArkCombobox.Input,
  "input"
)

///////////////////////////////////////////////////////////////////////////////
/// Trigger

type ComboboxTriggerProps = Assign<ArkCombobox.TriggerProps, UnstyledProp>

const ComboboxTrigger = withSlot<HTMLButtonElement, ComboboxTriggerProps>(
  ArkCombobox.Trigger,
  "trigger"
)

///////////////////////////////////////////////////////////////////////////////
/// ClearTrigger

type ComboboxClearTriggerProps = Assign<
  ArkCombobox.ClearTriggerProps,
  UnstyledProp
>

const ComboboxClearTrigger = withSlot<
  HTMLButtonElement,
  ComboboxClearTriggerProps
>(ArkCombobox.ClearTrigger, "clearTrigger")

///////////////////////////////////////////////////////////////////////////////
/// Positioner

type ComboboxPositionerProps = Assign<ArkCombobox.PositionerProps, UnstyledProp>

const ComboboxPositioner = withSlot<HTMLDivElement, ComboboxPositionerProps>(
  ArkCombobox.Positioner,
  "positioner"
)

///////////////////////////////////////////////////////////////////////////////
/// Content

type ComboboxContentProps = Assign<ArkCombobox.ContentProps, UnstyledProp>

const ComboboxContent = withSlot<HTMLDivElement, ComboboxContentProps>(
  ArkCombobox.Content,
  "content"
)

///////////////////////////////////////////////////////////////////////////////
/// EmptyText

type ComboboxEmptyTextProps = Assign<
  ComponentProps<typeof ark.div>,
  UnstyledProp
>

const ComboboxEmptyText = withSlot<HTMLSpanElement, ComboboxEmptyTextProps>(
  (props: ComboboxEmptyTextProps) => (
    <ark.span data-combobox-empty-text {...props} />
  ),
  "emptyText"
)

///////////////////////////////////////////////////////////////////////////////
/// ItemGroup

type ComboboxItemGroupProps = Assign<ArkCombobox.ItemGroupProps, UnstyledProp>

const ComboboxItemGroup = withSlot<HTMLDivElement, ComboboxItemGroupProps>(
  ArkCombobox.ItemGroup,
  "itemGroup"
)

///////////////////////////////////////////////////////////////////////////////
/// ItemGroupLabel

type ComboboxItemGroupLabelProps = Assign<
  ArkCombobox.ItemGroupLabelProps,
  UnstyledProp
>

const ComboboxItemGroupLabel = withSlot<
  HTMLDivElement,
  ComboboxItemGroupLabelProps
>(ArkCombobox.ItemGroupLabel, "itemGroupLabel")

///////////////////////////////////////////////////////////////////////////////
/// Item

type ComboboxItemProps = Assign<ArkCombobox.ItemProps, UnstyledProp>

const ComboboxItem = withSlot<HTMLDivElement, ComboboxItemProps>(
  ArkCombobox.Item,
  "item"
)

///////////////////////////////////////////////////////////////////////////////
/// ItemIndicator

type ComboboxItemIndicatorProps = Assign<
  ArkCombobox.ItemIndicatorProps,
  UnstyledProp
>

const ComboboxItemIndicator = withSlot<
  HTMLDivElement,
  ComboboxItemIndicatorProps
>(ArkCombobox.ItemIndicator, "itemIndicator")

///////////////////////////////////////////////////////////////////////////////
/// ItemText

type ComboboxItemTextProps = Assign<ArkCombobox.ItemTextProps, UnstyledProp>

const ComboboxItemText = withSlot<HTMLDivElement, ComboboxItemTextProps>(
  ArkCombobox.ItemText,
  "itemText"
)

///////////////////////////////////////////////////////////////////////////////
/// Context

type ComboboxContextProps<T extends CollectionItem = CollectionItem> =
  ArkCombobox.ContextProps<T>

const ComboboxContext = ArkCombobox.Context

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  ComboboxRoot,
  ComboboxRootProvider,
  ComboboxLabel,
  ComboboxControl,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxClearTrigger,
  ComboboxPositioner,
  ComboboxContent,
  ComboboxEmptyText,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxContext,
}

export type {
  ComboboxRootProps,
  ComboboxRootProviderProps,
  ComboboxLabelProps,
  ComboboxControlProps,
  ComboboxInputProps,
  ComboboxTriggerProps,
  ComboboxClearTriggerProps,
  ComboboxPositionerProps,
  ComboboxContentProps,
  ComboboxEmptyTextProps,
  ComboboxItemGroupProps,
  ComboboxItemGroupLabelProps,
  ComboboxItemProps,
  ComboboxItemIndicatorProps,
  ComboboxItemTextProps,
  ComboboxContextProps,
}
