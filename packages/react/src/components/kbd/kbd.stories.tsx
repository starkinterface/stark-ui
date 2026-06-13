import BasicExample from "./examples/basic"
import ButtonIconExample from "./examples/button-icon"
import InputAddonExample from "./examples/input-addon"
import SeparatorExample from "./examples/separator"
import SpacingExample from "./examples/spacing"
import TooltipExample from "./examples/tooltip"

export default {
  title: "Components/Kbd",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Separator = {
  render: () => <SeparatorExample />,
}

export const Spacing = {
  render: () => <SpacingExample />,
}

export const ButtonIcon = {
  render: () => <ButtonIconExample />,
}

export const InputAddon = {
  render: () => <InputAddonExample />,
}

export const Tooltip = {
  render: () => <TooltipExample />,
}
