import { Clipboard, InputGroup, Field } from "../../"
import { useState } from "react"
import { LuClipboard, LuCheck } from "react-icons/lu"

export default function WithInputGroup() {
  const [value, setValue] = useState(
    "https://stark-ui.com/docs/components/clipboard"
  )

  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-md mx-auto">
      <Clipboard.Root
        value={value}
        onValueChange={(details) => setValue(details.value)}
      >
        <Field.Root>
          <Field.Label>Docs Link</Field.Label>
          <InputGroup.Root>
            <InputGroup.Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <InputGroup.Addon data-align="inline-end">
              <Clipboard.Trigger asChild>
                <InputGroup.Button
                  aria-label="Copy"
                  size="icon-xs"
                  variant="secondary"
                >
                  <Clipboard.Indicator copied={<LuCheck />}>
                    <LuClipboard />
                  </Clipboard.Indicator>
                </InputGroup.Button>
              </Clipboard.Trigger>
            </InputGroup.Addon>
          </InputGroup.Root>
        </Field.Root>
      </Clipboard.Root>
    </div>
  )
}
