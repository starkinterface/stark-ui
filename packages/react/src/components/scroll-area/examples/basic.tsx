import { ScrollArea } from "../"

export default function Basic() {
  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center w-full max-w-sm mx-auto">
      <ScrollArea.Root className="w-sm h-64 border border-border rounded-xs">
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
    </div>
  )
}
