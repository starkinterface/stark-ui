import { QrCode } from "../"

export default function Sizes() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-12 p-6">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Small Size */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
            Small (sm)
          </span>
          <QrCode.Root defaultValue="https://stark-ui.com" size="sm">
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

        {/* Medium Size (Default) */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
            Medium (md)
          </span>
          <QrCode.Root defaultValue="https://stark-ui.com" size="md">
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

        {/* Large Size */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
            Large (lg)
          </span>
          <QrCode.Root defaultValue="https://stark-ui.com" size="lg">
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
      </div>
    </div>
  )
}
