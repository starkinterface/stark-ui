import { Kbd } from "../"

export default function Separator() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Combination Separator */}
        <Kbd.Root>
          <Kbd.Key>Ctrl</Kbd.Key>
          <Kbd.Separator>+</Kbd.Separator>
          <Kbd.Key>Shift</Kbd.Key>
          <Kbd.Separator>+</Kbd.Separator>
          <Kbd.Key>P</Kbd.Key>
        </Kbd.Root>

        {/* Sequential Separator */}
        <Kbd.Root>
          <Kbd.Key>G</Kbd.Key>
          <Kbd.Separator>then</Kbd.Separator>
          <Kbd.Key>I</Kbd.Key>
        </Kbd.Root>

        {/* Comma Separator */}
        <Kbd.Root>
          <Kbd.Key>Ctrl</Kbd.Key>
          <Kbd.Key>K</Kbd.Key>
          <Kbd.Separator>,</Kbd.Separator>
          <Kbd.Key>Ctrl</Kbd.Key>
          <Kbd.Key>C</Kbd.Key>
        </Kbd.Root>
      </div>
    </div>
  )
}
