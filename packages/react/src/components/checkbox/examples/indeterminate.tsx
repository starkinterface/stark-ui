import { Checkbox } from "../"
import { CheckIcon, MinusIcon } from "lucide-react"

export default function Indeterminate() {
  return (
    <div className="flex flex-col gap-4">
      <Checkbox.Root variant="accent" defaultChecked="indeterminate">
        <Checkbox.Control>
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
          <Checkbox.Indicator indeterminate>
            <MinusIcon />
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.Label>Select all tasks</Checkbox.Label>
        <Checkbox.HiddenInput />
      </Checkbox.Root>
      <Checkbox.Root defaultChecked="indeterminate">
        <Checkbox.Control>
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
          <Checkbox.Indicator indeterminate>
            <MinusIcon />
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.Label>Parent directory</Checkbox.Label>
        <Checkbox.HiddenInput />
      </Checkbox.Root>
    </div>
  )
}
