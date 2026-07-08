import { Button, Popover, Portal } from "../../"
import { LuX } from "react-icons/lu"

export default function Arrow() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button variant="outline">With Arrow</Button>
        </Popover.Trigger>
        <Portal>
          <Popover.Positioner>
            <Popover.Content>
              <Popover.Arrow>
                <Popover.ArrowTip />
              </Popover.Arrow>
              <Popover.Header>
                <Popover.Title>Notifications</Popover.Title>
                <Popover.Description>
                  You have 3 unread messages in your inbox.
                </Popover.Description>
              </Popover.Header>
              <Popover.CloseTrigger className="absolute top-4 right-4" asChild>
                <Button variant="ghost" aria-label="Close" size="icon-xs">
                  <LuX />
                </Button>
              </Popover.CloseTrigger>
            </Popover.Content>
          </Popover.Positioner>
        </Portal>
      </Popover.Root>
    </div>
  )
}
