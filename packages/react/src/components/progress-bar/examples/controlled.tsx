import { ProgressBar } from "../../"
import { useEffect, useState } from "react"

const easeInOutQuad = (t: number): number =>
  t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2

const getStatusText = (val: number): string => {
  if (val < 10) {
    return "Initializing build..."
  }
  if (val < 15) {
    return "Resolving dependencies..."
  }
  if (val < 60) {
    return "Compiling TypeScript..."
  }
  if (val < 90) {
    return "Bundling assets..."
  }
  if (val < 100) {
    return "Optimizing..."
  }
  return "Build completed!"
}

const useDemoBuildProgress = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const startHoldDuration = 1000
    const activeDuration = 6000
    const endHoldDuration = 2000
    const totalDuration = startHoldDuration + activeDuration + endHoldDuration
    let animationFrameId: number
    const startTime = Date.now()

    const updateProgress = () => {
      const elapsed = (Date.now() - startTime) % totalDuration
      if (elapsed < startHoldDuration) {
        setValue(0)
      } else if (elapsed < startHoldDuration + activeDuration) {
        const progressRatio = (elapsed - startHoldDuration) / activeDuration
        const easedValue = easeInOutQuad(progressRatio) * 100
        setValue(Math.round(easedValue))
      } else {
        setValue(100)
      }
      animationFrameId = requestAnimationFrame(updateProgress)
    }

    animationFrameId = requestAnimationFrame(updateProgress)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return {
    statusText: getStatusText(value),
    value,
  }
}

export default function Controlled() {
  const { value, statusText } = useDemoBuildProgress()

  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-md mx-auto">
      <div className="w-64">
        <ProgressBar.Root max={100} min={0} value={value}>
          <div className="flex justify-between gap-2">
            <ProgressBar.Label>{statusText}</ProgressBar.Label>
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
