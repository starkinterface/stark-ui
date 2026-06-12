import { Tooltip } from "../"
import { Button } from "../../button"

export default function Basic() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button variant="outline">Hover me</Button>
        </Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>Tooltip content</Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.Root>
    </div>
  )
}
