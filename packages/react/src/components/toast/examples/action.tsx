import { Button, Toast, Toaster, createToaster, Portal } from "../../"
import { LuX, LuInfo } from "react-icons/lu"

import type { ToastRootProps } from "../../"

const toaster = createToaster({
  gap: 16,
  overlap: true,
  placement: "bottom-end",
})

export default function Action() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <Button
        variant="outline"
        onClick={() =>
          toaster.create({
            description: "The draft file has been moved to trash.",
            title: "File Deleted",
            type: "info",
          })
        }
      >
        Delete Draft
      </Button>

      <Portal>
        <Toaster toaster={toaster}>
          {(toast) => (
            <Toast.Root
              key={toast.id}
              type={toast.type as ToastRootProps["type"]}
            >
              <Toast.Title>
                <LuInfo />
                {toast.title}
              </Toast.Title>
              <Toast.Description>{toast.description}</Toast.Description>
              <div className="flex gap-2 mt-1 justify-end">
                <Toast.ActionTrigger asChild>
                  <Button size="sm">Undo</Button>
                </Toast.ActionTrigger>
              </div>
              <Toast.CloseTrigger asChild className="absolute top-4 right-4">
                <Button variant="ghost" aria-label="Close" size="icon-xs">
                  <LuX />
                </Button>
              </Toast.CloseTrigger>
            </Toast.Root>
          )}
        </Toaster>
      </Portal>
    </div>
  )
}
