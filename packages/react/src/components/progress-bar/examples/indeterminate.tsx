import { ProgressBar } from "../../"

export default function Indeterminate() {
  return (
    <div className="flex h-dvh items-center justify-center gap-12 w-full max-w-2xl mx-auto">
      <div className="w-48">
        <ProgressBar.Root value={null} orientation="horizontal">
          <div className="flex justify-between gap-2">
            <ProgressBar.Label>Syncing records...</ProgressBar.Label>
            <ProgressBar.ValueText />
          </div>
          <ProgressBar.Track>
            <ProgressBar.Range />
          </ProgressBar.Track>
        </ProgressBar.Root>
      </div>

      <div className="h-48">
        <ProgressBar.Root value={null} orientation="vertical">
          <ProgressBar.Label>Sync</ProgressBar.Label>
          <ProgressBar.Track>
            <ProgressBar.Range />
          </ProgressBar.Track>
          <ProgressBar.ValueText />
        </ProgressBar.Root>
      </div>
    </div>
  )
}
