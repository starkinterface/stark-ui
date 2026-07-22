import { Field, Fieldset, Textarea } from "../.."

export default function WithTextarea() {
  return (
    <div className="flex h-dvh items-center justify-center p-6">
      <Fieldset.Root className="w-full max-w-sm">
        <Fieldset.Legend>Project Overview</Fieldset.Legend>
        <Fieldset.HelperText>
          Summarize your repository goals and architecture scope.
        </Fieldset.HelperText>
        <Fieldset.Content>
          <Field.Root>
            <Field.Label>Description</Field.Label>
            <Textarea
              placeholder="Describe your project architecture, dependencies, and core objectives..."
              rows={4}
            />
            <Field.HelperText>
              Markdown supported. Maximum 500 characters.
            </Field.HelperText>
          </Field.Root>
        </Fieldset.Content>
      </Fieldset.Root>
    </div>
  )
}
