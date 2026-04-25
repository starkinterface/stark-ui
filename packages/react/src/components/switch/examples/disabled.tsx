import { Switch } from "../"

export default function Disabled() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Switch.Root disabled>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          <Switch.Label>Enable notifications</Switch.Label>
          <Switch.HiddenInput />
        </Switch.Root>
        <Switch.Root checked disabled>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          <Switch.Label>Enable security updates</Switch.Label>
          <Switch.HiddenInput />
        </Switch.Root>
      </div>
      <div className="flex gap-2">
        <Switch.Root disabled>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          <Switch.HiddenInput />
        </Switch.Root>
        <Switch.Root checked disabled>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          <Switch.HiddenInput />
        </Switch.Root>
        <Switch.Root disabled variant="accent">
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          <Switch.HiddenInput />
        </Switch.Root>
        <Switch.Root checked disabled variant="accent">
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          <Switch.HiddenInput />
        </Switch.Root>
      </div>
    </div>
  )
}
