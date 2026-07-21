import { ScrollArea } from "../"

export default function Nested() {
  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center w-full max-w-sm mx-auto">
      <ScrollArea.Root className="w-sm h-64 border border-border rounded-xs">
        <ScrollArea.Viewport>
          <ScrollArea.Content className="p-4 min-w-0!">
            <div className="space-y-4">
              <p className="font-medium text-sm">
                Inner Region 1 (Horizontal Scroll)
              </p>
              <ScrollArea.Root className="border border-border rounded-xs bg-background-secondary">
                <ScrollArea.Viewport>
                  <ScrollArea.Content className="p-4">
                    <div className="flex gap-2">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-24 h-16 bg-background border border-border rounded flex items-center justify-center shrink-0 text-sm"
                        >
                          Inner {i + 1}
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

              <p className="font-medium text-sm">
                Inner Region 2 (Vertical Scroll)
              </p>
              <ScrollArea.Root className="h-36 border border-border rounded-xs bg-background-secondary">
                <ScrollArea.Viewport>
                  <ScrollArea.Content className="p-4">
                    <div className="flex flex-col gap-2">
                      {Array.from({ length: 15 }).map((_, i) => (
                        <div
                          key={i}
                          className="p-2 bg-background border border-border rounded text-sm"
                        >
                          Task Row {i + 1}
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
            </div>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </div>
  )
}
