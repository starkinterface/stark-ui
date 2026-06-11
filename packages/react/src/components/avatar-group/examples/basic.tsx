import { AvatarGroup } from "../"
import { Avatar } from "../../avatar"

export default function Basic() {
  const users = [
    {
      initials: "EK",
      name: "Enji Kusnadi",
      url: "https://github.com/enjidev.png",
    },
    {
      initials: "GPT",
      name: "Open AI",
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
      {users.map((user) => (
        <Avatar.Root key={user.name}>
          {user.url && <Avatar.Image src={user.url} alt={user.name} />}
          <Avatar.Fallback>{user.initials}</Avatar.Fallback>
        </Avatar.Root>
      ))}
    </AvatarGroup>
  )
}
