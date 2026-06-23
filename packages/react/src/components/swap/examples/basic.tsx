import { Button } from "../../button"
import { Swap } from "@stark-ui/react"
import { useState } from "react"
import { LuMoon, LuSun } from "react-icons/lu"

export default function Basic() {
  const [swapped, setSwapped] = useState(false)

  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <Button onClick={() => setSwapped((prev) => !prev)} size="icon-md">
        <Swap.Root swap={swapped} animate="rotate">
          <Swap.Indicator type="off">
            <LuSun />
          </Swap.Indicator>
          <Swap.Indicator type="on">
            <LuMoon />
          </Swap.Indicator>
        </Swap.Root>
      </Button>
    </div>
  )
}
