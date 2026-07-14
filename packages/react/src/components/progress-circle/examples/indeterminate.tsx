import { ProgressCircle } from "../"

export default function Indeterminate() {
  return (
    <div className="flex h-dvh items-center justify-center gap-6">
      <ProgressCircle.Root value={null}>
        <ProgressCircle.Circle>
          <ProgressCircle.CircleTrack />
          <ProgressCircle.CircleRange />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>
    </div>
  )
}
