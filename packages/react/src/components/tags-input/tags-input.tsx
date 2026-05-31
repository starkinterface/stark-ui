import { tagsInputClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { TagsInput as ArkTagsInput } from "@ark-ui/react/tags-input"

import type { TagsInputVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(tagsInputClasses, {
  name: "TagsInput",
})

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type TagsInputRootProviderProps = Assign<
  ArkTagsInput.RootProviderProps,
  TagsInputVariantProps & UnstyledProp
>

const TagsInputRootProvider = withProviderSlot<
  HTMLDivElement,
  TagsInputRootProviderProps
>(ArkTagsInput.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Root

type TagsInputRootProps = Assign<
  ArkTagsInput.RootProps,
  TagsInputVariantProps & UnstyledProp
>

const TagsInputRoot = withProviderSlot<HTMLDivElement, TagsInputRootProps>(
  ArkTagsInput.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Control

type TagsInputControlProps = Assign<ArkTagsInput.ControlProps, UnstyledProp>

const TagsInputControl = withSlot<HTMLDivElement, TagsInputControlProps>(
  ArkTagsInput.Control,
  "control"
)

///////////////////////////////////////////////////////////////////////////////
/// Label

type TagsInputLabelProps = Assign<ArkTagsInput.LabelProps, UnstyledProp>

const TagsInputLabel = withSlot<HTMLLabelElement, TagsInputLabelProps>(
  ArkTagsInput.Label,
  "label"
)

///////////////////////////////////////////////////////////////////////////////
/// Input

type TagsInputInputProps = Assign<ArkTagsInput.InputProps, UnstyledProp>

const TagsInputInput = withSlot<HTMLInputElement, TagsInputInputProps>(
  ArkTagsInput.Input,
  "input"
)

///////////////////////////////////////////////////////////////////////////////
/// HiddenInput

type TagsInputHiddenInputProps = Assign<
  ArkTagsInput.HiddenInputProps,
  UnstyledProp
>

const TagsInputHiddenInput = withSlot<
  HTMLInputElement,
  TagsInputHiddenInputProps
>(ArkTagsInput.HiddenInput, "hiddenInput")

///////////////////////////////////////////////////////////////////////////////
/// ClearTrigger

type TagsInputClearTriggerProps = Assign<
  ArkTagsInput.ClearTriggerProps,
  UnstyledProp
>

const TagsInputClearTrigger = withSlot<
  HTMLButtonElement,
  TagsInputClearTriggerProps
>(ArkTagsInput.ClearTrigger, "clearTrigger")

///////////////////////////////////////////////////////////////////////////////
/// Item

type TagsInputItemProps = Assign<ArkTagsInput.ItemProps, UnstyledProp>

const TagsInputItem = withSlot<HTMLDivElement, TagsInputItemProps>(
  ArkTagsInput.Item,
  "item"
)

///////////////////////////////////////////////////////////////////////////////
/// ItemPreview

type TagsInputItemPreviewProps = Assign<
  ArkTagsInput.ItemPreviewProps,
  UnstyledProp
>

const TagsInputItemPreview = withSlot<
  HTMLDivElement,
  TagsInputItemPreviewProps
>(ArkTagsInput.ItemPreview, "itemPreview")

///////////////////////////////////////////////////////////////////////////////
/// ItemText

type TagsInputItemTextProps = Assign<ArkTagsInput.ItemTextProps, UnstyledProp>

const TagsInputItemText = withSlot<HTMLSpanElement, TagsInputItemTextProps>(
  ArkTagsInput.ItemText,
  "itemText"
)

///////////////////////////////////////////////////////////////////////////////
/// ItemDeleteTrigger

type TagsInputItemDeleteTriggerProps = Assign<
  ArkTagsInput.ItemDeleteTriggerProps,
  UnstyledProp
>

const TagsInputItemDeleteTrigger = withSlot<
  HTMLButtonElement,
  TagsInputItemDeleteTriggerProps
>(ArkTagsInput.ItemDeleteTrigger, "itemDeleteTrigger")

///////////////////////////////////////////////////////////////////////////////
/// ItemInput

type TagsInputItemInputProps = Assign<ArkTagsInput.ItemInputProps, UnstyledProp>

const TagsInputItemInput = withSlot<HTMLInputElement, TagsInputItemInputProps>(
  ArkTagsInput.ItemInput,
  "itemInput"
)

///////////////////////////////////////////////////////////////////////////////
/// Context

type TagsInputContextProps = ArkTagsInput.ContextProps

const TagsInputContext = ArkTagsInput.Context

///////////////////////////////////////////////////////////////////////////////
/// ItemContext

type TagsInputItemContextProps = ArkTagsInput.ItemContextProps

const TagsInputItemContext = ArkTagsInput.ItemContext

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  TagsInputRoot,
  TagsInputRootProvider,
  TagsInputControl,
  TagsInputLabel,
  TagsInputInput,
  TagsInputHiddenInput,
  TagsInputClearTrigger,
  TagsInputItem,
  TagsInputItemPreview,
  TagsInputItemText,
  TagsInputItemDeleteTrigger,
  TagsInputItemInput,
  TagsInputContext,
  TagsInputItemContext,
}

export type {
  TagsInputRootProps,
  TagsInputRootProviderProps,
  TagsInputControlProps,
  TagsInputLabelProps,
  TagsInputInputProps,
  TagsInputHiddenInputProps,
  TagsInputClearTriggerProps,
  TagsInputItemProps,
  TagsInputItemPreviewProps,
  TagsInputItemTextProps,
  TagsInputItemDeleteTriggerProps,
  TagsInputItemInputProps,
  TagsInputContextProps,
  TagsInputItemContextProps,
}
