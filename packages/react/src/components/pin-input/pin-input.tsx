import { pinInputClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { ark } from "@ark-ui/react/factory"
import { PinInput as ArkPinInput } from "@ark-ui/react/pin-input"

import type { PinInputVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"
import type { ComponentProps } from "react"

const { withProviderSlot, withSlot } = createStyleContext(pinInputClasses, {
  name: "PinInput",
})

///////////////////////////////////////////////////////////////////////////////
/// Root

type PinInputRootProps = Assign<
  ArkPinInput.RootProps,
  PinInputVariantProps & UnstyledProp
>

const PinInputRoot = withProviderSlot<HTMLDivElement, PinInputRootProps>(
  ArkPinInput.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Label

type PinInputLabelProps = Assign<ArkPinInput.LabelProps, UnstyledProp>

const PinInputLabel = withSlot<HTMLSpanElement, PinInputLabelProps>(
  ArkPinInput.Label,
  "label"
)

///////////////////////////////////////////////////////////////////////////////
/// Control

type PinInputControlProps = Assign<ArkPinInput.ControlProps, UnstyledProp>

const PinInputControl = withSlot<HTMLDivElement, PinInputControlProps>(
  ArkPinInput.Control,
  "control"
)

///////////////////////////////////////////////////////////////////////////////
/// Input

type PinInputInputProps = Assign<ArkPinInput.InputProps, UnstyledProp>

const PinInputInput = withSlot<HTMLInputElement, PinInputInputProps>(
  ArkPinInput.Input,
  "input"
)

///////////////////////////////////////////////////////////////////////////////
/// HiddenInput

type PinInputHiddenInputProps = Assign<
  ArkPinInput.HiddenInputProps,
  UnstyledProp
>

const PinInputHiddenInput = withSlot<
  HTMLInputElement,
  PinInputHiddenInputProps
>(ArkPinInput.HiddenInput, "hiddenInput")

///////////////////////////////////////////////////////////////////////////////
/// Separator

type PinInputSeparatorProps = Assign<
  ComponentProps<typeof ark.span>,
  UnstyledProp
>

const PinInputSeparator = withSlot<HTMLSpanElement, PinInputSeparatorProps>(
  ark.span,
  "separator"
)

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  PinInputRoot,
  PinInputLabel,
  PinInputControl,
  PinInputInput,
  PinInputHiddenInput,
  PinInputSeparator,
}

export type {
  PinInputRootProps,
  PinInputLabelProps,
  PinInputControlProps,
  PinInputInputProps,
  PinInputHiddenInputProps,
  PinInputSeparatorProps,
}
