import { ProgressCircle } from "../"

export default function Variants() {
  return (
    <div className="flex h-dvh items-center justify-center gap-6">
      <ProgressCircle.Root variant="primary" defaultValue={75}>
        <ProgressCircle.Circle>
          <ProgressCircle.CircleTrack />
          <ProgressCircle.CircleRange />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>

      <ProgressCircle.Root variant="accent" defaultValue={75}>
        <ProgressCircle.Circle>
          <ProgressCircle.CircleTrack />
          <ProgressCircle.CircleRange />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>
    </div>
  )
}
