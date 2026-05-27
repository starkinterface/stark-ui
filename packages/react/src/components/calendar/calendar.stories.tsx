import BasicExample from "./examples/basic"
import FullYearExample from "./examples/full-year"
import MultipleExample from "./examples/multiple"

export default {
  title: "Components/Calendar",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Multiple = {
  render: () => <MultipleExample />,
}

export const FullYear = {
  render: () => <FullYearExample />,
}
