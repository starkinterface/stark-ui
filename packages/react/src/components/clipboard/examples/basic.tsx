import { Button, Clipboard } from "../../"
import { LuClipboard, LuCheck } from "react-icons/lu"

export default function Basic() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-md mx-auto">
      <Clipboard.Root value="https://stark-ui.com">
        <Clipboard.Control>
          <Clipboard.Trigger asChild>
            <Button size="icon-md" variant="secondary">
              <Clipboard.Indicator copied={<LuCheck />}>
                <LuClipboard />
              </Clipboard.Indicator>
            </Button>
          </Clipboard.Trigger>
        </Clipboard.Control>
      </Clipboard.Root>
    </div>
  )
}
