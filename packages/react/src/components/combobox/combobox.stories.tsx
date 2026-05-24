import BasicExample from "./examples/basic"
import DisabledExample from "./examples/disabled"
import InvalidExample from "./examples/invalid"
import MultipleExample from "./examples/multiple"

export default {
  title: "Components/Combobox",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Multiple = {
  render: () => <MultipleExample />,
}

export const Disabled = {
  render: () => <DisabledExample />,
}

export const Invalid = {
  render: () => <InvalidExample />,
}
