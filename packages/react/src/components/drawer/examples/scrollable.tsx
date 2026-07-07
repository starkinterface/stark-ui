import { Button, Drawer, Portal } from "../../"
import { X } from "lucide-react"

export default function Scrollable() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-sm mx-auto">
      <Drawer.Root lazyMount unmountOnExit swipeDirection="end">
        <Drawer.Trigger asChild>
          <Button variant="accent">Open Scrollable Drawer</Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Scrollable Content</Drawer.Title>
                <Drawer.Description>
                  This drawer contains a long scrollable body list.
                </Drawer.Description>
              </Drawer.Header>
              <Drawer.Body>
                <div className="flex flex-col gap-2">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div
                      className="flex items-center justify-center h-10 bg-background-secondary rounded-xs text-sm"
                      key={i}
                    >
                      Item {i + 1}
                    </div>
                  ))}
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
