import { ProgressBar } from "../.."

export default function CustomSizes() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-6 w-full max-w-2xl mx-auto">
      <div className="w-48">
        <ProgressBar.Root defaultValue={64} className="[--size:1px]">
          <div className="flex justify-between gap-2">
            <ProgressBar.Label>1px</ProgressBar.Label>
            <ProgressBar.ValueText />
          </div>
          <ProgressBar.Track>
            <ProgressBar.Range />
          </ProgressBar.Track>
        </ProgressBar.Root>
      </div>

      <div className="w-48">
        <ProgressBar.Root defaultValue={77} className="[--size:--spacing(0.5)]">
          <div className="flex justify-between gap-2">
            <ProgressBar.Label>2px</ProgressBar.Label>
            <ProgressBar.ValueText />
          </div>
          <ProgressBar.Track>
            <ProgressBar.Range />
          </ProgressBar.Track>
        </ProgressBar.Root>
      </div>

      <div className="w-48">
        <ProgressBar.Root defaultValue={58}>
          <div className="flex justify-between gap-2">
            <ProgressBar.Label>Default</ProgressBar.Label>
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
