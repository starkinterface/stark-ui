import AddonExample from "./examples/addon"
import BasicExample from "./examples/basic"
import DisabledExample from "./examples/disabled"
import HorizontalExample from "./examples/horizontal"
import InteractiveExample from "./examples/interactive"
import MultipleExample from "./examples/multiple"
import SubtitleExample from "./examples/subtitle"

export default {
  title: "Components/Accordion",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Disabled = {
  render: () => <DisabledExample />,
}

export const Subtitle = {
  render: () => <SubtitleExample />,
}

export const Addon = {
  render: () => <AddonExample />,
}

export const Interactive = {
  render: () => <InteractiveExample />,
}

export const Horizontal = {
  render: () => <HorizontalExample />,
}

export const Multiple = {
  render: () => <MultipleExample />,
}
