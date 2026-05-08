import { Field } from "../"
import { Input } from "../../input"

export default function Invalid() {
  return (
    <div className="flex flex-col gap-4">
      <Field.Root invalid>
        <Field.Label>Your name</Field.Label>
        <Input placeholder="Enter your name" />
        <Field.ErrorText>
          Your name must be at least 3 characters long.
        </Field.ErrorText>
      </Field.Root>
    </div>
  )
}
