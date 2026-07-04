"use client"

import { Tooltip, Button, Dialog, Portal } from "@stark-ui/react"
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
      <Button variant="danger-soft">Delete Deployment</Button>
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

const Overlays = () => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-4">
      <TooltipExample />
      <DialogExample />
    </div>
  </div>
)

export { Overlays }
