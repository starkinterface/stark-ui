import { attrValue } from "../../utils"
import { passwordInputClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { PasswordInput as ArkPasswordInput } from "@ark-ui/react/password-input"

import type { PasswordInputVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"
import type { ComponentPropsWithRef } from "react"

const { withProviderSlot, withSlot } = createStyleContext(
  passwordInputClasses,
  {
    name: "PasswordInput",
  }
)

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type PasswordInputRootProviderProps = Assign<
  ArkPasswordInput.RootProviderProps,
  PasswordInputVariantProps & UnstyledProp
>

const PasswordInputRootProvider = withProviderSlot<
  HTMLDivElement,
  PasswordInputRootProviderProps
>(ArkPasswordInput.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Root

type PasswordInputRootProps = Assign<
  ArkPasswordInput.RootProps,
  PasswordInputVariantProps & UnstyledProp
>

const PasswordInputRoot = withProviderSlot<
  HTMLDivElement,
  PasswordInputRootProps
>(ArkPasswordInput.Root, "root")

///////////////////////////////////////////////////////////////////////////////
/// Label

type PasswordInputLabelProps = Assign<ArkPasswordInput.LabelProps, UnstyledProp>

const PasswordInputLabel = withSlot<HTMLLabelElement, PasswordInputLabelProps>(
  ArkPasswordInput.Label,
  "label"
)

///////////////////////////////////////////////////////////////////////////////
/// Control

type PasswordInputControlProps = Assign<
  ArkPasswordInput.ControlProps,
  UnstyledProp
>

const PasswordInputControl = withSlot<
  HTMLDivElement,
  PasswordInputControlProps
>(ArkPasswordInput.Control, "control")

///////////////////////////////////////////////////////////////////////////////
/// Input

type PasswordInputInputProps = Assign<ArkPasswordInput.InputProps, UnstyledProp>

const PasswordInputInput = withSlot<HTMLInputElement, PasswordInputInputProps>(
  ArkPasswordInput.Input,
  "input"
)

///////////////////////////////////////////////////////////////////////////////
/// Addon

type PasswordInputAddonProps = Assign<
  ComponentPropsWithRef<"div">,
  UnstyledProp
>

const PasswordInputAddon = withSlot<HTMLDivElement, PasswordInputAddonProps>(
  "div",
  "addon"
)

///////////////////////////////////////////////////////////////////////////////
/// VisibilityTrigger

type PasswordInputVisibilityTriggerProps = Assign<
  ArkPasswordInput.VisibilityTriggerProps,
  UnstyledProp
>

const PasswordInputVisibilityTrigger = withSlot<
  HTMLButtonElement,
  PasswordInputVisibilityTriggerProps
>(ArkPasswordInput.VisibilityTrigger, "visibilityTrigger", {
  defaultProps: {
    "data-button": attrValue(true),
  } as Partial<PasswordInputVisibilityTriggerProps>,
})

///////////////////////////////////////////////////////////////////////////////
/// Indicator

type PasswordInputIndicatorProps = Assign<
  ArkPasswordInput.IndicatorProps,
  UnstyledProp
>

const PasswordInputIndicator = withSlot<
  HTMLSpanElement,
  PasswordInputIndicatorProps
>(ArkPasswordInput.Indicator, "indicator")

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  PasswordInputRoot,
  PasswordInputRootProvider,
  PasswordInputLabel,
  PasswordInputControl,
  PasswordInputInput,
  PasswordInputAddon,
  PasswordInputVisibilityTrigger,
  PasswordInputIndicator,
}

export type {
  PasswordInputRootProps,
  PasswordInputRootProviderProps,
  PasswordInputLabelProps,
  PasswordInputControlProps,
  PasswordInputInputProps,
  PasswordInputAddonProps,
  PasswordInputVisibilityTriggerProps,
  PasswordInputIndicatorProps,
}
