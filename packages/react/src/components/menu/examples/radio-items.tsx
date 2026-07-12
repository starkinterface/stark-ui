import { Button, Menu } from "../../"
import { CheckIcon } from "lucide-react"
import { useState } from "react"

export default function RadioItems() {
  const [sortBy, setSortBy] = useState("date")

  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <Menu.Root closeOnSelect={false}>
        <Menu.Trigger asChild>
          <Button variant="outline">Sort</Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content className="min-w-28">
            <Menu.RadioItemGroup
              value={sortBy}
              onValueChange={(e) => setSortBy(e.value)}
            >
              <Menu.ItemGroupLabel>Sort By</Menu.ItemGroupLabel>
              <Menu.RadioItem value="name">
                <Menu.ItemText>Name</Menu.ItemText>
                <Menu.ItemIndicator>
                  <CheckIcon />
                </Menu.ItemIndicator>
              </Menu.RadioItem>
              <Menu.RadioItem value="date">
                <Menu.ItemText>Date</Menu.ItemText>
                <Menu.ItemIndicator>
                  <CheckIcon />
                </Menu.ItemIndicator>
              </Menu.RadioItem>
              <Menu.RadioItem value="size">
                <Menu.ItemText>Size</Menu.ItemText>
                <Menu.ItemIndicator>
                  <CheckIcon />
                </Menu.ItemIndicator>
              </Menu.RadioItem>
              <Menu.RadioItem value="type">
                <Menu.ItemText>Type</Menu.ItemText>
                <Menu.ItemIndicator>
                  <CheckIcon />
                </Menu.ItemIndicator>
              </Menu.RadioItem>
            </Menu.RadioItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </div>
  )
}
