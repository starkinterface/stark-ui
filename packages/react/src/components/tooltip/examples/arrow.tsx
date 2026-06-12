import { Tooltip } from "../"
import { Button } from "../../button"

export default function Arrow() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <Tooltip.Root closeDelay={100} openDelay={200}>
        <Tooltip.Trigger asChild>
          <Button variant="outline">Hover me</Button>
        </Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            Tooltip content with arrow
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.Root>
    </div>
  )
}
