import BasicExample from "./examples/basic"
import ControlledExample from "./examples/controlled"
import CustomSizesExample from "./examples/custom-sizes"
import IconExample from "./examples/icon"
import IndeterminateExample from "./examples/indeterminate"
import SizesExample from "./examples/sizes"
import VariantsExample from "./examples/variants"

export default {
  title: "Components/ProgressCircle",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Controlled = {
  render: () => <ControlledExample />,
}

export const Variants = {
  render: () => <VariantsExample />,
}

export const Icon = {
  render: () => <IconExample />,
}

export const Indeterminate = {
  render: () => <IndeterminateExample />,
}

export const Sizes = {
  render: () => <SizesExample />,
}

export const CustomSizes = {
  render: () => <CustomSizesExample />,
}
