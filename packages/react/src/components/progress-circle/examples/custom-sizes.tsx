import { ProgressCircle } from "../"

export default function CustomSizes() {
  return (
    <div className="flex h-dvh items-center justify-center gap-6">
      <ProgressCircle.Root
        defaultValue={40}
        className="[--size:32px] [--thickness:1px]"
      >
        <ProgressCircle.Circle>
          <ProgressCircle.CircleTrack />
          <ProgressCircle.CircleRange className="[stroke-linecap:butt]" />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>

      <ProgressCircle.Root
        defaultValue={80}
        className="[--size:64px] [--thickness:16px]"
      >
        <ProgressCircle.Circle>
          <ProgressCircle.CircleTrack />
          <ProgressCircle.CircleRange className="[stroke-linecap:butt]" />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>
    </div>
  )
}
