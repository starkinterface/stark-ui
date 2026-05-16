import BasicExample from "./examples/basic"
import DisabledExample from "./examples/disabled"
import InvalidExample from "./examples/invalid"
import TextareaExample from "./examples/textarea"

export default {
  title: "Components/InputGroup",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Textarea = {
  render: () => <TextareaExample />,
}

export const Invalid = {
  render: () => <InvalidExample />,
}

export const Disabled = {
  render: () => <DisabledExample />,
}
