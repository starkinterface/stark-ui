import { AvatarGroup } from "../"
import { Avatar } from "../../avatar"

import type { CSSProperties } from "react"

export default function Stacking() {
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

  const groupCount = users.length

  return (
    <div className="flex flex-col gap-6">
      {/* Last on Top */}
      <AvatarGroup stacking="last-on-top">
        {users.map((user, index) => (
          <Avatar.Root
            key={index}
            style={
              {
                "--group-count": groupCount,
                "--group-item-index": index,
              } as CSSProperties
            }
          >
            {user.url && <Avatar.Image src={user.url} alt={user.name} />}
            <Avatar.Fallback>{user.initials}</Avatar.Fallback>
          </Avatar.Root>
        ))}
      </AvatarGroup>

      {/* First on Top */}
      <AvatarGroup stacking="first-on-top">
        {users.map((user, index) => (
          <Avatar.Root
            key={index}
            style={
              {
                "--group-count": groupCount,
                "--group-item-index": index,
              } as CSSProperties
            }
          >
            {user.url && <Avatar.Image src={user.url} alt={user.name} />}
            <Avatar.Fallback>{user.initials}</Avatar.Fallback>
          </Avatar.Root>
        ))}
      </AvatarGroup>
    </div>
  )
}
