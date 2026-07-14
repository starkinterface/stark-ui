import BasicComponent from "./examples/basic"
import WithInputComponent from "./examples/with-input"
import WithInputGroupComponent from "./examples/with-input-group"

export default {
  title: "Components/Clipboard",
}

export const Basic = {
  render: () => <BasicComponent />,
}

export const WithInput = {
  render: () => <WithInputComponent />,
}

export const WithInputGroup = {
  render: () => <WithInputGroupComponent />,
}
