import BasicExample from "./examples/basic"
import DisabledExample from "./examples/disabled"
import GroupsExample from "./examples/groups"

export default {
  title: "Components/Select",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Disabled = {
  render: () => <DisabledExample />,
}

export const Groups = {
  render: () => <GroupsExample />,
}
