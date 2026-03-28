import { NumberInput } from "../"
import { MinusIcon, PlusIcon } from "lucide-react"

export default function Basic() {
  return (
    <NumberInput.Root defaultValue="1" min={0}>
      <NumberInput.Label>Quantity</NumberInput.Label>
      <NumberInput.Control>
        <NumberInput.DecrementTrigger aria-label="Decrease quantity">
          <MinusIcon />
        </NumberInput.DecrementTrigger>
        <NumberInput.Input />
        <NumberInput.IncrementTrigger aria-label="Increase quantity">
          <PlusIcon />
        </NumberInput.IncrementTrigger>
      </NumberInput.Control>
    </NumberInput.Root>
  )
}
