import { Tag } from "../"
import { XIcon } from "lucide-react"

export default function Closable() {
  return (
    <div className="flex gap-2">
      <Tag.Root>
        Closable Tag
        <Tag.CloseTrigger>
          <XIcon />
        </Tag.CloseTrigger>
      </Tag.Root>
    </div>
  )
}
