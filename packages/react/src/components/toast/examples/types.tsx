import { Button, Toast, Toaster, createToaster, Portal } from "../../"
import { RingLoader } from "@stark-loader/react"
import { LuX, LuInfo, LuCheck } from "react-icons/lu"

import type { ToastRootProps } from "../../"

const toaster = createToaster({
  gap: 16,
  overlap: true,
  placement: "bottom-end",
})

const getIcon = (type: string) => {
  switch (type) {
    case "success": {
      return <LuCheck />
    }
    case "warning": {
      return <LuInfo />
    }
    case "error": {
      return <LuX />
    }
    case "loading": {
      return <RingLoader />
    }
    default: {
      return <LuInfo />
    }
  }
}

const configs = {
  error: {
    description: "Failed to save data. Try again.",
    title: "Error",
  },
  info: {
    description: "This is an informational toast.",
    title: "Info",
  },
  loading: {
    description: "Syncing changes to database...",
    title: "Loading",
  },
  success: {
    description: "Action completed successfully!",
    title: "Success",
  },
  warning: {
    description: "Please review potential conflicts.",
    title: "Warning",
  },
}

export default function Types() {
  const triggerToast = (
    type: "info" | "success" | "warning" | "error" | "loading"
  ) => {
    toaster.create({
      ...configs[type],
      type,
    })
  }

  return (
    <div className="flex h-dvh items-center justify-center gap-2 w-full max-w-2xl mx-auto flex-wrap">
      <Button variant="outline" onClick={() => triggerToast("info")}>
        Info
      </Button>
      <Button variant="outline" onClick={() => triggerToast("success")}>
        Success
      </Button>
      <Button variant="outline" onClick={() => triggerToast("warning")}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => triggerToast("error")}>
        Error
      </Button>
      <Button variant="outline" onClick={() => triggerToast("loading")}>
        Loading
      </Button>

      <Portal>
        <Toaster toaster={toaster}>
          {(toast) => (
            <Toast.Root
              key={toast.id}
              type={toast.type as ToastRootProps["type"]}
            >
              <Toast.Title>
                {getIcon(toast.type ?? "info")}
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
