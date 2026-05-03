import { Toggle } from "../"

export default function VariantActive() {
  return (
    <div className="flex gap-2">
      <Toggle.Root variant="ghost" variantActive="accent">
        ghost
      </Toggle.Root>

      <Toggle.Root variant="secondary" variantActive="accent">
        Secondary
      </Toggle.Root>

      <Toggle.Root variant="outline" variantActive="accent">
        Outline
      </Toggle.Root>
    </div>
  )
}
