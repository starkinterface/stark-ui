import { Fieldset, Switch } from "../.."

export default function WithSwitch() {
  return (
    <div className="flex h-dvh items-center justify-center p-6">
      <Fieldset.Root className="w-full max-w-sm">
        <Fieldset.Legend>Security & Access Controls</Fieldset.Legend>
        <Fieldset.HelperText>
          Toggle automated protection guardrails and access restrictions.
        </Fieldset.HelperText>
        <Fieldset.Content>
          <Switch.Root
            defaultChecked
            className="flex items-center justify-between"
          >
            <Switch.Label>Enforce Two-Factor Authentication</Switch.Label>
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Switch.HiddenInput />
          </Switch.Root>

          <Switch.Root
            defaultChecked
            className="flex items-center justify-between"
          >
            <Switch.Label>Automated Threat Detection</Switch.Label>
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Switch.HiddenInput />
          </Switch.Root>

          <Switch.Root className="flex items-center justify-between">
            <Switch.Label>Public Sandbox Access</Switch.Label>
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Switch.HiddenInput />
          </Switch.Root>
        </Fieldset.Content>
      </Fieldset.Root>
    </div>
  )
}
