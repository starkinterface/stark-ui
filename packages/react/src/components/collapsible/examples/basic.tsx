import { Collapsible } from "../"
import { ChevronRightIcon } from "lucide-react"

export default function Basic() {
  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center w-full max-w-sm mx-auto">
      <Collapsible.Root>
        <Collapsible.Trigger asChild>
          <button className="flex items-center text-sm text-foreground-muted gap-1.5 focus-visible:focus-visible rounded-xs pe-1">
            <Collapsible.Indicator>
              <ChevronRightIcon />
            </Collapsible.Indicator>
            Advanced Settings
          </button>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <Collapsible.Body className="text-sm mt-2">
            Introduces the new Collapsible and Accordion components, improved
            theming support, and a number of bug fixes to the Select and
            Combobox components.
          </Collapsible.Body>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  )
}
