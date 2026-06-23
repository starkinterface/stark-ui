import { Toggle } from "../../toggle"
import { Swap } from "@stark-ui/react"
import { LuMoon, LuSun } from "react-icons/lu"

export default function Basic() {
  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <Toggle.Root size="icon-md">
        <Toggle.Context>
          {(context) => (
            <Swap.Root swap={context.pressed} animate="rotate">
              <Swap.Indicator type="off">
                <LuSun />
              </Swap.Indicator>
              <Swap.Indicator type="on">
                <LuMoon />
              </Swap.Indicator>
            </Swap.Root>
          )}
        </Toggle.Context>
      </Toggle.Root>
    </div>
  )
}
