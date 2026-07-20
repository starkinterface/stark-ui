import { QrCode } from "../"

export default function Basic() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <QrCode.Root defaultValue="https://stark-ui.com">
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>
    </div>
  )
}
