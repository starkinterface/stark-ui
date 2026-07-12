import { Button, Menu } from "../../"
import { ScissorsIcon, CopyIcon, ClipboardIcon } from "lucide-react"

export default function Group() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline">Edit</Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Clipboard</Menu.ItemGroupLabel>
              <Menu.Item value="cut">
                <ScissorsIcon />
                <Menu.ItemText>Cut</Menu.ItemText>
                <Menu.ItemShortcut>⌘X</Menu.ItemShortcut>
              </Menu.Item>
              <Menu.Item value="copy">
                <CopyIcon />
                <Menu.ItemText>Copy</Menu.ItemText>
                <Menu.ItemShortcut>⌘C</Menu.ItemShortcut>
              </Menu.Item>
              <Menu.Item value="paste" disabled>
                <ClipboardIcon />
                <Menu.ItemText>Paste</Menu.ItemText>
                <Menu.ItemShortcut>⌘V</Menu.ItemShortcut>
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.Separator />
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Selection</Menu.ItemGroupLabel>
              <Menu.Item value="select-all">
                <Menu.ItemText>Select All</Menu.ItemText>
                <Menu.ItemShortcut>⌘A</Menu.ItemShortcut>
              </Menu.Item>
              <Menu.Item value="deselect">
                <Menu.ItemText>Deselect</Menu.ItemText>
                <Menu.ItemShortcut>⇧⌘A</Menu.ItemShortcut>
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </div>
  )
}
