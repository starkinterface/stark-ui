import BasicExample from "./examples/basic"
import OrientationExample from "./examples/orientation"
import SpacingExample from "./examples/spacing"

export default {
  title: "Components/ButtonGroup",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Spacing = {
  render: () => <SpacingExample />,
}

export const Orientation = {
  render: () => <OrientationExample />,
}
