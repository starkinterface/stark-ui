import { Button, Drawer, Portal } from "../../"
import { X } from "lucide-react"
import { useState } from "react"

type SizeType = "sm" | "md" | "lg" | "full"

export default function Sizes() {
  const [size, setSize] = useState<SizeType>("md")
  const [isOpen, setIsOpen] = useState(false)

  const openDrawer = (selectedSize: SizeType) => {
    setSize(selectedSize)
    setIsOpen(true)
  }

  return (
    <div className="flex flex-wrap gap-4 h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <Button onClick={() => openDrawer("sm")} variant="outline">
        SM Drawer
      </Button>
      <Button onClick={() => openDrawer("md")} variant="outline">
        MD Drawer (Default)
      </Button>
      <Button onClick={() => openDrawer("lg")} variant="outline">
        LG Drawer
      </Button>
      <Button onClick={() => openDrawer("full")} variant="outline">
        Full Drawer
      </Button>

      <Drawer.Root
        onOpenChange={(e) => setIsOpen(e.open)}
        open={isOpen}
        size={size}
        swipeDirection="end"
      >
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Drawer Size: {size.toUpperCase()}</Drawer.Title>
                <Drawer.Description>
                  This panel demonstrates the `{size}` variant.
                </Drawer.Description>
              </Drawer.Header>
              <Drawer.Body>
                Stark UI components adapt layout width and height sizes
                seamlessly. In left/right placements, the width scales, while in
                top/bottom placements, the height scales.
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
