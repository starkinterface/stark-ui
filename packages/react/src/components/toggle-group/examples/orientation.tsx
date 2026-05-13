import { ToggleGroup } from "../"
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

export default function Orientation() {
  return (
    <div className="flex gap-2">
      <ToggleGroup.Root
        orientation="horizontal"
        size="icon-md"
        multiple
        spacing="separated"
      >
        <ToggleGroup.Item aria-label="Bold" value="bold">
          <BoldIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Italic" value="italic">
          <ItalicIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Underline" value="underline">
          <UnderlineIcon />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
      <ToggleGroup.Root
        orientation="vertical"
        size="icon-md"
        multiple
        spacing="separated"
      >
        <ToggleGroup.Item aria-label="Bold" value="bold">
          <BoldIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Italic" value="italic">
          <ItalicIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Underline" value="underline">
          <UnderlineIcon />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  )
}
