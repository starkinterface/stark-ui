import { attrValue } from "../../utils"
import { numberInputClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { ark } from "@ark-ui/react/factory"
import {
  NumberInput as ArkNumberInput,
  useNumberInputContext,
} from "@ark-ui/react/number-input"

import type { NumberInputVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"
import type { ComponentProps, ComponentPropsWithRef } from "react"

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
/// Addon

type NumberInputAddonProps = Assign<ComponentPropsWithRef<"div">, UnstyledProp>

const NumberInputAddon = withSlot<HTMLDivElement, NumberInputAddonProps>(
  "div",
  "addon"
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
/// Icon

type NumberInputIconProps = Assign<ComponentProps<typeof ark.div>, UnstyledProp>

const NumberInputIcon = withSlot<HTMLDivElement, NumberInputIconProps>(
  (props: NumberInputIconProps) => {
    const numberInput = useNumberInputContext()
    const rootProps = numberInput.getRootProps()
    const isDisabled =
      "data-disabled" in rootProps && rootProps["data-disabled"] !== undefined

    return (
      <ark.div
        data-input-group-icon
        data-disabled={attrValue(isDisabled)}
        {...props}
      />
    )
  },
  "icon"
)

///////////////////////////////////////////////////////////////////////////////
/// Text

type NumberInputTextProps = Assign<
  ComponentProps<typeof ark.span>,
  UnstyledProp
>

const NumberInputText = withSlot<HTMLSpanElement, NumberInputTextProps>(
  (props: NumberInputTextProps) => {
    const numberInput = useNumberInputContext()
    const rootProps = numberInput.getRootProps()
    const isDisabled =
      "data-disabled" in rootProps && rootProps["data-disabled"] !== undefined

    return (
      <ark.span
        data-input-group-text
        data-disabled={attrValue(isDisabled)}
        aria-disabled={isDisabled}
        {...props}
      />
    )
  },
  "text"
)

///////////////////////////////////////////////////////////////////////////////
/// Context

type NumberInputContextProps = ArkNumberInput.ContextProps

const NumberInputContext = ArkNumberInput.Context

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  NumberInputContext,
  NumberInputControl,
  NumberInputAddon,
  NumberInputIcon,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
  NumberInputLabel,
  NumberInputRoot,
  NumberInputRootProvider,
  NumberInputScrubber,
  NumberInputValueText,
  NumberInputText,
}
export type {
  NumberInputContextProps,
  NumberInputControlProps,
  NumberInputAddonProps,
  NumberInputDecrementTriggerProps,
  NumberInputIncrementTriggerProps,
  NumberInputInputProps,
  NumberInputIconProps,
  NumberInputLabelProps,
  NumberInputRootProps,
  NumberInputRootProviderProps,
  NumberInputScrubberProps,
  NumberInputValueTextProps,
  NumberInputTextProps,
}
