import { Button, Menu } from "../../"
import { CheckIcon } from "lucide-react"
import { useState } from "react"

export default function CheckboxItems() {
  const [sidebar, setSidebar] = useState(true)
  const [minimap, setMinimap] = useState(false)
  const [breadcrumbs, setBreadcrumbs] = useState(true)

  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <Menu.Root closeOnSelect={false}>
        <Menu.Trigger asChild>
          <Button variant="outline">View</Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content className="w-48">
            <Menu.CheckboxItem
              checked={sidebar}
              onCheckedChange={setSidebar}
              value="sidebar"
            >
              <Menu.ItemText>Show Sidebar</Menu.ItemText>
              <Menu.ItemIndicator>
                <CheckIcon />
              </Menu.ItemIndicator>
            </Menu.CheckboxItem>
            <Menu.CheckboxItem
              checked={minimap}
              onCheckedChange={setMinimap}
              value="minimap"
            >
              <Menu.ItemText>Show Minimap</Menu.ItemText>
              <Menu.ItemIndicator>
                <CheckIcon />
              </Menu.ItemIndicator>
            </Menu.CheckboxItem>
            <Menu.CheckboxItem
              checked={breadcrumbs}
              onCheckedChange={setBreadcrumbs}
              value="breadcrumbs"
            >
              <Menu.ItemText>Show Breadcrumbs</Menu.ItemText>
              <Menu.ItemIndicator>
                <CheckIcon />
              </Menu.ItemIndicator>
            </Menu.CheckboxItem>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </div>
  )
}
