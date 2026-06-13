import BasicExample from "./examples/basic"
import ButtonIconExample from "./examples/button-icon"
import InputAddonExample from "./examples/input-addon"
import SizesExample from "./examples/sizes"
import TooltipExample from "./examples/tooltip"

export default {
  title: "Components/Kbd",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Sizes = {
  render: () => <SizesExample />,
}

export const InputAddon = {
  render: () => <InputAddonExample />,
}

export const ButtonIcon = {
  render: () => <ButtonIconExample />,
}

export const Tooltip = {
  render: () => <TooltipExample />,
}
