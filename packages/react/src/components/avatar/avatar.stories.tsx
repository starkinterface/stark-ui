import BasicExample from "./examples/basic"
import FallbackExample from "./examples/fallback"
import IndicatorExample from "./examples/indicator"
import IndicatorIconExample from "./examples/indicator-icon"
import RingExample from "./examples/ring"
import ShapesExample from "./examples/shapes"
import SizesExample from "./examples/sizes"

export default {
  title: "Components/Avatar",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Fallback = {
  render: () => <FallbackExample />,
}

export const Shapes = {
  render: () => <ShapesExample />,
}

export const Sizes = {
  render: () => <SizesExample />,
}

export const Indicator = {
  render: () => <IndicatorExample />,
}

export const IndicatorIcon = {
  render: () => <IndicatorIconExample />,
}

export const Ring = {
  render: () => <RingExample />,
}
