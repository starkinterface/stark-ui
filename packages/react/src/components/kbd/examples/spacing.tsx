import { Kbd } from "../"

export default function Spacing() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-4">
      {/* Separated (Default) */}
      <Kbd.Root spacing="separated">
        <Kbd.Key>Ctrl</Kbd.Key>
        <Kbd.Separator>+</Kbd.Separator>
        <Kbd.Key>K</Kbd.Key>
      </Kbd.Root>

      {/* Attached */}
      <div className="flex items-center gap-4">
        <Kbd.Root spacing="attached">
          <Kbd.Key>Ctrl</Kbd.Key>
          <Kbd.Separator>+</Kbd.Separator>
          <Kbd.Key>D</Kbd.Key>
        </Kbd.Root>

        <Kbd.Root spacing="attached">
          <Kbd.Key>⌘</Kbd.Key>
          <Kbd.Separator>+</Kbd.Separator>
          <Kbd.Key>Shift</Kbd.Key>
          <Kbd.Separator>+</Kbd.Separator>
          <Kbd.Key>P</Kbd.Key>
        </Kbd.Root>
      </div>
    </div>
  )
}
