"use client"

import {
  Avatar,
  AvatarGroup,
  Button,
  Clipboard,
  Kbd,
  QrCode,
  Tag,
} from "@stark-ui/react"
import { LogoIcon } from "@/components/brand"
import { LuX, LuClipboard, LuCheck } from "react-icons/lu"

const AvatarExample = () => (
  <div className="flex items-center gap-4">
    <Avatar.Root size="md">
      <Avatar.Image src="https://github.com/openai.png" alt="OpenAI" />
      <Avatar.Fallback>GPT</Avatar.Fallback>
      <Avatar.Indicator className="bg-emerald-500 white:bg-emerald-600" />
    </Avatar.Root>
  </div>
)

const AvatarGroupExample = () => {
  const users = [
    {
      initials: "EK",
      name: "Enji Kusnadi",
      url: "https://github.com/enjidev.png",
    },
    {
      initials: "CC",
      name: "Claude Code",
      url: "https://github.com/claude.png",
    },
    {
      initials: "R",
      name: "React",
      url: "https://github.com/react.png",
    },
    {
      initials: "+2",
      name: "More",
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

const QrCodeExample = () => (
  <QrCode.Root defaultValue="https://stark-ui.com">
    <QrCode.Frame>
      <QrCode.Pattern />
    </QrCode.Frame>
    <QrCode.Overlay>
      <LogoIcon className="text-background-accent" />
    </QrCode.Overlay>
  </QrCode.Root>
)

const TagExample = () => (
  <div className="flex flex-wrap gap-2">
    <Tag.Root>
      <Tag.Text>Status: Active</Tag.Text>
    </Tag.Root>
    <Tag.Root>
      <Tag.Text>Deployment</Tag.Text>
      <Tag.DeleteTrigger>
        <LuX />
      </Tag.DeleteTrigger>
    </Tag.Root>
  </div>
)

const KbdExample = () => (
  <div className="flex items-center gap-1.5 text-sm text-foreground-muted">
    Press
    <Kbd.Root>
      <Kbd.Key>CTRL</Kbd.Key>
      <Kbd.Separator>+</Kbd.Separator>
      <Kbd.Key>K</Kbd.Key>
    </Kbd.Root>
    to search deployments
  </div>
)

const ClipboardExample = () => (
  <Clipboard.Root value="https://stark-ui.com/docs/components/clipboard">
    <Clipboard.Label>Page Link</Clipboard.Label>
    <Clipboard.Control>
      <Clipboard.Input />
      <Clipboard.Trigger asChild>
        <Button size="icon-md" variant="outline">
          <Clipboard.Indicator copied={<LuCheck />}>
            <LuClipboard />
          </Clipboard.Indicator>
        </Button>
      </Clipboard.Trigger>
    </Clipboard.Control>
  </Clipboard.Root>
)

const DataDisplay = () => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-4">
      <QrCodeExample />
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <AvatarExample />
          <AvatarGroupExample />
        </div>
        <TagExample />
        <KbdExample />
      </div>
    </div>
    <ClipboardExample />
  </div>
)

export { DataDisplay }
