import AdvancedComponent from "./examples/advanced"
import BasicComponent from "./examples/basic"
import CheckboxItemsComponent from "./examples/checkbox-items"
import ContextComponent from "./examples/context"
import GroupComponent from "./examples/group"
import NestedComponent from "./examples/nested"
import RadioItemsComponent from "./examples/radio-items"

export default {
  title: "Components/Menu",
}

export const Basic = {
  render: () => <BasicComponent />,
}

export const Context = {
  render: () => <ContextComponent />,
}

export const Group = {
  render: () => <GroupComponent />,
}

export const Nested = {
  render: () => <NestedComponent />,
}

export const CheckboxItems = {
  render: () => <CheckboxItemsComponent />,
}

export const RadioItems = {
  render: () => <RadioItemsComponent />,
}

export const Advanced = {
  render: () => <AdvancedComponent />,
}
