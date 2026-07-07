import { Button, Drawer, DrawerStack, Portal } from "../../"
import { X } from "lucide-react"
import { useRef } from "react"

export default function Basic() {
  const portalRef = useRef<HTMLDivElement | null>(null)

  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <DrawerStack.Root>
        <Drawer.Root modal={true} placement="bottom" swipeDirection="down">
          <div
            className="relative border border-border overflow-hidden"
            ref={portalRef}
          >
            <DrawerStack.Content>
              <section className="w-xl h-96 flex flex-col gap-4 items-center justify-center bg-background-surface">
                <p className="text-center text-sm text-foreground-muted max-w-sm">
                  Use DrawerStack to create a visual indent effect on the page
                  behind the drawer.
                </p>
                <Drawer.Trigger asChild>
                  <Button variant="accent">Open Drawer</Button>
                </Drawer.Trigger>
              </section>
            </DrawerStack.Content>
          </div>

          <Portal container={portalRef}>
            <Drawer.Positioner className="absolute size-full">
              <Drawer.Content>
                <Drawer.Grabber>
                  <Drawer.GrabberIndicator />
                </Drawer.Grabber>
                <Drawer.Header>
                  <Drawer.Title>Notifications</Drawer.Title>
                  <Drawer.Description>
                    You are all caught up. Good job!
                  </Drawer.Description>
                </Drawer.Header>
                <Drawer.Body>
                  Notice how the background page container scales down and gets
                  rounded edges when the bottom drawer panel is opened!
                </Drawer.Body>
                <Drawer.CloseTrigger className="absolute top-4 right-4" asChild>
                  <Button variant="ghost" aria-label="Close" size="icon-xs">
                    <X />
                  </Button>
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </DrawerStack.Root>
    </div>
  )
}
