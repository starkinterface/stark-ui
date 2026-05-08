import BasicExample from "./examples/basic"
import DisabledExample from "./examples/disabled"
import InvalidExample from "./examples/invalid"

export default {
  title: "Components/Field",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Invalid = {
  render: () => <InvalidExample />,
}

export const Disabled = {
  render: () => <DisabledExample />,
}
