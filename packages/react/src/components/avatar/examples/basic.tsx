import { Avatar } from "../"

export default function Basic() {
  return (
    <Avatar.Root>
      <Avatar.Image src="https://github.com/enjidev.png" alt="Enji Kusnadi" />
      <Avatar.Fallback>EK</Avatar.Fallback>
    </Avatar.Root>
  )
}
