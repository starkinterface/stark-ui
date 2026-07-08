import { Button, Popover, Portal } from "../../"
import { LuX } from "react-icons/lu"

export default function Basic() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button variant="outline">Click Me</Button>
        </Popover.Trigger>
        <Portal>
          <Popover.Positioner>
            <Popover.Content>
              <Popover.Header>
                <Popover.Title>Favorite Frameworks</Popover.Title>
                <Popover.Description>
                  Manage and organize your favorite web frameworks.
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
