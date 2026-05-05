import { NumberInput } from "../"
import { GripIcon, MinusIcon, PlusIcon } from "lucide-react"

export default function Invalid() {
  return (
    <NumberInput.Root
      defaultValue="102"
      min={0}
      max={1}
      step={0.01}
      formatOptions={{ style: "percent" }}
    >
      <NumberInput.Label>Opacity</NumberInput.Label>
      <NumberInput.Control>
        <NumberInput.Input data-has-scrubber />
        <NumberInput.Scrubber>
          <GripIcon />
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
