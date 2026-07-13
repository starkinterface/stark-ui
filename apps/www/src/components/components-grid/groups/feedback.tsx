"use client"

import { Button, Toast, Toaster, createToaster, Portal } from "@stark-ui/react"
import { LuCheck, LuX } from "react-icons/lu"

import type { ToastRootProps } from "@stark-ui/react"

const toaster = createToaster({
  gap: 16,
  max: 3,
  overlap: true,
  placement: "bottom-end",
})

const Feedback = () => {
  const triggerSuccess = () => {
    toaster.create({
      description: "Deployment has been successfully updated.",
      title: "Success",
      type: "success",
    })
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={triggerSuccess}>
        Show Toast
      </Button>

      <Portal>
        <Toaster toaster={toaster}>
          {(toast) => (
            <Toast.Root
              key={toast.id}
              type={toast.type as ToastRootProps["type"]}
            >
              <Toast.Title>
                <LuCheck />
                {toast.title}
              </Toast.Title>
              <Toast.Description>{toast.description}</Toast.Description>
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

export { Feedback }
