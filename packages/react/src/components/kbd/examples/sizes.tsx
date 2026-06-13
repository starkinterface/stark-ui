import { Kbd } from "../"

export default function Sizes() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-1">
        <Kbd size="xs">CTRL</Kbd>
        <Kbd size="xs">K</Kbd>
      </div>
      <div className="flex items-center gap-1">
        <Kbd size="sm">CTRL</Kbd>
        <Kbd size="sm">K</Kbd>
      </div>
      <div className="flex items-center gap-1">
        <Kbd size="md">CTRL</Kbd>
        <Kbd size="md">K</Kbd>
      </div>
      <div className="flex items-center gap-1">
        <Kbd size="lg">CTRL</Kbd>
        <Kbd size="lg">K</Kbd>
      </div>
    </div>
  )
}
