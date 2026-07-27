import {
  Avatar,
  Button,
  Dialog,
  Drawer,
  HoverCard,
  Popover,
  Portal,
  Tooltip,
} from "@stark-ui/react"
import Link from "next/link"
import { LuTrash2, LuX } from "react-icons/lu"
import { SiX } from "react-icons/si"

const HoverCardExample = () => (
  <HoverCard.Root openDelay={0} closeDelay={150}>
    <HoverCard.Trigger asChild>
      <span className="text-sm font-semibold underline decoration-border">
        @enjidev
      </span>
    </HoverCard.Trigger>
    <Portal>
      <HoverCard.Positioner>
        <HoverCard.Content>
          <HoverCard.Arrow>
            <HoverCard.ArrowTip />
          </HoverCard.Arrow>
          <div className="flex gap-2.5">
            <Avatar.Root>
              <Avatar.Image
                src="https://github.com/enjidev.png"
                alt="Enji Kusnadi"
              />
              <Avatar.Fallback>EK</Avatar.Fallback>
            </Avatar.Root>
            <div className="flex flex-col">
              <h4 className="text-sm font-semibold text-foreground">
                Enji Kusnadi
              </h4>
              <p className="text-sm text-foreground-muted">
                Front-End developer / Stark UI core maintainer.
              </p>
              <div className="mt-2 flex gap-4 text-sm">
                <Link
                  href="https://x.com/enjidev"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="flex items-center gap-1.5"
                >
                  <SiX className="size-3" />
                  <strong className="font-semibold text-foreground">
                    @enjidev
                  </strong>
                </Link>
              </div>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Positioner>
    </Portal>
  </HoverCard.Root>
)

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

const PopoverExample = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <Button variant="outline">View Info</Button>
    </Popover.Trigger>
    <Portal>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Arrow>
            <Popover.ArrowTip />
          </Popover.Arrow>
          <Popover.Header>
            <Popover.Title>Deployment Status</Popover.Title>
            <Popover.Description>
              Your project was last deployed 2 minutes ago.
            </Popover.Description>
          </Popover.Header>
          <Popover.CloseTrigger className="absolute top-4 right-4" asChild>
            <Button variant="ghost" aria-label="Close" size="icon-xs">
              <LuX />
            </Button>
          </Popover.CloseTrigger>
        </Popover.Content>
      </Popover.Positioner>
    </Portal>
  </Popover.Root>
)

const Overlays = () => (
  <div className="flex flex-col items-start gap-4">
    <HoverCardExample />
    <div className="flex flex-wrap gap-2">
      <TooltipExample />
      <DialogExample />
      <DrawerExample />
      <PopoverExample />
    </div>
  </div>
)

export { Overlays }
