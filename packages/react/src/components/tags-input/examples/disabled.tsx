import { TagsInput } from "../"
import { XIcon } from "lucide-react"
import { useState } from "react"

export default function Disabled() {
  const [value, setValue] = useState<string[]>(["React", "Solid", "Vue"])

  return (
    <div className="flex h-dvh items-center justify-center">
      <TagsInput.Root
        disabled
        value={value}
        onValueChange={(details) => setValue(details.value)}
        className="w-80"
      >
        <TagsInput.Label>Frameworks</TagsInput.Label>
        <TagsInput.Control>
          {value.map((val, index) => (
            <TagsInput.Item key={index} index={index} value={val}>
              <TagsInput.ItemPreview>
                <TagsInput.ItemText>{val}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger>
                  <XIcon />
                </TagsInput.ItemDeleteTrigger>
              </TagsInput.ItemPreview>
              <TagsInput.ItemInput />
            </TagsInput.Item>
          ))}
          <TagsInput.Input placeholder="Add framework..." />
          <TagsInput.ClearTrigger>
            <XIcon />
          </TagsInput.ClearTrigger>
        </TagsInput.Control>
        <TagsInput.HiddenInput />
      </TagsInput.Root>
    </div>
  )
}
