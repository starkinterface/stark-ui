import { ProgressCircle } from "../"

export default function Basic() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <ProgressCircle.Root defaultValue={42}>
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
  )
}
