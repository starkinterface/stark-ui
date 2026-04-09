import { fieldClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Field as ArkField } from "@ark-ui/react/field"

import type { FieldVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(fieldClasses, {
  name: "Field",
})

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type FieldRootProviderProps = Assign<
  ArkField.RootProviderProps,
  FieldVariantProps & UnstyledProp
>

const FieldRootProvider = withProviderSlot<
  HTMLDivElement,
  FieldRootProviderProps
>(ArkField.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Root

type FieldRootProps = Assign<
  ArkField.RootProps,
  FieldVariantProps & UnstyledProp
>

const FieldRoot = withProviderSlot<HTMLDivElement, FieldRootProps>(
  ArkField.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Label

type FieldLabelProps = Assign<ArkField.LabelProps, UnstyledProp>

const FieldLabel = withSlot<HTMLLabelElement, FieldLabelProps>(
  ArkField.Label,
  "label"
)

///////////////////////////////////////////////////////////////////////////////
/// Input

type FieldInputProps = Assign<ArkField.InputProps, UnstyledProp>

const FieldInput = withSlot<HTMLInputElement, FieldInputProps>(
  ArkField.Input,
  "input"
)

///////////////////////////////////////////////////////////////////////////////
/// Select

type FieldSelectProps = Assign<ArkField.SelectProps, UnstyledProp>

const FieldSelect = withSlot<HTMLSelectElement, FieldSelectProps>(
  ArkField.Select,
  "select"
)

///////////////////////////////////////////////////////////////////////////////
/// Textarea

type FieldTextareaProps = Assign<ArkField.TextareaProps, UnstyledProp>

const FieldTextarea = withSlot<HTMLTextAreaElement, FieldTextareaProps>(
  ArkField.Textarea,
  "textarea"
)

///////////////////////////////////////////////////////////////////////////////
/// ErrorText

type FieldErrorTextProps = Assign<ArkField.ErrorTextProps, UnstyledProp>

const FieldErrorText = withSlot<HTMLSpanElement, FieldErrorTextProps>(
  ArkField.ErrorText,
  "errorText"
)

///////////////////////////////////////////////////////////////////////////////
/// HelperText

type FieldHelperTextProps = Assign<ArkField.HelperTextProps, UnstyledProp>

const FieldHelperText = withSlot<HTMLSpanElement, FieldHelperTextProps>(
  ArkField.HelperText,
  "helperText"
)

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  FieldRoot,
  FieldRootProvider,
  FieldLabel,
  FieldInput,
  FieldSelect,
  FieldTextarea,
  FieldErrorText,
  FieldHelperText,
}
export type {
  FieldRootProps,
  FieldRootProviderProps,
  FieldLabelProps,
  FieldInputProps,
  FieldSelectProps,
  FieldTextareaProps,
  FieldErrorTextProps,
  FieldHelperTextProps,
}
