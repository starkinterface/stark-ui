import { checkboxClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox"

import type { CheckboxVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(checkboxClasses, {
  name: "Checkbox",
})

///////////////////////////////////////////////////////////////////////////////
/// Root

type CheckboxRootProps = Assign<
  ArkCheckbox.RootProps,
  CheckboxVariantProps & UnstyledProp
>

const CheckboxRoot = withProviderSlot<HTMLLabelElement, CheckboxRootProps>(
  ArkCheckbox.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Control

type CheckboxControlProps = Assign<ArkCheckbox.ControlProps, UnstyledProp>

const CheckboxControl = withSlot<HTMLDivElement, CheckboxControlProps>(
  ArkCheckbox.Control,
  "control"
)

///////////////////////////////////////////////////////////////////////////////
/// Indicator

type CheckboxIndicatorProps = Assign<ArkCheckbox.IndicatorProps, UnstyledProp>

const CheckboxIndicator = withSlot<HTMLDivElement, CheckboxIndicatorProps>(
  ArkCheckbox.Indicator,
  "indicator"
)

///////////////////////////////////////////////////////////////////////////////
/// Label

type CheckboxLabelProps = Assign<ArkCheckbox.LabelProps, UnstyledProp>

const CheckboxLabel = withSlot<HTMLSpanElement, CheckboxLabelProps>(
  ArkCheckbox.Label,
  "label"
)

///////////////////////////////////////////////////////////////////////////////
/// HiddenInput

type CheckboxHiddenInputProps = Assign<
  ArkCheckbox.HiddenInputProps,
  UnstyledProp
>

const CheckboxHiddenInput = withSlot<
  HTMLInputElement,
  CheckboxHiddenInputProps
>(ArkCheckbox.HiddenInput, "hiddenInput")

///////////////////////////////////////////////////////////////////////////////
/// Context

type CheckboxContextProps = ArkCheckbox.ContextProps

const CheckboxContext = ArkCheckbox.Context

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  CheckboxContext,
  CheckboxHiddenInput,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxControl,
  CheckboxRoot,
}
export type {
  CheckboxContextProps,
  CheckboxHiddenInputProps,
  CheckboxIndicatorProps,
  CheckboxLabelProps,
  CheckboxControlProps,
  CheckboxRootProps,
}
