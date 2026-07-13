import { Button, Toast, Toaster, createToaster, Portal } from "../../"
import { LuX, LuInfo } from "react-icons/lu"

import type { ToastRootProps } from "../../"

const toaster = createToaster({
  duration: 100_000,
  gap: 8,
  max: 5,
  overlap: false,
  placement: "bottom-end",
})

export default function Basic() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <Button
        variant="outline"
        onClick={() =>
          toaster.create({
            title: "Scheduled for tomorrow",
            type: "info",
          })
        }
      >
        Schedule meeting
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
