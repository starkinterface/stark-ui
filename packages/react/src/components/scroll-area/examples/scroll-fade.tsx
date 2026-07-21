import { ScrollArea } from "../"

export default function ScrollFade() {
  return (
    <div className="flex flex-col gap-6 h-dvh items-center justify-center w-full max-w-sm mx-auto">
      <div className="w-full">
        <h4 className="font-semibold text-base mb-1">Scroll Fade Example</h4>
        <p className="text-foreground-muted text-sm">
          Fades are applied dynamically to any edge where content overflow is
          present.
        </p>
      </div>

      <ScrollArea.Root
        scrollFade
        className="w-sm h-64 border border-border rounded-xs"
      >
        <ScrollArea.Viewport>
          <ScrollArea.Content className="p-4">
            <div className="flex flex-col gap-2">
              {Array.from({ length: 25 }).map((_, i) => (
                <div
                  className="flex items-center justify-center h-10 bg-background-secondary rounded-xs text-sm"
                  key={i}
                >
                  Item {i + 1}
                </div>
              ))}
            </div>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollArea.Root>

      <ScrollArea.Root
        scrollFade
        className="w-full h-auto border border-border rounded-xs"
      >
        <ScrollArea.Viewport>
          <ScrollArea.Content className="p-4">
            <div className="flex gap-2">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  className="flex items-center justify-center w-32 h-10 bg-background-secondary rounded-xs text-sm"
                  key={i}
                >
                  Item {i + 1}
                </div>
              ))}
            </div>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="horizontal">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </div>
  )
}
