import BasicExample from "./examples/basic"
import DisabledExample from "./examples/disabled"
import InvalidExample from "./examples/invalid"
import VariantsExample from "./examples/variants"

export default {
  title: "Components/RadioGroup",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Variants = {
  render: () => <VariantsExample />,
}

export const Disabled = {
  render: () => <DisabledExample />,
}

export const Invalid = {
  render: () => <InvalidExample />,
}
