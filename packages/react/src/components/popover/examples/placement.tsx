import { Button, Popover, Portal } from "../../"
import { LuX } from "react-icons/lu"

type PlacementType = "top" | "bottom" | "left" | "right"

export default function Placement() {
  const placements: PlacementType[] = ["left", "bottom", "top", "right"]

  return (
    <div className="flex flex-wrap gap-4 h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      {placements.map((placement) => (
        <Popover.Root key={placement} positioning={{ placement }}>
          <Popover.Trigger asChild>
            <Button variant="outline">
              {placement.toUpperCase()} Placement
            </Button>
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner>
              <Popover.Content>
                <Popover.Arrow>
                  <Popover.ArrowTip />
                </Popover.Arrow>
                <Popover.Header>
                  <Popover.Title>Popover Placement</Popover.Title>
                  <Popover.Description>
                    This popover appears at the {placement} of the trigger.
                  </Popover.Description>
                </Popover.Header>
                <Popover.CloseTrigger
                  className="absolute top-4 right-4"
                  asChild
                >
                  <Button variant="ghost" aria-label="Close" size="icon-xs">
                    <LuX />
                  </Button>
                </Popover.CloseTrigger>
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </Popover.Root>
      ))}
    </div>
  )
}
