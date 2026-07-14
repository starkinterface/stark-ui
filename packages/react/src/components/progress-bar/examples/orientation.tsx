import { ProgressBar } from "../../"

export default function Orientation() {
  return (
    <div className="flex h-dvh items-center justify-center gap-12 w-full max-w-2xl mx-auto">
      <div className="w-48">
        <ProgressBar.Root defaultValue={34} orientation="horizontal">
          <div className="flex justify-between gap-2">
            <ProgressBar.Label>Horizontal track</ProgressBar.Label>
            <ProgressBar.ValueText />
          </div>
          <ProgressBar.Track>
            <ProgressBar.Range />
          </ProgressBar.Track>
        </ProgressBar.Root>
      </div>

      <div className="h-48">
        <ProgressBar.Root defaultValue={48} orientation="vertical">
          <ProgressBar.Label>Vertical</ProgressBar.Label>
          <ProgressBar.Track>
            <ProgressBar.Range />
          </ProgressBar.Track>
          <ProgressBar.ValueText />
        </ProgressBar.Root>
      </div>
    </div>
  )
}
