import { Tag } from "../"
import { XIcon } from "lucide-react"

export default function WithDelete() {
  return (
    <div className="flex gap-2">
      <Tag.Root>
        With Delete
        <Tag.DeleteTrigger>
          <XIcon />
        </Tag.DeleteTrigger>
      </Tag.Root>
    </div>
  )
}
