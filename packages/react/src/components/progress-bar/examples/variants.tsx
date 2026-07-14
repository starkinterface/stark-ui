import { ProgressBar } from "../../"

export default function Variants() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-6 w-full max-w-md mx-auto">
      <div className="w-48">
        <ProgressBar.Root defaultValue={64} variant="primary">
          <div className="flex justify-between gap-2">
            <ProgressBar.Label>Primary (default)</ProgressBar.Label>
            <ProgressBar.ValueText />
          </div>
          <ProgressBar.Track>
            <ProgressBar.Range />
          </ProgressBar.Track>
        </ProgressBar.Root>
      </div>

      <div className="w-48">
        <ProgressBar.Root defaultValue={72} variant="accent">
          <div className="flex justify-between gap-2">
            <ProgressBar.Label>Accent</ProgressBar.Label>
            <ProgressBar.ValueText />
          </div>
          <ProgressBar.Track>
            <ProgressBar.Range />
          </ProgressBar.Track>
        </ProgressBar.Root>
      </div>
    </div>
  )
}
