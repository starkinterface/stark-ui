import BasicComponent from "./examples/basic"
import ControlledComponent from "./examples/controlled"
import CustomSizesComponent from "./examples/custom-sizes"
import IndeterminateComponent from "./examples/indeterminate"
import OrientationComponent from "./examples/orientation"
import VariantsComponent from "./examples/variants"

export default {
  title: "Components/ProgressBar",
}

export const Basic = {
  render: () => <BasicComponent />,
}

export const Controlled = {
  render: () => <ControlledComponent />,
}

export const Orientation = {
  render: () => <OrientationComponent />,
}

export const Indeterminate = {
  render: () => <IndeterminateComponent />,
}

export const CustomSizes = {
  render: () => <CustomSizesComponent />,
}

export const Variants = {
  render: () => <VariantsComponent />,
}
