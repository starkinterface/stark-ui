import { ProgressBar } from "../../"

export default function Basic() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-xs mx-auto">
      <ProgressBar.Root defaultValue={23}>
        <div className="flex justify-between gap-2">
          <ProgressBar.Label>Storage capacity</ProgressBar.Label>
          <ProgressBar.ValueText />
        </div>
        <ProgressBar.Track>
          <ProgressBar.Range />
        </ProgressBar.Track>
      </ProgressBar.Root>
    </div>
  )
}
