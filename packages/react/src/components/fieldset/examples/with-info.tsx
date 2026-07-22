import { Field, Fieldset, Input } from "../.."

export default function WithInfo() {
  return (
    <div className="flex h-dvh items-center justify-center p-6">
      <Fieldset.Root className="w-full max-w-sm">
        <Fieldset.Legend>Workspace Profile</Fieldset.Legend>
        <Fieldset.HelperText>
          Configure your team workspace identifier and public display name.
        </Fieldset.HelperText>
        <Fieldset.Content>
          <Field.Root>
            <Field.Label>Organization Name</Field.Label>
            <Input placeholder="eg. Stark Interface" />
          </Field.Root>

          <Field.Root>
            <Field.Label>Workspace Domain</Field.Label>
            <Input placeholder="eg. ux" defaultValue="ux" />
            <Field.HelperText>
              Your team will access resources at ux.stark-ui.com.
            </Field.HelperText>
          </Field.Root>
        </Fieldset.Content>
      </Fieldset.Root>
    </div>
  )
}
