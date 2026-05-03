import BasicExample from "./examples/basic"
import DisabledExample from "./examples/disabled"
import IconExample from "./examples/icon"
import SizesExample from "./examples/sizes"
import VariantActiveExample from "./examples/variant-active"
import VariantsExample from "./examples/variants"
import WithIconExample from "./examples/with-icon"

export default {
  title: "Components/Toggle",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Sizes = {
  render: () => <SizesExample />,
}

export const Variants = {
  render: () => <VariantsExample />,
}

export const VariantActive = {
  render: () => <VariantActiveExample />,
}

export const Disabled = {
  render: () => <DisabledExample />,
}

export const Icon = {
  render: () => <IconExample />,
}

export const WithIcon = {
  render: () => <WithIconExample />,
}
