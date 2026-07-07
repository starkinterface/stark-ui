import { Button, Drawer, Portal } from "../../"
import { X } from "lucide-react"

export default function NoDragArea() {
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
                <Drawer.Title>Draggable Content</Drawer.Title>
                <Drawer.Description>
                  Try dragging from the header or body to dismiss.
                </Drawer.Description>
              </Drawer.Header>
              <Drawer.Body>
                <div className="flex flex-col gap-4">
                  <p>Dragging this paragraph will close the drawer panel.</p>
                  <div
                    className="p-4 bg-background-secondary text-center text-sm select-none"
                    data-no-drag
                  >
                    No Drag Area
                    <span className="block font-normal text-foreground-muted mt-1">
                      Dragging inside this box will NOT dismiss the drawer.
                    </span>
                  </div>
                </div>
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
