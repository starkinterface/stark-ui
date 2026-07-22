import { Field, Fieldset, Input, PasswordInput } from "../.."
import { Eye, EyeOff } from "lucide-react"

export default function WithInput() {
  return (
    <div className="flex h-dvh items-center justify-center p-6">
      <Fieldset.Root className="w-full max-w-sm">
        <Fieldset.Legend>Account Security</Fieldset.Legend>
        <Fieldset.HelperText>
          Update your sign-in credentials and security access password.
        </Fieldset.HelperText>
        <Fieldset.Content>
          <Field.Root>
            <Field.Label>Email Address</Field.Label>
            <Input type="Email" defaultValue="dev@stark-ui.com" />
          </Field.Root>

          <PasswordInput.Root>
            <PasswordInput.Label>Current Password</PasswordInput.Label>
            <PasswordInput.Control>
              <PasswordInput.Input placeholder="Enter your password" />
              <PasswordInput.Addon data-align="inline-end">
                <PasswordInput.VisibilityTrigger>
                  <PasswordInput.Indicator fallback={<EyeOff />}>
                    <Eye />
                  </PasswordInput.Indicator>
                </PasswordInput.VisibilityTrigger>
              </PasswordInput.Addon>
            </PasswordInput.Control>
          </PasswordInput.Root>
        </Fieldset.Content>
      </Fieldset.Root>
    </div>
  )
}
