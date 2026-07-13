import ActionComponent from "./examples/action"
import BasicComponent from "./examples/basic"
import PlacementComponent from "./examples/placement"
import TypesComponent from "./examples/types"
import UpdateComponent from "./examples/update"

export default {
  title: "Components/Toast",
}

export const Basic = {
  render: () => <BasicComponent />,
}

export const Types = {
  render: () => <TypesComponent />,
}

export const Action = {
  render: () => <ActionComponent />,
}

export const Placement = {
  render: () => <PlacementComponent />,
}

export const Update = {
  render: () => <UpdateComponent />,
}
