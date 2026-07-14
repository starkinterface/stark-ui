import { Button, Clipboard } from "../../"
import { LuClipboard, LuCheck } from "react-icons/lu"

export default function WithInput() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-md mx-auto">
      <Clipboard.Root value="https://stark-ui.com/docs/components/clipboard">
        <Clipboard.Label>Page Link</Clipboard.Label>
        <Clipboard.Control>
          <Clipboard.Input />
          <Clipboard.Trigger asChild>
            <Button size="icon-md" variant="outline">
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
