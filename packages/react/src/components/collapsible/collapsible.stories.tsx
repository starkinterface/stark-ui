import BasicExample from "./examples/basic"
import DisabledExample from "./examples/disabled"
import PartialCollapseExample from "./examples/partial-collapse"

export default {
  title: "Components/Collapsible",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Disabled = {
  render: () => <DisabledExample />,
}

export const PartialCollapse = {
  render: () => <PartialCollapseExample />,
}
