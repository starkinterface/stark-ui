import BasicExample from "./examples/basic"
import DisabledExample from "./examples/disabled"
import FileExample from "./examples/file"
import InvalidExample from "./examples/invalid"

export default {
  title: "Components/Input",
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

export const File = {
  render: () => <FileExample />,
}
