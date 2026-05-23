import { radioGroupClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { RadioGroup as ArkRadioGroup } from "@ark-ui/react/radio-group"

import type { RadioGroupVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(radioGroupClasses, {
  name: "RadioGroup",
})

///////////////////////////////////////////////////////////////////////////////
/// Root

type RadioGroupRootProps = Assign<
  ArkRadioGroup.RootProps,
  RadioGroupVariantProps & UnstyledProp
>

const RadioGroupRoot = withProviderSlot<HTMLLabelElement, RadioGroupRootProps>(
  ArkRadioGroup.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Label

type RadioGroupLabelProps = Assign<ArkRadioGroup.LabelProps, UnstyledProp>

const RadioGroupLabel = withSlot<HTMLSpanElement, RadioGroupLabelProps>(
  ArkRadioGroup.Label,
  "label"
)

///////////////////////////////////////////////////////////////////////////////
/// Indicator

type RadioGroupIndicatorProps = Assign<
  ArkRadioGroup.IndicatorProps,
  UnstyledProp
>

const RadioGroupIndicator = withSlot<HTMLDivElement, RadioGroupIndicatorProps>(
  ArkRadioGroup.Indicator,
  "indicator"
)

///////////////////////////////////////////////////////////////////////////////
/// Item

type RadioGroupItemProps = Assign<ArkRadioGroup.ItemProps, UnstyledProp>

const RadioGroupItem = withSlot<HTMLDivElement, RadioGroupItemProps>(
  ArkRadioGroup.Item,
  "item"
)

///////////////////////////////////////////////////////////////////////////////
/// ItemControl

type RadioGroupItemControlProps = Assign<
  ArkRadioGroup.ItemControlProps,
  UnstyledProp
>

const RadioGroupItemControl = withSlot<
  HTMLDivElement,
  RadioGroupItemControlProps
>(ArkRadioGroup.ItemControl, "itemControl")

///////////////////////////////////////////////////////////////////////////////
/// ItemText

type RadioGroupItemTextProps = Assign<ArkRadioGroup.ItemTextProps, UnstyledProp>

const RadioGroupItemText = withSlot<HTMLSpanElement, RadioGroupItemTextProps>(
  ArkRadioGroup.ItemText,
  "itemText"
)

///////////////////////////////////////////////////////////////////////////////
/// ItemHiddenInput

type RadioGroupItemHiddenInputProps = Assign<
  ArkRadioGroup.ItemHiddenInputProps,
  UnstyledProp
>

const RadioGroupItemHiddenInput = withSlot<
  HTMLInputElement,
  RadioGroupItemHiddenInputProps
>(ArkRadioGroup.ItemHiddenInput, "itemHiddenInput")

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  RadioGroupRoot,
  RadioGroupIndicator,
  RadioGroupLabel,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
  RadioGroupItemHiddenInput,
}
export type {
  RadioGroupRootProps,
  RadioGroupIndicatorProps,
  RadioGroupLabelProps,
  RadioGroupItemProps,
  RadioGroupItemControlProps,
  RadioGroupItemTextProps,
  RadioGroupItemHiddenInputProps,
}
