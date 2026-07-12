import { Button, Menu, Portal } from "../../"
import { ChevronRightIcon } from "lucide-react"

export default function Nested() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline">File</Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="new">
                <Menu.ItemText>New File</Menu.ItemText>
              </Menu.Item>
              <Menu.Item value="open">
                <Menu.ItemText>Open</Menu.ItemText>
              </Menu.Item>
              <Menu.Separator />
              <Menu.Item value="duplicate">
                <Menu.ItemText>Duplicate</Menu.ItemText>
              </Menu.Item>
              <Menu.Root positioning={{ offset: { crossAxis: -5 } }}>
                <Menu.TriggerItem>
                  <Menu.ItemText>Share</Menu.ItemText>
                  <ChevronRightIcon />
                </Menu.TriggerItem>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content>
                      <Menu.Item value="email">
                        <Menu.ItemText>Email</Menu.ItemText>
                      </Menu.Item>
                      <Menu.Item value="message">
                        <Menu.ItemText>Message</Menu.ItemText>
                      </Menu.Item>
                      <Menu.Item value="airdrop">
                        <Menu.ItemText>AirDrop</Menu.ItemText>
                      </Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
              <Menu.Root positioning={{ offset: { crossAxis: -5 } }}>
                <Menu.TriggerItem>
                  <Menu.ItemText>Export</Menu.ItemText>
                  <ChevronRightIcon />
                </Menu.TriggerItem>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content>
                      <Menu.Item value="pdf">
                        <Menu.ItemText>PDF</Menu.ItemText>
                      </Menu.Item>
                      <Menu.Item value="png">
                        <Menu.ItemText>PNG</Menu.ItemText>
                      </Menu.Item>
                      <Menu.Item value="svg">
                        <Menu.ItemText>SVG</Menu.ItemText>
                      </Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
              <Menu.Separator />
              <Menu.Item value="print">
                <Menu.ItemText>Print</Menu.ItemText>
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </div>
  )
}
