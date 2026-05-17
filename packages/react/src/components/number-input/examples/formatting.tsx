import { NumberInput } from "../"
import { Button } from "../../button"
import { GripIcon, MinusIcon, PlusIcon } from "lucide-react"

export default function Formatting() {
  return (
    <NumberInput.Root
      defaultValue="34"
      min={0}
      max={1}
      step={0.01}
      formatOptions={{ style: "percent" }}
    >
      <NumberInput.Label>Opacity</NumberInput.Label>
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
