import { Toggle } from "../"

export default function Variants() {
  return (
    <div className="flex gap-2">
      <Toggle.Root variant="ghost" variantActive="primary">
        ghost
      </Toggle.Root>

      <Toggle.Root variant="secondary" variantActive="primary">
        Secondary
      </Toggle.Root>

      <Toggle.Root variant="outline" variantActive="primary">
        Outline
      </Toggle.Root>
    </div>
  )
}
