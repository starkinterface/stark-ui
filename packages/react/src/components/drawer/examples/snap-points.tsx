import { Button, Drawer, Portal } from "../../"
import { X } from "lucide-react"

export default function SnapPoints() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-sm mx-auto">
      <Drawer.Root
        defaultSnapPoint={0.5}
        placement="bottom"
        size="full"
        snapPoints={[0.25, 0.5, 1]}
      >
        <Drawer.Trigger asChild>
          <Button variant="accent">Open Bottom Drawer</Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Grabber>
                <Drawer.GrabberIndicator />
              </Drawer.Grabber>
              <Drawer.Header>
                <Drawer.Title>Drawer with Snap Points</Drawer.Title>
                <Drawer.Description>
                  Drag the grabber to snap between 25%, 50%, and 100% heights.
                </Drawer.Description>
                <Drawer.CloseTrigger className="absolute top-4 right-4" asChild>
                  <Button variant="outline" aria-label="Close" size="icon-xs">
                    <X />
                  </Button>
                </Drawer.CloseTrigger>
              </Drawer.Header>
              <Drawer.Body>
                This bottom panel demonstrates snapping behavior. Swiping down
                from the 25% stop will dismiss the drawer panel.
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </div>
  )
}
