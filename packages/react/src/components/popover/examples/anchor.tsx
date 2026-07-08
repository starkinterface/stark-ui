import { Button, Input, Popover, Portal } from "../../"
import { LuX } from "react-icons/lu"

export default function Anchor() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <Popover.Root positioning={{ placement: "bottom-start" }}>
        <Popover.Trigger asChild>
          <Button variant="outline" className="mr-4">
            Trigger
          </Button>
        </Popover.Trigger>
        <Popover.Anchor>
          <Input placeholder="Anchor (Popover aligns here)" />
        </Popover.Anchor>
        <Portal>
          <Popover.Positioner>
            <Popover.Content>
              <Popover.Header>
                <Popover.Title>Anchored Card</Popover.Title>
                <Popover.Description>
                  Observe how the popover aligns directly relative to the input
                  box rather than the trigger.
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
