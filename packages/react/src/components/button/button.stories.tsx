import BasicExample from "./examples/basic"
import DisabledExample from "./examples/disabled"
import IconExample from "./examples/icon"
import LoadingExample from "./examples/loading"
import SizesExample from "./examples/sizes"
import VariantsExample from "./examples/variants"
import WithIconExample from "./examples/with-icon"

export default {
  title: "Components/Button",
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

export const Disabled = {
  render: () => <DisabledExample />,
}

export const Loading = {
  render: () => <LoadingExample />,
}

export const Icon = {
  render: () => <IconExample />,
}

export const WithIcon = {
  render: () => <WithIconExample />,
}
