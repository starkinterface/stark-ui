import BasicComponent from "./examples/basic"
import ControlledComponent from "./examples/controlled"
import PlacementComponent from "./examples/placement"
import WithArrowComponent from "./examples/with-arrow"

export default {
  title: "Components/HoverCard",
}

export const Basic = {
  render: () => <BasicComponent />,
}

export const WithArrow = {
  render: () => <WithArrowComponent />,
}

export const Placement = {
  render: () => <PlacementComponent />,
}

export const Controlled = {
  render: () => <ControlledComponent />,
}
