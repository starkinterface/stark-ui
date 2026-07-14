"use client"

import {
  Button,
  Toast,
  Toaster,
  createToaster,
  Portal,
  ProgressBar,
  ProgressCircle,
} from "@stark-ui/react"
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
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-6">
        <ProgressCircle.Root defaultValue={42}>
          <ProgressCircle.Circle>
            <ProgressCircle.CircleTrack />
            <ProgressCircle.CircleRange />
          </ProgressCircle.Circle>
          <ProgressCircle.ValueText>
            <ProgressCircle.Context>
              {(context) => context.value}
            </ProgressCircle.Context>
          </ProgressCircle.ValueText>
        </ProgressCircle.Root>
        <Button variant="outline" onClick={triggerSuccess}>
          Show Toast
        </Button>
      </div>

      <div className="w-64">
        <ProgressBar.Root defaultValue={64}>
          <div className="flex justify-between gap-2">
            <ProgressBar.Label>Uploading file...</ProgressBar.Label>
            <ProgressBar.ValueText />
          </div>
          <ProgressBar.Track>
            <ProgressBar.Range />
          </ProgressBar.Track>
        </ProgressBar.Root>
      </div>

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
