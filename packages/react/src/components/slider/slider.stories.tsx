import BasicExample from "./examples/basic"
import DraggingIndicatorExample from "./examples/dragging-indicator"
import MarksExample from "./examples/marks"
import OrientationExample from "./examples/orientation"
import RangeExample from "./examples/range"

export default {
  title: "Components/Slider",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const DraggingIndicator = {
  render: () => <DraggingIndicatorExample />,
}

export const Orientation = {
  render: () => <OrientationExample />,
}

export const Marks = {
  render: () => <MarksExample />,
}

export const Range = {
  render: () => <RangeExample />,
}
