import { NumberInput } from "../"
import { MinusIcon, PlusIcon, GripIcon } from "lucide-react"

export default function Basic() {
  return (
    <NumberInput.Root defaultValue="1" min={0}>
      <NumberInput.Label>Quantity</NumberInput.Label>
      <NumberInput.Control>
        <NumberInput.Input />
        <NumberInput.Scrubber asChild>
          <NumberInput.Addon data-align="inline-start">
            <NumberInput.Icon>
              <GripIcon />
            </NumberInput.Icon>
          </NumberInput.Addon>
        </NumberInput.Scrubber>
        <NumberInput.Addon data-align="inline-end">
          <NumberInput.DecrementTrigger aria-label="Decrease quantity">
            <MinusIcon />
          </NumberInput.DecrementTrigger>
          <NumberInput.IncrementTrigger aria-label="Increase quantity">
            <PlusIcon />
          </NumberInput.IncrementTrigger>
        </NumberInput.Addon>
      </NumberInput.Control>
    </NumberInput.Root>
  )
}
