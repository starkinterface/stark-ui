import { Toggle } from "../"
import { BookmarkIcon } from "lucide-react"

export default function Icon() {
  return (
    <div className="flex gap-2">
      <Toggle.Root
        size="icon-md"
        aria-label="Save for later"
        variant="secondary"
        variantActive="primary"
      >
        <BookmarkIcon />
      </Toggle.Root>
    </div>
  )
}
