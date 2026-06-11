import { AvatarGroup } from "../"
import { Avatar } from "../../avatar"

export default function Ring() {
  const users = [
    {
      initials: "EK",
      name: "Enji Kusnadi",
      ring: true,
      url: "https://github.com/enjidev.png",
    },
    {
      initials: "GPT",
      name: "Open AI",
      ring: true,
      url: "https://github.com/openai.png",
    },
    {
      initials: "CC",
      name: "Claude Code",
      url: "https://github.com/claude.png",
    },
    {
      initials: "+4",
    },
  ]

  return (
    <AvatarGroup>
      {users.map((user, index) => (
        <Avatar.Root
          key={index}
          className={
            user.ring ? "outline-green-400 outline-2 outline-offset-1" : ""
          }
        >
          {user.url && <Avatar.Image src={user.url} alt={user.name} />}
          <Avatar.Fallback>{user.initials}</Avatar.Fallback>
        </Avatar.Root>
      ))}
    </AvatarGroup>
  )
}
