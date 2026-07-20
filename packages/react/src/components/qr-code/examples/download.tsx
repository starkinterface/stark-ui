import { QrCode } from "../"
import { Button } from "../../button"

export default function Download() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-4">
      <QrCode.Root id="stark-qr" defaultValue="https://stark-ui.com">
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
        <QrCode.DownloadTrigger
          fileName="stark-qr.png"
          mimeType="image/png"
          asChild
        >
          <Button variant="secondary">Download PNG</Button>
        </QrCode.DownloadTrigger>
      </QrCode.Root>
    </div>
  )
}
