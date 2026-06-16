import BasicExample from "./examples/basic"
import DisabledExample from "./examples/disabled"
import IconExample from "./examples/icon"
import VerticalExample from "./examples/vertical"

export default {
  title: "Components/Tabs",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Icon = {
  render: () => <IconExample />,
}

export const Vertical = {
  render: () => <VerticalExample />,
}

export const Disabled = {
  render: () => <DisabledExample />,
}
