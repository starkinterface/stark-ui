import BasicComponent from "./examples/basic"
import RangeComponent from "./examples/range"
import WithClearComponent from "./examples/with-clear"
import WithInputGroupComponent from "./examples/with-input-group"
import WithPresetsComponent from "./examples/with-presets"

export default {
  title: "Components/DatePicker",
}

export const Basic = {
  render: () => <BasicComponent />,
}

export const Range = {
  render: () => <RangeComponent />,
}

export const WithClear = {
  render: () => <WithClearComponent />,
}

export const WithInputGroup = {
  render: () => <WithInputGroupComponent />,
}

export const WithPresets = {
  render: () => <WithPresetsComponent />,
}
