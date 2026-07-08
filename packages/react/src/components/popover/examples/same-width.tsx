import { Button, Popover, Portal } from "../../"
import { LuX } from "react-icons/lu"

export default function SameWidth() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <Popover.Root positioning={{ sameWidth: true }}>
        <Popover.Trigger asChild>
          <Button variant="outline" className="w-[300px]">
            Trigger Width: 300px
          </Button>
        </Popover.Trigger>
        <Portal>
          <Popover.Positioner>
            <Popover.Content className="max-w-none">
              <Popover.Header>
                <Popover.Title>Matched Width</Popover.Title>
                <Popover.Description>
                  This popover matches the width of its trigger element.
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
