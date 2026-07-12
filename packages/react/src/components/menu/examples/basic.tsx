import { Button, Menu } from "../../"

export default function Basic() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline">Workspace</Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content className="w-40">
            <Menu.Item value="settings">
              <Menu.ItemText>Settings</Menu.ItemText>
              <Menu.ItemShortcut>⌘,</Menu.ItemShortcut>
            </Menu.Item>
            <Menu.Item value="members">
              <Menu.ItemText>Members</Menu.ItemText>
            </Menu.Item>
            <Menu.Item value="integrations">
              <Menu.ItemText>Integrations</Menu.ItemText>
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item value="archive" disabled>
              <Menu.ItemText>Archive</Menu.ItemText>
              <Menu.ItemShortcut>⌘A</Menu.ItemShortcut>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </div>
  )
}
