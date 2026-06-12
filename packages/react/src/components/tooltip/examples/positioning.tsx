import { Tooltip } from "../"
import { Button } from "../../button"

export default function Positioning() {
  return (
    <div className="flex h-dvh items-center justify-center gap-2">
      <Tooltip.Root
        positioning={{ placement: "left" }}
        openDelay={0}
        closeDelay={0}
      >
        <Tooltip.Trigger asChild>
          <Button variant="outline">Left</Button>
        </Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>Left tooltip</Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.Root>

      <Tooltip.Root
        positioning={{ placement: "bottom" }}
        openDelay={0}
        closeDelay={0}
      >
        <Tooltip.Trigger asChild>
          <Button variant="outline">Bottom</Button>
        </Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>Bottom tooltip</Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.Root>

      <Tooltip.Root
        positioning={{ placement: "top" }}
        openDelay={0}
        closeDelay={0}
      >
        <Tooltip.Trigger asChild>
          <Button variant="outline">Top</Button>
        </Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>Top tooltip</Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.Root>

      <Tooltip.Root
        positioning={{ placement: "right" }}
        openDelay={0}
        closeDelay={0}
      >
        <Tooltip.Trigger asChild>
          <Button variant="outline">Right</Button>
        </Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>Right tooltip</Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.Root>
    </div>
  )
}
