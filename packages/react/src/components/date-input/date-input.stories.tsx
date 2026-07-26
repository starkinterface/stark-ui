import BasicExample from "./examples/basic"
import DisabledExample from "./examples/disabled"
import InvalidExample from "./examples/invalid"
import RangeExample from "./examples/range"
import WithDatePickerExample from "./examples/with-date-picker"
import WithTimeExample from "./examples/with-time"

export default {
  title: "Components/DateInput",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Range = {
  render: () => <RangeExample />,
}

export const WithTime = {
  render: () => <WithTimeExample />,
}

export const WithDatePicker = {
  render: () => <WithDatePickerExample />,
}

export const Disabled = {
  render: () => <DisabledExample />,
}

export const Invalid = {
  render: () => <InvalidExample />,
}
