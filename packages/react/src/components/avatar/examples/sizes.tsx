import { Avatar } from "../"

export default function Sizes() {
  return (
    <div className="flex items-center gap-4">
      <Avatar.Root size="xs">
        <Avatar.Image src="https://github.com/enjidev.png" alt="Enji Kusnadi" />
        <Avatar.Fallback>xs</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root size="sm">
        <Avatar.Image src="https://github.com/enjidev.png" alt="Enji Kusnadi" />
        <Avatar.Fallback>sm</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root size="md">
        <Avatar.Image src="https://github.com/enjidev.png" alt="Enji Kusnadi" />
        <Avatar.Fallback>md</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root size="lg">
        <Avatar.Image src="https://github.com/enjidev.png" alt="Enji Kusnadi" />
        <Avatar.Fallback>lg</Avatar.Fallback>
      </Avatar.Root>
    </div>
  )
}
