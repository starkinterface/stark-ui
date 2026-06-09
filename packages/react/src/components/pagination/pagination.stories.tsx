import BasicExample from "./examples/basic"
import CustomTriggerExample from "./examples/custom-trigger"
import LinkExample from "./examples/link"

export default {
  title: "Components/Pagination",
}

export const Basic = {
  render: () => <BasicExample />,
}

export const Link = {
  render: () => <LinkExample />,
}

export const CustomTrigger = {
  render: () => <CustomTriggerExample />,
}
