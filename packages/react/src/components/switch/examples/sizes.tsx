import { Switch } from "../"

export default function Sizes() {
  return (
    <div className="flex gap-2">
      <Switch.Root size="sm">
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.HiddenInput />
      </Switch.Root>
      <Switch.Root size="md">
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.HiddenInput />
      </Switch.Root>
      <Switch.Root size="lg">
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.HiddenInput />
      </Switch.Root>
    </div>
  )
}
