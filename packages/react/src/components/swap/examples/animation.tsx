import { Swap } from "../"
import { Button } from "../../button"
import { useEffect, useRef, useState } from "react"
import {
  LuCheck,
  LuCopy,
  LuEye,
  LuEyeOff,
  LuLock,
  LuLockOpen,
  LuMic,
  LuMicOff,
  LuPin,
  LuPinOff,
  LuMoon,
  LuSun,
} from "react-icons/lu"

import type { SwapRootProps } from "../"
import type { ButtonProps } from "../../button"

interface SwapButtonProps extends SwapRootProps {
  offIcon: React.ReactNode
  onIcon: React.ReactNode
  pressed: boolean
  variant?: ButtonProps["variant"]
}

const SwapButton = ({
  animate,
  offIcon,
  onIcon,
  pressed,
  variant = pressed ? "primary" : "outline",
  ...props
}: SwapButtonProps) => (
  <Button
    aria-pressed={pressed}
    size="icon-md"
    variant={variant}
    className="translate-y-0"
    {...props}
  >
    <Swap.Root swap={pressed} animate={animate}>
      <Swap.Indicator type="off">{offIcon}</Swap.Indicator>
      <Swap.Indicator type="on">{onIcon}</Swap.Indicator>
    </Swap.Root>
  </Button>
)

export default function Animation() {
  const [theme, setTheme] = useState(false)
  const [copied, setCopied] = useState(false)
  const [visible, setVisible] = useState(false)
  const [locked, setLocked] = useState(true)
  const [muted, setMuted] = useState(false)
  const [pinned, setPinned] = useState(false)

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const copyInvite = () => {
    setCopied(true)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setCopied(false)
      timeoutRef.current = null
    }, 1400)
  }

  useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    },
    []
  )

  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <div className="grid grid-cols-6 gap-3">
        <SwapButton
          aria-label="Toggle theme"
          animate="rotate"
          offIcon={<LuSun />}
          onClick={() => setTheme((prev) => !prev)}
          onIcon={<LuMoon />}
          pressed={theme}
          variant={theme ? "primary" : "outline"}
        />
        <SwapButton
          aria-label="Copy invite link"
          animate="scale"
          offIcon={<LuCopy />}
          onClick={copyInvite}
          onIcon={<LuCheck />}
          pressed={copied}
          variant={copied ? "primary" : "outline"}
        />
        <SwapButton
          aria-label="Toggle token visibility"
          animate="fade"
          offIcon={<LuEye />}
          onClick={() => setVisible((prev) => !prev)}
          onIcon={<LuEyeOff />}
          pressed={visible}
        />
        <SwapButton
          aria-label="Toggle lock"
          animate={locked ? "move-bottom" : "move-top"}
          offIcon={<LuLock />}
          onClick={() => setLocked((prev) => !prev)}
          onIcon={<LuLockOpen />}
          pressed={!locked}
          variant={locked ? "danger-soft" : "primary"}
        />
        <SwapButton
          aria-label="Toggle microphone"
          animate="scale"
          offIcon={<LuMic />}
          onClick={() => setMuted((prev) => !prev)}
          onIcon={<LuMicOff />}
          pressed={muted}
          variant={muted ? "danger-soft" : "outline"}
        />
        <SwapButton
          aria-label="Pin item"
          animate="flip"
          offIcon={<LuPinOff />}
          onClick={() => setPinned((prev) => !prev)}
          onIcon={<LuPin />}
          pressed={pinned}
        />
      </div>
    </div>
  )
}
