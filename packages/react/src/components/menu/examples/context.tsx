import { Menu } from "../../"

export default function Context() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <Menu.Root>
        <Menu.ContextTrigger asChild>
          <div className="h-40 w-60 flex items-center justify-center rounded-xs border border-dashed border-border text-sm select-none">
            Right click here
          </div>
        </Menu.ContextTrigger>
        <Menu.Positioner>
          <Menu.Content className="w-40">
            <Menu.Item value="back">
              <Menu.ItemText>Back</Menu.ItemText>
              <Menu.ItemShortcut>⌘[</Menu.ItemShortcut>
            </Menu.Item>
            <Menu.Item value="forward" disabled>
              <Menu.ItemText>Forward</Menu.ItemText>
              <Menu.ItemShortcut>⌘]</Menu.ItemShortcut>
            </Menu.Item>
            <Menu.Item value="reload">
              <Menu.ItemText>Reload</Menu.ItemText>
              <Menu.ItemShortcut>⌘R</Menu.ItemShortcut>
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item value="bookmark">
              <Menu.ItemText>Bookmark</Menu.ItemText>
              <Menu.ItemShortcut>⌘D</Menu.ItemShortcut>
            </Menu.Item>
            <Menu.Item value="inspect">
              <Menu.ItemText>Inspect</Menu.ItemText>
              <Menu.ItemShortcut>⌥⌘I</Menu.ItemShortcut>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </div>
  )
}
