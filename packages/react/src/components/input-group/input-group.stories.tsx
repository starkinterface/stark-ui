import BasicExample from "./examples/basic"
import DisabledExample from "./examples/disabled"
import InputFieldExample from "./examples/input-field"
import InvalidExample from "./examples/invalid"

export default {
  title: "Components/InputGroup",
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

export const InputField = {
  render: () => <InputFieldExample />,
}
