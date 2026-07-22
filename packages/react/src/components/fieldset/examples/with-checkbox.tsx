import { Checkbox, Fieldset } from "../.."
import { CheckIcon } from "lucide-react"

export default function WithCheckbox() {
  return (
    <div className="flex h-dvh items-center justify-center p-6">
      <Fieldset.Root className="w-full max-w-sm">
        <Fieldset.Legend>Notification Channels</Fieldset.Legend>
        <Fieldset.HelperText>
          Select the alert types and digests sent to your developer dashboard.
        </Fieldset.HelperText>
        <Fieldset.Content>
          <Checkbox.Root defaultChecked>
            <Checkbox.Control>
              <Checkbox.Indicator>
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Control>
            <Checkbox.Label>Security & Vulnerability Alerts</Checkbox.Label>
            <Checkbox.HiddenInput />
          </Checkbox.Root>

          <Checkbox.Root defaultChecked>
            <Checkbox.Control>
              <Checkbox.Indicator>
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Control>
            <Checkbox.Label>Deployment Status & Failure Notices</Checkbox.Label>
            <Checkbox.HiddenInput />
          </Checkbox.Root>

          <Checkbox.Root>
            <Checkbox.Control>
              <Checkbox.Indicator>
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Control>
            <Checkbox.Label>Weekly Performance Analytics</Checkbox.Label>
            <Checkbox.HiddenInput />
          </Checkbox.Root>
        </Fieldset.Content>
      </Fieldset.Root>
    </div>
  )
}
