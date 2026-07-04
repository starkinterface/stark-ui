import { Button, Dialog, Portal } from "../../"
import { X } from "lucide-react"
import { useState } from "react"

type PlacementType = "center" | "top" | "bottom"

export default function Placement() {
  const [placement, setPlacement] = useState<PlacementType>("center")
  const [isOpen, setIsOpen] = useState(false)

  const openDialog = (selectedPlacement: PlacementType) => {
    setPlacement(selectedPlacement)
    setIsOpen(true)
  }

  return (
    <div className="flex flex-wrap gap-4 h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <Button onClick={() => openDialog("top")} variant="outline">
        Top Placement
      </Button>
      <Button onClick={() => openDialog("center")} variant="outline">
        Center Placement (Default)
      </Button>
      <Button onClick={() => openDialog("bottom")} variant="outline">
        Bottom Placement
      </Button>

      <Dialog.Root
        onOpenChange={(e) => setIsOpen(e.open)}
        open={isOpen}
        placement={placement}
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>
                  Dialog Placement: {placement.toUpperCase()}
                </Dialog.Title>
                <Dialog.Description>
                  This dialog demonstrates the `{placement}` positioner variant.
                </Dialog.Description>
              </Dialog.Header>
              <Dialog.Body>
                By positioning the content container inside the viewport
                overlay, the dialog can sit at the top, bottom, or center of the
                page.
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.CloseTrigger asChild>
                  <Button variant="outline">Dismiss</Button>
                </Dialog.CloseTrigger>
              </Dialog.Footer>
              <Dialog.CloseTrigger className="absolute top-4 right-4" asChild>
                <Button variant="ghost" aria-label="Close" size="icon-xs">
                  <X />
                </Button>
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </div>
  )
}
