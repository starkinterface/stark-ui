import { Avatar, HoverCard, Portal } from "../.."

export default function Basic() {
  return (
    <div className="flex h-dvh items-center justify-center p-6">
      <HoverCard.Root openDelay={100} closeDelay={150}>
        <HoverCard.Trigger asChild>
          <a
            href="https://github.com/starkinterface"
            target="_blank"
            rel="noreferrer"
            className="text-sm underline decoration-border"
          >
            @starkinterface
          </a>
        </HoverCard.Trigger>
        <Portal>
          <HoverCard.Positioner>
            <HoverCard.Content>
              <div className="flex gap-4">
                <Avatar.Root size="lg">
                  <Avatar.Image
                    src="https://github.com/starkinterface.png"
                    alt="Stark Interface"
                  />
                  <Avatar.Fallback>SI</Avatar.Fallback>
                </Avatar.Root>
                <div className="flex flex-col">
                  <h4 className="text-foreground">Stark Interface</h4>
                  <p className="text-sm text-foreground-muted">
                    Headless, accessible UI component primitives for React &
                    Vue.
                  </p>
                  <div className="mt-2 flex gap-4 text-sm text-foreground-muted">
                    <span>
                      <strong className="font-semibold text-foreground">
                        55
                      </strong>{" "}
                      Components
                    </span>
                    <span>
                      <strong className="font-semibold text-foreground">
                        1.2k
                      </strong>{" "}
                      Stars
                    </span>
                  </div>
                </div>
              </div>
            </HoverCard.Content>
          </HoverCard.Positioner>
        </Portal>
      </HoverCard.Root>
    </div>
  )
}
