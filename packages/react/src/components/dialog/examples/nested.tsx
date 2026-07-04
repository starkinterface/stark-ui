import { Button, Dialog, Field, Input, Portal, useDialog } from "../../"
import { X } from "lucide-react"

export default function Nested() {
  const level1Dialog = useDialog()
  const level2Dialog = useDialog()
  const level3Dialog = useDialog()

  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-sm mx-auto">
      {/* Level 1 Dialog: Database Settings */}
      <Dialog.RootProvider value={level1Dialog} lazyMount unmountOnExit>
        <Dialog.Trigger asChild>
          <Button variant="accent">Open Database Connection</Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <div className="flex items-center gap-2">
                  <Dialog.Title>Database Connection</Dialog.Title>
                </div>
                <Dialog.Description>
                  Manage credentials for your production database.
                </Dialog.Description>
              </Dialog.Header>
              <Dialog.Body>
                <div className="flex flex-col gap-2 rounded-md border border-border bg-background-surface p-4">
                  <div className="flex justify-between items-center text-sm border-b border-border pb-2">
                    <span className="text-foreground-muted">Host</span>
                    <span className="font-mono">db.stark-infra.net</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-border pb-2">
                    <span className="text-foreground-muted">Database</span>
                    <span className="font-mono">production_replica</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-foreground-muted">Username</span>
                    <span className="font-mono">stark_admin</span>
                  </div>
                </div>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.CloseTrigger asChild>
                  <Button variant="outline" size="md">
                    Close
                  </Button>
                </Dialog.CloseTrigger>
                <Button
                  onClick={() => level2Dialog.setOpen(true)}
                  variant="accent"
                  size="md"
                >
                  Rotate Credentials
                </Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger className="absolute top-4 right-4" asChild>
                <Button variant="ghost" aria-label="Close" size="icon-xs">
                  <X />
                </Button>
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.RootProvider>

      {/* Level 2 Dialog: Configure Rotation */}
      <Dialog.RootProvider
        value={level2Dialog}
        lazyMount
        unmountOnExit
        placement="bottom"
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Rotate Credentials</Dialog.Title>
                <Dialog.Description>
                  Configure and trigger a rotation of the database credentials.
                </Dialog.Description>
              </Dialog.Header>
              <Dialog.Body>
                <div className="flex flex-col gap-4">
                  <Field.Root>
                    <Field.Label>Reason for rotation</Field.Label>
                    <Input placeholder="e.g., Scheduled security audit" />
                    <Field.HelperText>
                      Provide a brief justification for the audit log.
                    </Field.HelperText>
                  </Field.Root>
                </div>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.CloseTrigger asChild>
                  <Button variant="outline" size="md">
                    Cancel
                  </Button>
                </Dialog.CloseTrigger>
                <Button
                  onClick={() => level3Dialog.setOpen(true)}
                  variant="accent"
                  size="md"
                >
                  Generate New Keys
                </Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger className="absolute top-4 right-4" asChild>
                <Button variant="ghost" aria-label="Close" size="icon-xs">
                  <X />
                </Button>
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.RootProvider>

      {/* Level 3 Dialog: Confirm Rotation */}
      <Dialog.RootProvider
        value={level3Dialog}
        lazyMount
        unmountOnExit
        placement="bottom"
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title className="text-foreground-danger">
                  Confirm Rotation
                </Dialog.Title>
                <Dialog.Description>
                  This action has severe implications for the running services.
                </Dialog.Description>
              </Dialog.Header>
              <Dialog.Footer>
                <Dialog.CloseTrigger asChild>
                  <Button variant="outline" size="md">
                    Go Back
                  </Button>
                </Dialog.CloseTrigger>
                <Button
                  onClick={() => {
                    level3Dialog.setOpen(false)
                    level2Dialog.setOpen(false)
                    level1Dialog.setOpen(false)
                  }}
                  variant="danger"
                  size="md"
                >
                  Force Rotate & Close
                </Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger className="absolute top-4 right-4" asChild>
                <Button variant="ghost" aria-label="Close" size="icon-xs">
                  <X />
                </Button>
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.RootProvider>
    </div>
  )
}
