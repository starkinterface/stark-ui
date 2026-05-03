import { Toggle } from "../"

export default function Sizes() {
  return (
    <div className="flex gap-2">
      <Toggle.Root size="xs" variant="secondary" variantActive="primary">
        Extra Small
      </Toggle.Root>

      <Toggle.Root
        size="sm"
        variant="secondary"
        variantActive="primary"
        defaultPressed={true}
      >
        Small
      </Toggle.Root>

      <Toggle.Root
        variant="secondary"
        variantActive="primary"
        defaultPressed={true}
      >
        Medium
      </Toggle.Root>

      <Toggle.Root size="lg" variant="secondary" variantActive="primary">
        Large
      </Toggle.Root>
    </div>
  )
}
