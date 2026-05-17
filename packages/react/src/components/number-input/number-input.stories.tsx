import BasicExample from "./examples/basic"
import DisabledExample from "./examples/disabled"
import FormattingExample from "./examples/formatting"
import InvalidExample from "./examples/invalid"

export default {
  title: "Components/NumberInput",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Formatting = {
  render: () => <FormattingExample />,
}

export const Disabled = {
  render: () => <DisabledExample />,
}

export const Invalid = {
  render: () => <InvalidExample />,
}
