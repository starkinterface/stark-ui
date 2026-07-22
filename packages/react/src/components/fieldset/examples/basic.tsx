import { Field, Fieldset, Input } from "../.."

export default function Basic() {
  return (
    <div className="flex h-dvh items-center justify-center p-6">
      <Fieldset.Root className="w-full max-w-sm">
        <Fieldset.Legend>Personal Information</Fieldset.Legend>
        <Fieldset.HelperText>
          Manage your account profile details and primary email address.
        </Fieldset.HelperText>
        <Fieldset.Content>
          <Field.Root>
            <Field.Label>Full Name</Field.Label>
            <Input placeholder="Full Name" defaultValue="Enji Kusnadi" />
          </Field.Root>

          <Field.Root>
            <Field.Label>Work Email</Field.Label>
            <Input type="email" placeholder="email@stark-ui.com" />
            <Field.HelperText>
              Used for system notifications and workspace access.
            </Field.HelperText>
          </Field.Root>
        </Fieldset.Content>
      </Fieldset.Root>
    </div>
  )
}
