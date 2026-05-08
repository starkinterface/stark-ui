import { Field } from "../"
import { Input } from "../../input"

export default function Disabled() {
  return (
    <div className="flex flex-col gap-4">
      <Field.Root disabled>
        <Field.Label>Your name</Field.Label>
        <Input placeholder="Enter your name" />
        <Field.HelperText>
          This can be your real name or a nickname.
        </Field.HelperText>
      </Field.Root>
    </div>
  )
}
