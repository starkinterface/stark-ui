import BasicExample from "./examples/basic"
import DisabledExample from "./examples/disabled"
import InvalidExample from "./examples/invalid"
import WithComboboxExample from "./examples/with-combobox"

export default {
  title: "Components/TagsInput",
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

export const WithCombobox = {
  render: () => <WithComboboxExample />,
}
