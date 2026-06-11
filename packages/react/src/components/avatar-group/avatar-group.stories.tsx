import BasicExample from "./examples/basic"
import RingExample from "./examples/ring"
import StackingExample from "./examples/stacking"

export default {
  title: "Components/AvatarGroup",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Stacking = {
  render: () => <StackingExample />,
}

export const Ring = {
  render: () => <RingExample />,
}
