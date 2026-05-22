import BasicExample from "./examples/basic"
import DisabledExample from "./examples/disabled"
import IndeterminateExample from "./examples/indeterminate"
import InvalidExample from "./examples/invalid"
import VariantsExample from "./examples/variants"

export default {
  title: "Components/Checkbox",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Variants = {
  render: () => <VariantsExample />,
}

export const Indeterminate = {
  render: () => <IndeterminateExample />,
}

export const Disabled = {
  render: () => <DisabledExample />,
}

export const Invalid = {
  render: () => <InvalidExample />,
}
