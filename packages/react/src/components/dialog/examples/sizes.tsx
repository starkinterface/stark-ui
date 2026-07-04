import { Button, Dialog, Portal } from "../../"
import { X } from "lucide-react"
import { useState } from "react"

type SizeType = "sm" | "md" | "lg" | "full"

export default function Sizes() {
  const [size, setSize] = useState<SizeType>("md")
  const [isOpen, setIsOpen] = useState(false)

  const openDialog = (selectedSize: SizeType) => {
    setSize(selectedSize)
    setIsOpen(true)
  }

  return (
    <div className="flex flex-wrap gap-4 h-dvh items-center justify-center w-full max-w-xl mx-auto">
      <Button onClick={() => openDialog("sm")} variant="outline">
        SM Dialog
      </Button>
      <Button onClick={() => openDialog("md")} variant="outline">
        MD Dialog (Default)
      </Button>
      <Button onClick={() => openDialog("lg")} variant="outline">
        LG Dialog
      </Button>
      <Button onClick={() => openDialog("full")} variant="outline">
        Full Dialog
      </Button>

      <Dialog.Root
        onOpenChange={(e) => setIsOpen(e.open)}
        open={isOpen}
        size={size}
        placement={size === "full" ? "bottom" : "center"}
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Dialog Size: {size.toUpperCase()}</Dialog.Title>
                <Dialog.Description>
                  This dialog demonstrates the `{size}` variant. Feel free to
                  try different sizes using the buttons behind.
                </Dialog.Description>
              </Dialog.Header>
              <Dialog.Body>
                Stark UI components adapt visually using tailwind-variants. The
                full size takes up the entire window screen, while smaller sizes
                are constrained.
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
