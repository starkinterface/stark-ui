import BasicExample from "./examples/basic"
import DisabledExample from "./examples/disabled"
import InvalidExample from "./examples/invalid"

export default {
  title: "Components/PinInput",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Disabled = {
  render: () => <DisabledExample />,
}

export const Invalid = {
  render: () => <InvalidExample />,
}
