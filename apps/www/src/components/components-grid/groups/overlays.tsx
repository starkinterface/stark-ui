"use client"

import { Tooltip, Button, Dialog, Drawer, Portal } from "@stark-ui/react"
import { LuTrash2, LuX } from "react-icons/lu"

const TooltipExample = () => (
  <Tooltip.Root
    closeDelay={0}
    openDelay={0}
    positioning={{ placement: "top-start" }}
  >
    <Tooltip.Trigger asChild>
      <Button variant="danger-soft" size="icon-md">
        <LuTrash2 />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Positioner>
      <Tooltip.Content>
        <Tooltip.Arrow>
          <Tooltip.ArrowTip />
        </Tooltip.Arrow>
        This will permanently delete the deployment!
      </Tooltip.Content>
    </Tooltip.Positioner>
  </Tooltip.Root>
)

const DialogExample = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button variant="outline">Delete Deployment</Button>
    </Dialog.Trigger>
    <Portal>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Delete Deployment</Dialog.Title>
            <Dialog.Description>
              This action is permanent and cannot be undone. All database
              records and logs associated with this deployment will be deleted.
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </Dialog.CloseTrigger>
            <Button variant="danger">Confirm</Button>
          </Dialog.Footer>
          <Dialog.CloseTrigger className="absolute top-4 right-4" asChild>
            <Button variant="ghost" aria-label="Close" size="icon-xs">
              <LuX />
            </Button>
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
)

const DrawerExample = () => (
  <Drawer.Root swipeDirection="end">
    <Drawer.Trigger asChild>
      <Button variant="outline">Open Settings</Button>
    </Drawer.Trigger>
    <Portal>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Settings</Drawer.Title>
            <Drawer.Description>
              Configure your project preferences and environment variables.
            </Drawer.Description>
          </Drawer.Header>
          <Drawer.Body>
            <div className="flex flex-col gap-4">
              <p>
                Use the settings drawer to update metadata, deploy tokens, and
                connection configurations.
              </p>
            </div>
          </Drawer.Body>
          <Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </Drawer.CloseTrigger>
            <Button variant="accent">Save Changes</Button>
          </Drawer.Footer>
          <Drawer.CloseTrigger className="absolute top-4 right-4" asChild>
            <Button variant="ghost" aria-label="Close" size="icon-xs">
              <LuX />
            </Button>
          </Drawer.CloseTrigger>
        </Drawer.Content>
      </Drawer.Positioner>
    </Portal>
  </Drawer.Root>
)

const Overlays = () => (
  <div className="flex flex-wrap gap-2">
    <TooltipExample />
    <DialogExample />
    <DrawerExample />
  </div>
)

export { Overlays }
