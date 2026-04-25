import { Switch } from "../"

export default function Sizes() {
  return (
    <div className="flex gap-2">
      <Switch.Root defaultChecked>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.HiddenInput />
      </Switch.Root>
      <Switch.Root defaultChecked variant="accent">
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.HiddenInput />
      </Switch.Root>
    </div>
  )
}
