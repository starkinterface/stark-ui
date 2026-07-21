import { ScrollArea } from "../"

export default function BothDirections() {
  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center w-full max-w-sm mx-auto">
      <ScrollArea.Root className="w-sm h-72 border border-border rounded-xs">
        <ScrollArea.Viewport>
          <ScrollArea.Content className="p-4">
            <div className="w-150 rounded-xs h-100 flex items-center justify-center text-foreground-muted bg-background-secondary border border-border border-dashed">
              Grid Content
            </div>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar orientation="horizontal">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </div>
  )
}
