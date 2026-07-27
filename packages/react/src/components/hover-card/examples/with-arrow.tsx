import { Avatar, HoverCard, Portal } from "../.."

export default function WithArrow() {
  return (
    <div className="flex h-dvh items-center justify-center p-6">
      <HoverCard.Root openDelay={100} closeDelay={150}>
        <HoverCard.Trigger asChild>
          <span className="cursor-pointer text-sm font-medium text-foreground-muted hover:text-foreground">
            Hover for author
          </span>
        </HoverCard.Trigger>
        <Portal>
          <HoverCard.Positioner>
            <HoverCard.Content>
              <HoverCard.Arrow>
                <HoverCard.ArrowTip />
              </HoverCard.Arrow>
              <div className="flex gap-4">
                <Avatar.Root size="lg">
                  <Avatar.Image
                    src="https://github.com/enjidev.png"
                    alt="Enji Kusnadi"
                  />
                  <Avatar.Fallback>EK</Avatar.Fallback>
                </Avatar.Root>
                <div className="flex flex-col">
                  <h4 className="text-foreground">Enji Kusnadi</h4>
                  <p className="text-sm text-foreground-muted">
                    Front-end Developer
                  </p>
                </div>
              </div>
            </HoverCard.Content>
          </HoverCard.Positioner>
        </Portal>
      </HoverCard.Root>
    </div>
  )
}
