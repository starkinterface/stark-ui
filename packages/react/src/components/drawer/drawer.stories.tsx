import BasicExample from "./examples/basic"
import GrabberIndicatorExample from "./examples/grabber-indicator"
import ModalExample from "./examples/modal"
import NoDragAreaExample from "./examples/no-drag-area"
import NonDraggableExample from "./examples/non-draggable"
import PlacementExample from "./examples/placement"
import ScrollableExample from "./examples/scrollable"
import SizesExample from "./examples/sizes"
import SnapPointsExample from "./examples/snap-points"
import SwipeAreaExample from "./examples/swipe-area"
import SwipeDirectionExample from "./examples/swipe-direction"

export default {
  title: "Components/Drawer",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const GrabberIndicator = {
  render: () => <GrabberIndicatorExample />,
}

export const Modal = {
  render: () => <ModalExample />,
}

export const NoDragArea = {
  render: () => <NoDragAreaExample />,
}

export const NonDraggable = {
  render: () => <NonDraggableExample />,
}

export const Placement = {
  render: () => <PlacementExample />,
}

export const Scrollable = {
  render: () => <ScrollableExample />,
}

export const Sizes = {
  render: () => <SizesExample />,
}

export const SnapPoints = {
  render: () => <SnapPointsExample />,
}

export const SwipeDirection = {
  render: () => <SwipeDirectionExample />,
}

export const SwipeArea = {
  render: () => <SwipeAreaExample />,
}
