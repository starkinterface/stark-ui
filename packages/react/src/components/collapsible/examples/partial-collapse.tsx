import { Collapsible } from "../"
import { cx } from "@stark-ui/classes"

export default function PartialCollapse() {
  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center w-full max-w-md mx-auto">
      <Collapsible.Root collapsedHeight="40px">
        <Collapsible.Content>
          <Collapsible.Context>
            {(context) => (
              <Collapsible.Body
                className={cx(
                  "text-sm space-y-1",
                  !context.visible && "line-clamp-2"
                )}
              >
                <p>
                  Introduces the new Collapsible and Accordion components,
                  improved theming support, and a number of bug fixes to the
                  Select and Combobox components.
                </p>
                <p>
                  Stark UI supports modern React frameworks including Next.js,
                  Remix, and Vite out of the box.
                </p>
              </Collapsible.Body>
            )}
          </Collapsible.Context>
        </Collapsible.Content>
        <Collapsible.Context>
          {(context) => (
            <Collapsible.Trigger asChild>
              <button className="flex mt-1 items-center text-sm text-foreground-muted gap-1.5 focus-visible:focus-visible rounded-xs pe-1">
                {context.open ? "See less" : "See more"}
              </button>
            </Collapsible.Trigger>
          )}
        </Collapsible.Context>
      </Collapsible.Root>
    </div>
  )
}
