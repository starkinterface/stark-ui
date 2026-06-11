import { Avatar } from "../"

export default function Ring() {
  return (
    <Avatar.Root className="outline-green-400 outline-2 outline-offset-1">
      <Avatar.Image src="https://github.com/enjidev.png" alt="Enji Kusnadi" />
      <Avatar.Fallback>EK</Avatar.Fallback>
      <Avatar.Indicator className="bg-emerald-500 white:bg-emerald-600" />
    </Avatar.Root>
  )
}
