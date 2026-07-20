import { QrCode } from "../"

export default function Overlay() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <QrCode.Root defaultValue="https://stark-ui.com" encoding={{ ecc: "H" }}>
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
        <QrCode.Overlay>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            fill="none"
            className="text-background-accent"
          >
            <path
              d="M128 128H64V64H0L2.23438 66.2314L61.8291 125.828L64 128H0V0H128V128ZM64 64H128L125.766 61.7686L66.1709 2.17188L64 0V64Z"
              fill="currentColor"
            />
          </svg>
        </QrCode.Overlay>
      </QrCode.Root>
    </div>
  )
}
