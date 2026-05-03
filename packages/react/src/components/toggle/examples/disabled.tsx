import { Toggle } from "../"

export default function Disabled() {
  return (
    <div className="flex gap-2">
      <Toggle.Root variant="ghost" variantActive="primary" disabled>
        ghost
      </Toggle.Root>

      <Toggle.Root variant="secondary" variantActive="primary" disabled>
        Secondary
      </Toggle.Root>

      <Toggle.Root variant="outline" variantActive="primary" disabled>
        Outline
      </Toggle.Root>
    </div>
  )
}
