import { switchClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Switch as ArkSwitch } from "@ark-ui/react/switch"

import type { SwitchVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(switchClasses, {
  name: "Switch",
})

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type SwitchRootProviderBaseProps = Assign<
  ArkSwitch.RootProviderBaseProps,
  SwitchVariantProps
> &
  UnstyledProp

type SwitchRootProviderProps = Assign<
  ArkSwitch.RootProviderProps,
  SwitchRootProviderBaseProps
>

const SwitchRootProvider = withProviderSlot<
  HTMLLabelElement,
  SwitchRootProviderProps
>(ArkSwitch.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Root

type SwitchRootBaseProps = Assign<ArkSwitch.RootBaseProps, SwitchVariantProps> &
  UnstyledProp

type SwitchRootProps = Assign<ArkSwitch.RootProps, SwitchRootBaseProps>

const SwitchRoot = withProviderSlot<HTMLLabelElement, SwitchRootProps>(
  ArkSwitch.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Control

type SwitchControlProps = Assign<ArkSwitch.ControlProps, UnstyledProp>

const SwitchControl = withSlot<HTMLSpanElement, SwitchControlProps>(
  ArkSwitch.Control,
  "control"
)

///////////////////////////////////////////////////////////////////////////////
/// HiddenInput

type SwitchHiddenInputProps = Assign<ArkSwitch.HiddenInputProps, UnstyledProp>

const SwitchHiddenInput = withSlot<HTMLInputElement, SwitchHiddenInputProps>(
  ArkSwitch.HiddenInput,
  "hiddenInput"
)

///////////////////////////////////////////////////////////////////////////////
/// Label

type SwitchLabelProps = Assign<ArkSwitch.LabelProps, UnstyledProp>

const SwitchLabel = withSlot<HTMLSpanElement, SwitchLabelProps>(
  ArkSwitch.Label,
  "label"
)

///////////////////////////////////////////////////////////////////////////////
/// Thumb

type SwitchThumbProps = Assign<ArkSwitch.ThumbProps, UnstyledProp>

const SwitchThumb = withSlot<HTMLSpanElement, SwitchThumbProps>(
  ArkSwitch.Thumb,
  "thumb"
)

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  SwitchRoot,
  SwitchRootProvider,
  SwitchControl,
  SwitchHiddenInput,
  SwitchLabel,
  SwitchThumb,
}
export type {
  SwitchRootProps,
  SwitchRootProviderProps,
  SwitchControlProps,
  SwitchHiddenInputProps,
  SwitchLabelProps,
  SwitchThumbProps,
}
