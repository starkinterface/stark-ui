import { fieldClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Field as ArkField } from "@ark-ui/react/field"

import type { ComponentProps } from "react"

const { withProviderSlot, withSlot } = createStyleContext(fieldClasses, {
  name: "Field",
})

const FieldRoot = withProviderSlot(ArkField.Root, "root")
const FieldRootProvider = withProviderSlot(ArkField.RootProvider, "root")
const FieldLabel = withSlot(ArkField.Label, "label")
const FieldInput = withSlot(ArkField.Input, "input")
const FieldSelect = withSlot(ArkField.Select, "select")
const FieldTextarea = withSlot(ArkField.Textarea, "textarea")
const FieldErrorText = withSlot(ArkField.ErrorText, "errorText")
const FieldHelperText = withSlot(ArkField.HelperText, "helperText")

type FieldRootProps = ComponentProps<typeof FieldRoot>
type FieldRootProviderProps = ComponentProps<typeof FieldRootProvider>
type FieldLabelProps = ComponentProps<typeof FieldLabel>
type FieldInputProps = ComponentProps<typeof FieldInput>
type FieldSelectProps = ComponentProps<typeof FieldSelect>
type FieldTextareaProps = ComponentProps<typeof FieldTextarea>
type FieldErrorTextProps = ComponentProps<typeof FieldErrorText>
type FieldHelperTextProps = ComponentProps<typeof FieldHelperText>

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
