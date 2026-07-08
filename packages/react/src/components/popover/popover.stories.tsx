import AnchorExample from "./examples/anchor"
import ArrowExample from "./examples/arrow"
import BasicExample from "./examples/basic"
import NestedExample from "./examples/nested"
import PlacementExample from "./examples/placement"
import SameWidthExample from "./examples/same-width"
import WithDialogExample from "./examples/with-dialog"

export default {
  title: "Components/Popover",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Anchor = {
  render: () => <AnchorExample />,
}

export const Arrow = {
  render: () => <ArrowExample />,
}

export const Nested = {
  render: () => <NestedExample />,
}

export const Placement = {
  render: () => <PlacementExample />,
}

export const SameWidth = {
  render: () => <SameWidthExample />,
}

export const WithDialog = {
  render: () => <WithDialogExample />,
}
