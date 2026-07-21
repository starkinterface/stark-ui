import BasicExample from "./examples/basic"
import BothDirectionsExample from "./examples/both-directions"
import HorizontalExample from "./examples/horizontal"
import NestedExample from "./examples/nested"
import ScrollFadeExample from "./examples/scroll-fade"

export default {
  title: "Components/ScrollArea",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Horizontal = {
  render: () => <HorizontalExample />,
}

export const BothDirections = {
  render: () => <BothDirectionsExample />,
}

export const Nested = {
  render: () => <NestedExample />,
}

export const ScrollFade = {
  render: () => <ScrollFadeExample />,
}
