import ArrowExample from "./examples/arrow"
import BasicExample from "./examples/basic"
import PositioningExample from "./examples/positioning"

export default {
  title: "Components/Tooltip",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Arrow = {
  render: () => <ArrowExample />,
}

export const Positioning = {
  render: () => <PositioningExample />,
}
