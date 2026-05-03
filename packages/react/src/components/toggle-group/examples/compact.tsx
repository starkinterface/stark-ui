import { ToggleGroup } from "../"
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

export default function Compact() {
  return (
    <div className="flex flex-col gap-2">
      <ToggleGroup.Root size="icon-md" multiple compact={false}>
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
      <ToggleGroup.Root size="icon-md" multiple compact={true}>
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
