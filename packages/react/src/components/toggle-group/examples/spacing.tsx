import { ToggleGroup } from ".."
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

export default function Compact() {
  return (
    <div className="flex flex-col gap-2">
      <ToggleGroup.Root size="icon-md" multiple spacing="regular">
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
      <ToggleGroup.Root size="icon-md" multiple spacing="separated">
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
      <ToggleGroup.Root size="icon-md" multiple spacing="attached">
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
