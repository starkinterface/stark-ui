import { Button, Toast, Toaster, createToaster, Portal } from "../../"
import { RingLoader } from "@stark-loader/react"
import { useRef } from "react"
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
    case "loading": {
      return <RingLoader />
    }
    default: {
      return <LuInfo />
    }
  }
}

export default function Update() {
  const idRef = useRef<string | null>(null)

  const createToast = () => {
    idRef.current = toaster.create({
      title: "Sending message...",
      type: "loading",
    })
  }

  const updateToast = () => {
    if (!idRef.current) {
      return
    }
    toaster.update(idRef.current, {
      title: "Message sent",
      type: "success",
    })
  }

  return (
    <div className="flex h-dvh items-center justify-center gap-2 w-full max-w-2xl mx-auto">
      <Button variant="outline" onClick={createToast}>
        Send message
      </Button>
      <Button variant="outline" onClick={updateToast}>
        Mark as sent
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
