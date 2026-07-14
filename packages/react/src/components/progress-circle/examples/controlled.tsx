import { ProgressCircle } from "../"
import { useEffect, useState } from "react"

const easeInOutQuad = (t: number): number =>
  t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2

export default function Controlled() {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const startHold = 1000
    const active = 6000
    const endHold = 2000
    const total = startHold + active + endHold

    const startTime = Date.now()
    let frameId: number

    const tick = () => {
      const elapsed = (Date.now() - startTime) % total

      if (elapsed < startHold) {
        setValue(0)
      } else if (elapsed < startHold + active) {
        const ratio = (elapsed - startHold) / active
        setValue(Math.round(easeInOutQuad(ratio) * 100))
      } else {
        setValue(100)
      }

      frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <div className="flex h-dvh items-center justify-center">
      <ProgressCircle.Root value={value}>
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
