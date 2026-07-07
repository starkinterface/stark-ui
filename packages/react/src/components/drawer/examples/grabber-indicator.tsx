import { Button, Drawer, Portal } from "../../"
import { X } from "lucide-react"

export default function GrabberIndicator() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-sm mx-auto">
      <Drawer.Root placement="bottom">
        <Drawer.Trigger asChild>
          <Button variant="accent">Open Drawer</Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content draggable={false}>
              <Drawer.Grabber>
                <Drawer.GrabberIndicator />
              </Drawer.Grabber>
              <Drawer.Header>
                <Drawer.Title>Stark UI Drawer</Drawer.Title>
                <Drawer.Description>
                  This bottom drawer features a grabber indicator at the top.
                </Drawer.Description>
              </Drawer.Header>
              <Drawer.Body>
                You can swipe down on the grabber to dismiss the drawer panel.
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
