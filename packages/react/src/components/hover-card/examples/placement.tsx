import { Button, HoverCard, Portal } from "../.."

type PlacementType = "top" | "bottom" | "left" | "right"

export default function Placement() {
  const placements: PlacementType[] = ["left", "top", "bottom", "right"]

  return (
    <div className="flex h-dvh flex-wrap items-center justify-center gap-4 p-6">
      {placements.map((placement) => (
        <HoverCard.Root
          key={placement}
          openDelay={0}
          closeDelay={0}
          positioning={{ placement }}
        >
          <HoverCard.Trigger asChild>
            <Button variant="outline">
              {placement.toUpperCase()} Placement
            </Button>
          </HoverCard.Trigger>
          <Portal>
            <HoverCard.Positioner>
              <HoverCard.Content>
                <HoverCard.Arrow>
                  <HoverCard.ArrowTip />
                </HoverCard.Arrow>
                <div className="flex flex-col">
                  <h4 className="text-foreground capitalize">
                    {placement} placement
                  </h4>
                  <p className="text-sm text-foreground-muted">
                    This HoverCard is positioned at the {placement} of the
                    trigger.
                  </p>
                </div>
              </HoverCard.Content>
            </HoverCard.Positioner>
          </Portal>
        </HoverCard.Root>
      ))}
    </div>
  )
}
