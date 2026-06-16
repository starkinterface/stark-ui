import { segmentGroupClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { ark } from "@ark-ui/react/factory"
import { SegmentGroup as ArkSegmentGroup } from "@ark-ui/react/segment-group"

import type { SegmentGroupVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"
import type { ComponentProps } from "react"

const { withProviderSlot, withSlot } = createStyleContext(segmentGroupClasses, {
  name: "SegmentGroup",
})

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type SegmentGroupRootProviderProps = Assign<
  ArkSegmentGroup.RootProviderProps,
  SegmentGroupVariantProps & UnstyledProp
>

const SegmentGroupRootProvider = withProviderSlot<
  HTMLDivElement,
  SegmentGroupRootProviderProps
>(ArkSegmentGroup.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Root

type SegmentGroupRootProps = Assign<
  ArkSegmentGroup.RootProps,
  SegmentGroupVariantProps & UnstyledProp
>

const SegmentGroupRoot = withProviderSlot<
  HTMLDivElement,
  SegmentGroupRootProps
>(ArkSegmentGroup.Root, "root")

///////////////////////////////////////////////////////////////////////////////
/// Label

type SegmentGroupLabelProps = Assign<ArkSegmentGroup.LabelProps, UnstyledProp>

const SegmentGroupLabel = withSlot<HTMLSpanElement, SegmentGroupLabelProps>(
  ArkSegmentGroup.Label,
  "label"
)

///////////////////////////////////////////////////////////////////////////////
/// Indicator

type SegmentGroupIndicatorProps = Assign<
  ArkSegmentGroup.IndicatorProps,
  UnstyledProp
>

const SegmentGroupIndicator = withSlot<
  HTMLDivElement,
  SegmentGroupIndicatorProps
>(ArkSegmentGroup.Indicator, "indicator")

///////////////////////////////////////////////////////////////////////////////
/// Item

type SegmentGroupItemProps = Assign<ArkSegmentGroup.ItemProps, UnstyledProp>

const SegmentGroupItem = withSlot<HTMLDivElement, SegmentGroupItemProps>(
  ArkSegmentGroup.Item,
  "item"
)

///////////////////////////////////////////////////////////////////////////////
/// ItemControl

type SegmentGroupItemControlProps = Assign<
  ArkSegmentGroup.ItemControlProps,
  UnstyledProp
>

const SegmentGroupItemControl = withSlot<
  HTMLDivElement,
  SegmentGroupItemControlProps
>(ArkSegmentGroup.ItemControl, "itemControl")

///////////////////////////////////////////////////////////////////////////////
/// ItemText

type SegmentGroupItemTextProps = Assign<
  ArkSegmentGroup.ItemTextProps,
  UnstyledProp
>

const SegmentGroupItemText = withSlot<
  HTMLSpanElement,
  SegmentGroupItemTextProps
>(ArkSegmentGroup.ItemText, "itemText")

///////////////////////////////////////////////////////////////////////////////
/// ItemHiddenInput

type SegmentGroupItemHiddenInputProps = Assign<
  ArkSegmentGroup.ItemHiddenInputProps,
  UnstyledProp
>

const SegmentGroupItemHiddenInput = withSlot<
  HTMLInputElement,
  SegmentGroupItemHiddenInputProps
>(ArkSegmentGroup.ItemHiddenInput, "itemHiddenInput")

///////////////////////////////////////////////////////////////////////////////
/// Content

type SegmentGroupContentProps = Assign<
  ComponentProps<typeof ark.div>,
  UnstyledProp
>

const SegmentGroupContent = withSlot<HTMLDivElement, SegmentGroupContentProps>(
  (props: SegmentGroupContentProps) => <ark.div {...props} />,
  "content"
)

///////////////////////////////////////////////////////////////////////////////
/// Context

type SegmentGroupContextProps = ArkSegmentGroup.ContextProps

const SegmentGroupContext = ArkSegmentGroup.Context

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  SegmentGroupRootProvider,
  SegmentGroupRoot,
  SegmentGroupLabel,
  SegmentGroupIndicator,
  SegmentGroupItem,
  SegmentGroupItemControl,
  SegmentGroupItemText,
  SegmentGroupItemHiddenInput,
  SegmentGroupContext,
  SegmentGroupContent,
}
export type {
  SegmentGroupRootProviderProps,
  SegmentGroupRootProps,
  SegmentGroupLabelProps,
  SegmentGroupIndicatorProps,
  SegmentGroupItemProps,
  SegmentGroupItemControlProps,
  SegmentGroupItemTextProps,
  SegmentGroupItemHiddenInputProps,
  SegmentGroupContextProps,
  SegmentGroupContentProps,
}
