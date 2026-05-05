import { NumberInput } from "../"
import { MinusIcon, PlusIcon, MoveHorizontalIcon } from "lucide-react"

export default function Scrubber() {
  return (
    <NumberInput.Root defaultValue="100" min={0}>
      <NumberInput.Label>Amount</NumberInput.Label>
      <NumberInput.Control>
        <NumberInput.Input data-has-scrubber />
        <NumberInput.Scrubber>
          <MoveHorizontalIcon />
        </NumberInput.Scrubber>
        <NumberInput.TriggerGroup>
          <NumberInput.DecrementTrigger aria-label="Decrease quantity">
            <MinusIcon />
          </NumberInput.DecrementTrigger>
          <NumberInput.IncrementTrigger aria-label="Increase quantity">
            <PlusIcon />
          </NumberInput.IncrementTrigger>
        </NumberInput.TriggerGroup>
      </NumberInput.Control>
    </NumberInput.Root>
  )
}
