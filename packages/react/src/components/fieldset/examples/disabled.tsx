import { Field, Fieldset, Input } from "../.."

export default function Disabled() {
  return (
    <div className="flex h-dvh items-center justify-center p-6">
      <Fieldset.Root disabled className="w-full max-w-sm">
        <Fieldset.Legend>Archived Gateway Settings</Fieldset.Legend>
        <Fieldset.HelperText>
          This integration is deprecated and locked from edits.
        </Fieldset.HelperText>
        <Fieldset.Content>
          <Field.Root disabled>
            <Field.Label>Legacy Webhook Endpoint</Field.Label>
            <Input defaultValue="https://api.stark-ui.com/v1/legacy-hook" />
          </Field.Root>

          <Field.Root disabled>
            <Field.Label>Secret Signing Key</Field.Label>
            <Input defaultValue="whsec_998877665544332211" type="password" />
          </Field.Root>
        </Fieldset.Content>
      </Fieldset.Root>
    </div>
  )
}
