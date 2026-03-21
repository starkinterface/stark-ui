import { switchClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Switch as ArkSwitch } from "@ark-ui/react/switch"

import type { ComponentProps } from "react"

const { withProviderSlot, withSlot } = createStyleContext(switchClasses, {
  name: "Switch",
})

const SwitchRoot = withProviderSlot(ArkSwitch.Root, "root")
const SwitchRootProvider = withProviderSlot(ArkSwitch.RootProvider, "root")
const SwitchControl = withSlot(ArkSwitch.Control, "control")
const SwitchHiddenInput = withSlot(ArkSwitch.HiddenInput, "hiddenInput")
const SwitchLabel = withSlot(ArkSwitch.Label, "label")
const SwitchThumb = withSlot(ArkSwitch.Thumb, "thumb")

type SwitchProps = ComponentProps<typeof SwitchRoot>
type SwitchRootProviderProps = ComponentProps<typeof SwitchRootProvider>
type SwitchControlProps = ComponentProps<typeof SwitchControl>
type SwitchHiddenInputProps = ComponentProps<typeof SwitchHiddenInput>
type SwitchLabelProps = ComponentProps<typeof SwitchLabel>
type SwitchThumbProps = ComponentProps<typeof SwitchThumb>

export {
  SwitchRoot,
  SwitchRootProvider,
  SwitchControl,
  SwitchHiddenInput,
  SwitchLabel,
  SwitchThumb,
}
export type {
  SwitchProps,
  SwitchRootProviderProps,
  SwitchControlProps,
  SwitchHiddenInputProps,
  SwitchLabelProps,
  SwitchThumbProps,
}
