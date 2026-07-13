"use client"

import { Button, Menu, Portal } from "@stark-ui/react"
import { LuChevronRight } from "react-icons/lu"

const MenuExample = () => (
  <Menu.Root>
    <Menu.Trigger asChild>
      <Button variant="outline">File</Button>
    </Menu.Trigger>
    <Portal>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="new">
            <Menu.ItemText>New File</Menu.ItemText>
            <Menu.ItemShortcut>⌘N</Menu.ItemShortcut>
          </Menu.Item>
          <Menu.Item value="open">
            <Menu.ItemText>Open</Menu.ItemText>
            <Menu.ItemShortcut>⌘O</Menu.ItemShortcut>
          </Menu.Item>
          <Menu.Separator />
          <Menu.Root>
            <Menu.TriggerItem>
              <Menu.ItemText>Share</Menu.ItemText>
              <LuChevronRight />
            </Menu.TriggerItem>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="email">Email</Menu.Item>
                  <Menu.Item value="message">Message</Menu.Item>
                  <Menu.Item value="airdrop">AirDrop</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
          <Menu.Root>
            <Menu.TriggerItem>
              <Menu.ItemText>Export</Menu.ItemText>
              <LuChevronRight />
            </Menu.TriggerItem>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="pdf">PDF</Menu.Item>
                  <Menu.Item value="png">PNG</Menu.Item>
                  <Menu.Item value="svg">SVG</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
          <Menu.Separator />
          <Menu.Item value="print">Print</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Portal>
  </Menu.Root>
)

const Collections = () => (
  <div className="flex flex-wrap gap-2">
    <MenuExample />
  </div>
)

export { Collections }
