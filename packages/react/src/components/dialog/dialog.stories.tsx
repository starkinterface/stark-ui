import BasicExample from "./examples/basic"
import NestedExample from "./examples/nested"
import PlacementExample from "./examples/placement"
import ScrollExample from "./examples/scroll"
import SizesExample from "./examples/sizes"

export default {
  title: "Components/Dialog",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Nested = {
  render: () => <NestedExample />,
}

export const Placement = {
  render: () => <PlacementExample />,
}

export const Scroll = {
  render: () => <ScrollExample />,
}

export const Sizes = {
  render: () => <SizesExample />,
}
