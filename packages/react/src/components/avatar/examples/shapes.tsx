import { Avatar } from "../"

export default function Shapes() {
  return (
    <div className="flex items-center gap-4">
      <Avatar.Root shape="circle">
        <Avatar.Image src="https://github.com/enjidev.png" alt="Enji Kusnadi" />
        <Avatar.Fallback>EK</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root shape="square">
        <Avatar.Image src="https://github.com/enjidev.png" alt="Enji Kusnadi" />
        <Avatar.Fallback>EK</Avatar.Fallback>
      </Avatar.Root>
    </div>
  )
}
