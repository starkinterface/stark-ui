import { Button, HoverCard, Portal } from "../.."
import { useState } from "react"

export default function Controlled() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-4 p-6">
      <Button variant="outline" onClick={() => setOpen((prev) => !prev)}>
        Toggle
      </Button>
      <HoverCard.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <HoverCard.Trigger asChild>
          <span className="text-sm text-foreground">
            Interactive Trigger ({open ? "Open" : "Closed"})
          </span>
        </HoverCard.Trigger>
        <Portal>
          <HoverCard.Positioner>
            <HoverCard.Content>
              <p className="text-sm text-foreground">
                This HoverCard is programmatically controlled.
              </p>
            </HoverCard.Content>
          </HoverCard.Positioner>
        </Portal>
      </HoverCard.Root>
    </div>
  )
}
