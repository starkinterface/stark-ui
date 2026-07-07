import { Button, Drawer, Portal } from "../../"
import { X } from "lucide-react"

export default function SwipeArea() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-sm mx-auto">
      <Drawer.Root swipeDirection="end">
        {/* Swipe Area on the right edge */}
        <Drawer.SwipeArea asChild>
          <div className="flex items-center justify-center group bg-blue-500/10 border-s-2 border-dashed border-blue-500 w-12">
            <span className="text-sm font-bold tracking-wider [writing-mode:sideways-lr] uppercase select-none font-mono text-blue-500">
              Swipe to Open
            </span>
          </div>
        </Drawer.SwipeArea>

        <Drawer.Trigger asChild>
          <Button variant="accent">Open via Button</Button>
        </Drawer.Trigger>

        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Edge Swipe Enabled</Drawer.Title>
                <Drawer.Description>
                  This drawer supports both swipe-to-open and swipe-to-dismiss
                  gestures.
                </Drawer.Description>
              </Drawer.Header>
              <Drawer.Body>
                You can close this drawer by swiping it back to the right edge
                or by using the buttons below.
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.CloseTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Close Drawer
                  </Button>
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
