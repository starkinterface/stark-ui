import { Button, Drawer, Portal } from "../../"
import { X } from "lucide-react"

export default function SwipeDirection() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-sm mx-auto">
      <Drawer.Root swipeDirection="end">
        <Drawer.Trigger asChild>
          <Button variant="accent">Open (Swipe End to Close)</Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Swipe Direction: End</Drawer.Title>
                <Drawer.Description>
                  This drawer can be swiped towards the right edge to close it.
                </Drawer.Description>
              </Drawer.Header>
              <Drawer.Body>
                Try swiping the drawer panel to the right to dismiss it.
              </Drawer.Body>
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
