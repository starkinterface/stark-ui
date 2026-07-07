import { Button, Drawer, Portal } from "../../"
import { X } from "lucide-react"

export default function NonDraggable() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-sm mx-auto">
      <Drawer.Root lazyMount unmountOnExit swipeDirection="end">
        <Drawer.Trigger asChild>
          <Button variant="accent">Open Non-Draggable Drawer</Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content draggable={false}>
              <Drawer.Header>
                <Drawer.Title>Non-Draggable Content</Drawer.Title>
                <Drawer.Description>
                  This drawer panel cannot be dragged or swiped.
                </Drawer.Description>
              </Drawer.Header>
              <Drawer.Body>
                Dragging anywhere on the content container has no effect because
                `draggable` is set to false.
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.CloseTrigger asChild>
                  <Button variant="outline">Close</Button>
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
