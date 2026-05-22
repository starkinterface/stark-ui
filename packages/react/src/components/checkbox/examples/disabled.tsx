import { Checkbox } from "../"
import { CheckIcon, MinusIcon } from "lucide-react"

export default function Disabled() {
  return (
    <div className="flex flex-col gap-4">
      <Checkbox.Root disabled>
        <Checkbox.Control>
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
          <Checkbox.Indicator indeterminate>
            <MinusIcon />
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.Label>Enable notifications</Checkbox.Label>
        <Checkbox.HiddenInput />
      </Checkbox.Root>
      <Checkbox.Root disabled checked>
        <Checkbox.Control>
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
          <Checkbox.Indicator indeterminate>
            <MinusIcon />
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.Label>Subscribe to newsletter</Checkbox.Label>
        <Checkbox.HiddenInput />
      </Checkbox.Root>
    </div>
  )
}
