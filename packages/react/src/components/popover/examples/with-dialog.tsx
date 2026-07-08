import { Button, Dialog, Popover, Portal } from "../../"
import { LuX } from "react-icons/lu"

export default function WithDialog() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.CloseTrigger className="absolute top-4 right-4" asChild>
                <Button variant="ghost" aria-label="Close" size="icon-xs">
                  <LuX />
                </Button>
              </Dialog.CloseTrigger>
              <Dialog.Header>
                <Dialog.Title>Edit Profile</Dialog.Title>
                <Dialog.Description>
                  Update your profile information below.
                </Dialog.Description>
              </Dialog.Header>
              <Dialog.Body>
                Click the button below to open a popover on top of this dialog.
              </Dialog.Body>
              <Dialog.Footer>
                <Popover.Root lazyMount unmountOnExit>
                  <Popover.Trigger asChild>
                    <Button variant="accent">More Options</Button>
                  </Popover.Trigger>
                  <Portal>
                    <Popover.Positioner>
                      <Popover.Content>
                        <Popover.Arrow>
                          <Popover.ArrowTip />
                        </Popover.Arrow>
                        <Popover.CloseTrigger
                          className="absolute top-4 right-4"
                          asChild
                        >
                          <Button
                            variant="ghost"
                            aria-label="Close"
                            size="icon-xs"
                          >
                            <LuX />
                          </Button>
                        </Popover.CloseTrigger>
                        <Popover.Header>
                          <Popover.Title>Additional Settings</Popover.Title>
                          <Popover.Description>
                            This popover renders correctly above the dialog
                            overlay.
                          </Popover.Description>
                        </Popover.Header>
                      </Popover.Content>
                    </Popover.Positioner>
                  </Portal>
                </Popover.Root>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </div>
  )
}
