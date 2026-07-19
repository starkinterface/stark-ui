import { Button, Dialog, Portal } from "../../"
import { X } from "lucide-react"
import { useState } from "react"

type ScrollType = "inside" | "outside"

export default function Scroll() {
  const [scroll, setScroll] = useState<ScrollType>("inside")
  const [isOpen, setIsOpen] = useState(false)

  const openDialog = (selectedScroll: ScrollType) => {
    setScroll(selectedScroll)
    setIsOpen(true)
  }

  return (
    <div className="flex flex-wrap gap-4 h-dvh items-center justify-center w-full max-w-lg mx-auto">
      <Button onClick={() => openDialog("inside")} variant="outline">
        Scroll Inside (Default)
      </Button>
      <Button onClick={() => openDialog("outside")} variant="outline">
        Scroll Outside
      </Button>

      <Dialog.Root
        onOpenChange={(e) => setIsOpen(e.open)}
        open={isOpen}
        scroll={scroll}
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>
                  Dialog Scroll: {scroll.toUpperCase()}
                </Dialog.Title>
                <Dialog.Description>
                  This dialog demonstrates the `{scroll}` scroll behavior.
                </Dialog.Description>
              </Dialog.Header>
              <Dialog.Body>
                <div className="flex flex-col gap-4">
                  <p>
                    When scroll is set to `inside`, the dialog&apos;s content
                    container is constrained in height (e.g. max 85vh) and only
                    the dialog body scrolls vertically.
                  </p>
                  <p>
                    When scroll is set to `outside`, the content container has
                    no height limits, and the entire overlay window scrolls,
                    pushing content beyond the viewport bounds naturally.
                  </p>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <p key={i}>
                      Paragraph {i + 1}: Stark UI offers developer-friendly
                      customization controls. The scroll layout ensures modal
                      inputs remain readable and accessible regardless of
                      content size.
                    </p>
                  ))}
                </div>
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
