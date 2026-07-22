import BasicExample from "./examples/basic"
import DisabledExample from "./examples/disabled"
import InvalidExample from "./examples/invalid"
import WithCheckboxExample from "./examples/with-checkbox"
import WithInfoExample from "./examples/with-info"
import WithInputExample from "./examples/with-input"
import WithRadioExample from "./examples/with-radio"
import WithSelectExample from "./examples/with-select"
import WithSliderExample from "./examples/with-slider"
import WithSwitchExample from "./examples/with-switch"
import WithTextareaExample from "./examples/with-textarea"

export default {
  title: "Components/Fieldset",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const WithInfo = {
  render: () => <WithInfoExample />,
}

export const WithInput = {
  render: () => <WithInputExample />,
}

export const WithTextarea = {
  render: () => <WithTextareaExample />,
}

export const WithSelect = {
  render: () => <WithSelectExample />,
}

export const WithSlider = {
  render: () => <WithSliderExample />,
}

export const WithCheckbox = {
  render: () => <WithCheckboxExample />,
}

export const WithRadio = {
  render: () => <WithRadioExample />,
}

export const WithSwitch = {
  render: () => <WithSwitchExample />,
}

export const Invalid = {
  render: () => <InvalidExample />,
}

export const Disabled = {
  render: () => <DisabledExample />,
}
