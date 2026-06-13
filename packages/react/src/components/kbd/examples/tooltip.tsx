import { Kbd } from "../"
import { Button } from "../../button"
import { Tooltip } from "../../tooltip"

export default function TooltipUsage() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <Tooltip.Root closeDelay={100} openDelay={200}>
        <Tooltip.Trigger asChild>
          <Button variant="outline">Hover me</Button>
        </Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content className="flex items-center gap-2">
            Delete deployment
            <Kbd.Root spacing="attached">
              <Kbd.Key>CTRL</Kbd.Key>
              <Kbd.Key>D</Kbd.Key>
            </Kbd.Root>
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.Root>
    </div>
  )
}
