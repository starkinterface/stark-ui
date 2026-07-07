import { Button, Drawer, Portal } from "../../"
import { X } from "lucide-react"

export default function Basic() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-sm mx-auto">
      <Drawer.Root lazyMount unmountOnExit swipeDirection="end">
        <Drawer.Trigger asChild>
          <Button variant="accent">Open Drawer</Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Stark UI Drawer</Drawer.Title>
                <Drawer.Description>
                  This side drawer slides out from the right by default.
                </Drawer.Description>
              </Drawer.Header>
              <Drawer.Body>
                Stark UI provides clean spacing, smooth animations, and
                comprehensive accessibility defaults out of the box.
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.CloseTrigger asChild>
                  <Button variant="outline">Close Drawer</Button>
                </Drawer.CloseTrigger>
              </Drawer.Footer>
              <Drawer.CloseTrigger className="absolute top-4 right-4" asChild>
                <Button variant="ghost" aria-label="Close" size="icon-xs">
                  <X />
                </Button>
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </div>
  )
}
