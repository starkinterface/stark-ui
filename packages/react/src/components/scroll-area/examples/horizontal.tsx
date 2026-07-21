import { ScrollArea } from "../"

export default function Horizontal() {
  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center w-full max-w-sm mx-auto">
      <ScrollArea.Root className="w-full h-auto border border-border rounded-xs">
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
