import BasicExample from "./examples/basic"
import DisabledExample from "./examples/disabled"
import FormattingExample from "./examples/formatting"
import InvalidExample from "./examples/invalid"
import ScrubberExample from "./examples/scrubber"

export default {
  title: "Components/NumberInput",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Scrubber = {
  render: () => <ScrubberExample />,
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
