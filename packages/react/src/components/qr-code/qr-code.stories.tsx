import BasicComponent from "./examples/basic"
import DownloadComponent from "./examples/download"
import OverlayComponent from "./examples/overlay"
import SizesComponent from "./examples/sizes"

export default {
  title: "Components/QrCode",
}

export const Basic = {
  render: () => <BasicComponent />,
}

export const Overlay = {
  render: () => <OverlayComponent />,
}

export const Download = {
  render: () => <DownloadComponent />,
}

export const Sizes = {
  render: () => <SizesComponent />,
}
