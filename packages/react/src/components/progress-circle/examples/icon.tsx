import { ProgressCircle } from "../"
import { ZapIcon } from "lucide-react"

export default function Icon() {
  return (
    <div className="flex h-dvh items-center justify-center gap-6">
      <ProgressCircle.Root defaultValue={80}>
        <ProgressCircle.Circle>
          <ProgressCircle.CircleTrack />
          <ProgressCircle.CircleRange />
        </ProgressCircle.Circle>
        <ProgressCircle.Icon>
          <ZapIcon />
        </ProgressCircle.Icon>
      </ProgressCircle.Root>
    </div>
  )
}
