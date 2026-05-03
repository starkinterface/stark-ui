import BasicExample from "./examples/basic"
import CompactExample from "./examples/compact"
import DisabledExample from "./examples/disabled"
import OrientationExample from "./examples/orientation"

export default {
  title: "Components/ToggleGroup",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Orientation = {
  render: () => <OrientationExample />,
}

export const Compact = {
  render: () => <CompactExample />,
}

export const Disabled = {
  render: () => <DisabledExample />,
}
