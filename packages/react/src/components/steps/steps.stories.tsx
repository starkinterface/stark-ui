import BasicComponent from "./examples/basic"
import DescriptionComponent from "./examples/description"
import IconComponent from "./examples/icon"
import VariantsComponent from "./examples/variants"
import VerticalComponent from "./examples/vertical"

export default {
  title: "Components/Steps",
}

export const Basic = {
  render: () => <BasicComponent />,
}

export const Icon = {
  render: () => <IconComponent />,
}

export const Description = {
  render: () => <DescriptionComponent />,
}

export const Vertical = {
  render: () => <VerticalComponent />,
}

export const Variants = {
  render: () => <VariantsComponent />,
}
