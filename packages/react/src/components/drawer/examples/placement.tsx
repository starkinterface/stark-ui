import { Button, Drawer, Portal } from "../../"
import { X } from "lucide-react"
import { useState } from "react"

type PlacementType = "right" | "left" | "top" | "bottom"

const swipeDirectionMap = {
  bottom: "down",
  left: "start",
  right: "end",
  top: "up",
} as const

export default function Placement() {
  const [placement, setPlacement] = useState<PlacementType>("right")
  const [isOpen, setIsOpen] = useState(false)

  const openDrawer = (selectedPlacement: PlacementType) => {
    setPlacement(selectedPlacement)
    setIsOpen(true)
  }

  return (
    <div className="flex flex-wrap gap-4 h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <Button onClick={() => openDrawer("left")} variant="outline">
        Left
      </Button>
      <Button onClick={() => openDrawer("right")} variant="outline">
        Right (Default)
      </Button>
      <Button onClick={() => openDrawer("top")} variant="outline">
        Top
      </Button>
      <Button onClick={() => openDrawer("bottom")} variant="outline">
        Bottom
      </Button>

      <Drawer.Root
        onOpenChange={(e) => setIsOpen(e.open)}
        open={isOpen}
        placement={placement}
        swipeDirection={swipeDirectionMap[placement]}
      >
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Grabber>
                <Drawer.GrabberIndicator />
              </Drawer.Grabber>
              <Drawer.Header>
                <Drawer.Title>
                  Drawer Placement: {placement.toUpperCase()}
                </Drawer.Title>
                <Drawer.Description>
                  This panel demonstrates the `{placement}` edge slide-in
                  direction.
                </Drawer.Description>
              </Drawer.Header>
              <Drawer.Body>
                By positioning the content container and applying corresponding
                animation transitions, the panel slides smoothly from left,
                right, top, or bottom.
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.CloseTrigger asChild>
                  <Button variant="outline">Dismiss</Button>
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
