import { Toggle } from "../"
import { HeartIcon } from "lucide-react"

export default function Basic() {
  return (
    <Toggle.Root aria-label="Toggle favorite">
      <Toggle.Indicator fallback={<HeartIcon className="size-4" />}>
        <HeartIcon className="size-4 fill-current" />
      </Toggle.Indicator>
    </Toggle.Root>
  )
}
