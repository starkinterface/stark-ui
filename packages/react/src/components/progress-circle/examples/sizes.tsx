import { ProgressCircle } from "../"
import { ZapIcon } from "lucide-react"

export default function Sizes() {
  return (
    <div className="flex h-dvh items-center justify-center gap-6">
      <div className="flex flex-col gap-12">
        <div className="flex gap-6">
          <ProgressCircle.Root size="xs" defaultValue={60}>
            <ProgressCircle.Circle>
              <ProgressCircle.CircleTrack />
              <ProgressCircle.CircleRange />
            </ProgressCircle.Circle>
            <ProgressCircle.ValueText>
              <ProgressCircle.Context>
                {(context) => context.value}
              </ProgressCircle.Context>
            </ProgressCircle.ValueText>
          </ProgressCircle.Root>

          <ProgressCircle.Root size="sm" defaultValue={60}>
            <ProgressCircle.Circle>
              <ProgressCircle.CircleTrack />
              <ProgressCircle.CircleRange />
            </ProgressCircle.Circle>
            <ProgressCircle.ValueText>
              <ProgressCircle.Context>
                {(context) => context.value}
              </ProgressCircle.Context>
            </ProgressCircle.ValueText>
          </ProgressCircle.Root>

          <ProgressCircle.Root size="md" defaultValue={60}>
            <ProgressCircle.Circle>
              <ProgressCircle.CircleTrack />
              <ProgressCircle.CircleRange />
            </ProgressCircle.Circle>
            <ProgressCircle.ValueText>
              <ProgressCircle.Context>
                {(context) => context.value}
              </ProgressCircle.Context>
            </ProgressCircle.ValueText>
          </ProgressCircle.Root>

          <ProgressCircle.Root size="lg" defaultValue={60}>
            <ProgressCircle.Circle>
              <ProgressCircle.CircleTrack />
              <ProgressCircle.CircleRange />
            </ProgressCircle.Circle>
            <ProgressCircle.ValueText>
              <ProgressCircle.Context>
                {(context) => context.value}
              </ProgressCircle.Context>
            </ProgressCircle.ValueText>
          </ProgressCircle.Root>
        </div>

        <div className="flex gap-6">
          <ProgressCircle.Root size="xs" defaultValue={60}>
            <ProgressCircle.Circle>
              <ProgressCircle.CircleTrack />
              <ProgressCircle.CircleRange />
            </ProgressCircle.Circle>
            <ProgressCircle.Icon>
              <ZapIcon />
            </ProgressCircle.Icon>
          </ProgressCircle.Root>

          <ProgressCircle.Root size="sm" defaultValue={60}>
            <ProgressCircle.Circle>
              <ProgressCircle.CircleTrack />
              <ProgressCircle.CircleRange />
            </ProgressCircle.Circle>
            <ProgressCircle.Icon>
              <ZapIcon />
            </ProgressCircle.Icon>
          </ProgressCircle.Root>

          <ProgressCircle.Root size="md" defaultValue={60}>
            <ProgressCircle.Circle>
              <ProgressCircle.CircleTrack />
              <ProgressCircle.CircleRange />
            </ProgressCircle.Circle>
            <ProgressCircle.Icon>
              <ZapIcon />
            </ProgressCircle.Icon>
          </ProgressCircle.Root>

          <ProgressCircle.Root size="lg" defaultValue={60}>
            <ProgressCircle.Circle>
              <ProgressCircle.CircleTrack />
              <ProgressCircle.CircleRange />
            </ProgressCircle.Circle>
            <ProgressCircle.Icon>
              <ZapIcon />
            </ProgressCircle.Icon>
          </ProgressCircle.Root>
        </div>

        <div className="flex gap-6">
          <ProgressCircle.Root value={null} size="xs">
            <ProgressCircle.Circle>
              <ProgressCircle.CircleTrack />
              <ProgressCircle.CircleRange />
            </ProgressCircle.Circle>
          </ProgressCircle.Root>

          <ProgressCircle.Root value={null} size="sm">
            <ProgressCircle.Circle>
              <ProgressCircle.CircleTrack />
              <ProgressCircle.CircleRange />
            </ProgressCircle.Circle>
          </ProgressCircle.Root>

          <ProgressCircle.Root value={null} size="md">
            <ProgressCircle.Circle>
              <ProgressCircle.CircleTrack />
              <ProgressCircle.CircleRange />
            </ProgressCircle.Circle>
          </ProgressCircle.Root>

          <ProgressCircle.Root value={null} size="lg">
            <ProgressCircle.Circle>
              <ProgressCircle.CircleTrack />
              <ProgressCircle.CircleRange />
            </ProgressCircle.Circle>
          </ProgressCircle.Root>
        </div>
      </div>
    </div>
  )
}
