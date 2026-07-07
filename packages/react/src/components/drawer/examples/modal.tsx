import { Button, Drawer, Portal } from "../../"
import { X } from "lucide-react"
import { useState } from "react"

export default function Modal() {
  const [modal, setModal] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const openDrawer = (isModal: boolean) => {
    setModal(isModal)
    setIsOpen(true)
  }

  return (
    <div className="flex flex-wrap gap-4 h-dvh items-center justify-center w-full max-w-sm mx-auto">
      <Button onClick={() => openDrawer(true)} variant="outline">
        Open Modal (Default)
      </Button>
      <Button onClick={() => openDrawer(false)} variant="outline">
        Open Non-Modal
      </Button>

      <Drawer.Root
        modal={modal}
        onOpenChange={(e) => setIsOpen(e.open)}
        open={isOpen}
        swipeDirection="end"
      >
        <Portal>
          {modal && <Drawer.Backdrop />}
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>
                  Mode: {modal ? "Modal" : "Non-Modal"}
                </Drawer.Title>
                <Drawer.Description>
                  This panel runs in `{modal ? "modal" : "non-modal"}` state.
                </Drawer.Description>
              </Drawer.Header>
              <Drawer.Body>
                {modal
                  ? "When modal is true, background scrolling is disabled, outside clicks dismiss the panel, and other page elements are hidden."
                  : "When modal is false, you can still scroll and interact with other elements on the page while the drawer is open."}
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
