import { Collapsible } from "../"
import { ChevronRightIcon } from "lucide-react"

export default function Disabled() {
  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center w-full max-w-sm mx-auto">
      <Collapsible.Root disabled>
        <Collapsible.Trigger asChild>
          <button
            type="button"
            disabled
            className="flex items-center text-sm text-foreground-muted gap-1.5 focus-visible:focus-visible rounded-xs pe-1 data-disabled:text-foreground-inactive"
          >
            <Collapsible.Indicator>
              <ChevronRightIcon />
            </Collapsible.Indicator>
            Advanced Settings
          </button>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <Collapsible.Body>
            This section is no longer maintained and has been archived. Please
            refer to the latest release notes for up-to-date information.
          </Collapsible.Body>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  )
}
