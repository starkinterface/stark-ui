import { ToggleGroup } from "../"
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

export default function Basic() {
  return (
    <div className="flex gap-2">
      <ToggleGroup.Root size="icon-md" multiple>
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
