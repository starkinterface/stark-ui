import AnimationExample from "./examples/animation"
import BasicExample from "./examples/basic"
import WithToggleExample from "./examples/with-toggle"

export default {
  title: "Components/Swap",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Animation = {
  render: () => <AnimationExample />,
}

export const WithToggle = {
  render: () => <WithToggleExample />,
}
