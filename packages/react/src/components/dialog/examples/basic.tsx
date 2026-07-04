import { Button, Dialog, Portal } from "../../"
import { X } from "lucide-react"

export default function Basic() {
  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center w-full max-w-sm mx-auto">
      <Dialog.Root lazyMount unmountOnExit>
        <Dialog.Trigger asChild>
          <Button variant="accent">Open Dialog</Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Confirm Action</Dialog.Title>
                <Dialog.Description>
                  Are you sure you want to permanently delete this deployment?
                  This action cannot be undone.
                </Dialog.Description>
              </Dialog.Header>
              <Dialog.Footer>
                <Dialog.CloseTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.CloseTrigger>
                <Button variant="danger">Delete</Button>
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
