import { numberInputClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { NumberInput as ArkNumberInput } from "@ark-ui/react/number-input"

import type { NumberInputVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(numberInputClasses, {
  name: "NumberInput",
})

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type NumberInputRootProviderProps = Assign<
  ArkNumberInput.RootProviderProps,
  NumberInputVariantProps & UnstyledProp
>

const NumberInputRootProvider = withProviderSlot<
  HTMLDivElement,
  NumberInputRootProviderProps
>(ArkNumberInput.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Root

type NumberInputRootProps = Assign<
  ArkNumberInput.RootProps,
  NumberInputVariantProps & UnstyledProp
>

const NumberInputRoot = withProviderSlot<HTMLDivElement, NumberInputRootProps>(
  ArkNumberInput.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Label

type NumberInputLabelProps = Assign<ArkNumberInput.LabelProps, UnstyledProp>

const NumberInputLabel = withSlot<HTMLLabelElement, NumberInputLabelProps>(
  ArkNumberInput.Label,
  "label"
)

///////////////////////////////////////////////////////////////////////////////
/// Scrubber

type NumberInputScrubberProps = Assign<
  ArkNumberInput.ScrubberProps,
  UnstyledProp
>

const NumberInputScrubber = withSlot<HTMLDivElement, NumberInputScrubberProps>(
  ArkNumberInput.Scrubber,
  "scrubber"
)

///////////////////////////////////////////////////////////////////////////////
/// Control

type NumberInputControlProps = Assign<ArkNumberInput.ControlProps, UnstyledProp>

const NumberInputControl = withSlot<HTMLDivElement, NumberInputControlProps>(
  ArkNumberInput.Control,
  "control"
)

///////////////////////////////////////////////////////////////////////////////
/// Input

type NumberInputInputProps = Assign<ArkNumberInput.InputProps, UnstyledProp>

const NumberInputInput = withSlot<HTMLInputElement, NumberInputInputProps>(
  ArkNumberInput.Input,
  "input"
)

///////////////////////////////////////////////////////////////////////////////
/// IncrementTrigger

type NumberInputIncrementTriggerProps = Assign<
  ArkNumberInput.IncrementTriggerProps,
  UnstyledProp
>

const NumberInputIncrementTrigger = withSlot<
  HTMLButtonElement,
  NumberInputIncrementTriggerProps
>(ArkNumberInput.IncrementTrigger, "incrementTrigger")

///////////////////////////////////////////////////////////////////////////////
/// DecrementTrigger

type NumberInputDecrementTriggerProps = Assign<
  ArkNumberInput.DecrementTriggerProps,
  UnstyledProp
>

const NumberInputDecrementTrigger = withSlot<
  HTMLButtonElement,
  NumberInputDecrementTriggerProps
>(ArkNumberInput.DecrementTrigger, "decrementTrigger")

///////////////////////////////////////////////////////////////////////////////
/// ValueText

type NumberInputValueTextProps = Assign<
  ArkNumberInput.ValueTextProps,
  UnstyledProp
>

const NumberInputValueText = withSlot<
  HTMLSpanElement,
  NumberInputValueTextProps
>(ArkNumberInput.ValueText, "valueText")

///////////////////////////////////////////////////////////////////////////////
/// Context

type NumberInputContextProps = ArkNumberInput.ContextProps

const NumberInputContext = ArkNumberInput.Context

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  NumberInputContext,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
  NumberInputLabel,
  NumberInputRoot,
  NumberInputRootProvider,
  NumberInputScrubber,
  NumberInputValueText,
}
export type {
  NumberInputContextProps,
  NumberInputControlProps,
  NumberInputDecrementTriggerProps,
  NumberInputIncrementTriggerProps,
  NumberInputInputProps,
  NumberInputLabelProps,
  NumberInputRootProps,
  NumberInputRootProviderProps,
  NumberInputScrubberProps,
  NumberInputValueTextProps,
}
