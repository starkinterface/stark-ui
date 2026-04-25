import BasicExample from "./examples/basic"
import DisabledExample from "./examples/disabled"
import SizesExample from "./examples/sizes"
import VariantsExample from "./examples/variants"

export default {
  title: "Components/Switch",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Disabled = {
  render: () => <DisabledExample />,
}

export const Variants = {
  render: () => <VariantsExample />,
}

export const Sizes = {
  render: () => <SizesExample />,
}
