import { Button, Toast, Toaster, createToaster, Portal } from "../../"
import { LuX, LuInfo } from "react-icons/lu"

import type { ToastRootProps } from "../../"

const topStartToaster = createToaster({ gap: 16, placement: "top-start" })
const topToaster = createToaster({ gap: 16, placement: "top" })
const topEndToaster = createToaster({ gap: 16, placement: "top-end" })
const bottomStartToaster = createToaster({ gap: 16, placement: "bottom-start" })
const bottomToaster = createToaster({ gap: 16, placement: "bottom" })
const bottomEndToaster = createToaster({ gap: 16, placement: "bottom-end" })

const toasterMap = {
  bottom: bottomToaster,
  "bottom-end": bottomEndToaster,
  "bottom-start": bottomStartToaster,
  top: topToaster,
  "top-end": topEndToaster,
  "top-start": topStartToaster,
}

const renderToaster = (toaster: ReturnType<typeof createToaster>) => (
  <Portal>
    <Toaster toaster={toaster}>
      {(toast) => (
        <Toast.Root key={toast.id} type={toast.type as ToastRootProps["type"]}>
          <Toast.Title>
            <LuInfo />
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
)

export default function Placement() {
  const triggerToast = (
    placement:
      | "top-start"
      | "top"
      | "top-end"
      | "bottom-start"
      | "bottom"
      | "bottom-end"
  ) => {
    const text = `This toast is placed at ${placement}.`
    const toaster = toasterMap[placement]

    toaster.create({
      description: text,
      title: "Placement Config",
      type: "info",
    })
  }

  return (
    <div className="flex h-dvh items-center justify-center gap-2 w-full max-w-2xl mx-auto flex-wrap">
      <Button variant="outline" onClick={() => triggerToast("top-start")}>
        Top Start
      </Button>
      <Button variant="outline" onClick={() => triggerToast("top")}>
        Top
      </Button>
      <Button variant="outline" onClick={() => triggerToast("top-end")}>
        Top End
      </Button>
      <Button variant="outline" onClick={() => triggerToast("bottom-start")}>
        Bottom Start
      </Button>
      <Button variant="outline" onClick={() => triggerToast("bottom")}>
        Bottom
      </Button>
      <Button variant="outline" onClick={() => triggerToast("bottom-end")}>
        Bottom End
      </Button>

      {renderToaster(topStartToaster)}
      {renderToaster(topToaster)}
      {renderToaster(topEndToaster)}
      {renderToaster(bottomStartToaster)}
      {renderToaster(bottomToaster)}
      {renderToaster(bottomEndToaster)}
    </div>
  )
}
