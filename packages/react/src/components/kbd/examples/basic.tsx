import { Kbd } from "../"

export default function Basic() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="flex flex-col gap-4 items-center">
        {/* Standalone Key */}
        <Kbd.Root>
          <Kbd.Key>⌘</Kbd.Key>
        </Kbd.Root>

        {/* Basic Key Combo */}
        <Kbd.Root>
          <Kbd.Key>Ctrl</Kbd.Key>
          <Kbd.Key>K</Kbd.Key>
        </Kbd.Root>
      </div>
    </div>
  )
}
