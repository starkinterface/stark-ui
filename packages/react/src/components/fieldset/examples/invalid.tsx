import { Field, Fieldset, Input } from "../.."

export default function Invalid() {
  return (
    <div className="flex h-dvh items-center justify-center p-6">
      <Fieldset.Root invalid className="w-full max-w-sm">
        <Fieldset.Legend>Domain Verification</Fieldset.Legend>
        <Fieldset.ErrorText>
          Please fix validation errors before linking custom domain.
        </Fieldset.ErrorText>
        <Fieldset.Content>
          <Field.Root invalid>
            <Field.Label>Custom Domain</Field.Label>
            <Input defaultValue="invalid_domain--stark" />
            <Field.ErrorText>
              Domain must be a valid FQDN (e.g. app.stark-ui.com).
            </Field.ErrorText>
          </Field.Root>

          <Field.Root invalid>
            <Field.Label>SSL Certificate CN</Field.Label>
            <Input defaultValue="*.stark" />
            <Field.ErrorText>
              Wildcard certificate format is not supported for this zone.
            </Field.ErrorText>
          </Field.Root>
        </Fieldset.Content>
      </Fieldset.Root>
    </div>
  )
}
