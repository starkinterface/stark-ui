import { NumberInput } from "../"
import { Button } from "../../button"
import { MinusIcon, PlusIcon, GripIcon } from "lucide-react"

export default function Disabled() {
  return (
    <NumberInput.Root defaultValue="1" min={0} disabled>
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
          <NumberInput.DecrementTrigger asChild>
            <Button
              size="icon-xs"
              aria-label="Decrease quantity"
              variant="outline"
            >
              <MinusIcon />
            </Button>
          </NumberInput.DecrementTrigger>
          <NumberInput.IncrementTrigger asChild>
            <Button
              size="icon-xs"
              aria-label="Increase quantity"
              variant="outline"
            >
              <PlusIcon />
            </Button>
          </NumberInput.IncrementTrigger>
        </NumberInput.Addon>
      </NumberInput.Control>
    </NumberInput.Root>
  )
}
