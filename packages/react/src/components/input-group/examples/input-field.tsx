import { InputGroup } from "../"
import { Field } from "../../field"
import { NumberInput } from "@ark-ui/react/number-input"
import { MinusIcon, PlusIcon, MoveHorizontalIcon } from "lucide-react"

export default function NumberInputWithInputGroup() {
  return (
    <Field.Root asChild>
      <NumberInput.Root defaultValue="100" min={0}>
        <NumberInput.Scrubber asChild>
          <Field.Label>Amount</Field.Label>
        </NumberInput.Scrubber>
        <NumberInput.Control asChild>
          <InputGroup.Root>
            <NumberInput.Input asChild>
              <InputGroup.Input />
            </NumberInput.Input>

            <InputGroup.Addon data-align="inline-start">
              <InputGroup.Icon>
                <MoveHorizontalIcon />
              </InputGroup.Icon>
            </InputGroup.Addon>

            <InputGroup.Addon data-align="inline-end">
              <NumberInput.DecrementTrigger asChild>
                <InputGroup.Button
                  size="icon-xs"
                  variant="outline"
                  aria-label="Decrease amount"
                >
                  <MinusIcon />
                </InputGroup.Button>
              </NumberInput.DecrementTrigger>

              <NumberInput.IncrementTrigger asChild>
                <InputGroup.Button
                  size="icon-xs"
                  variant="outline"
                  aria-label="Increase amount"
                >
                  <PlusIcon />
                </InputGroup.Button>
              </NumberInput.IncrementTrigger>
            </InputGroup.Addon>
          </InputGroup.Root>
        </NumberInput.Control>
      </NumberInput.Root>
    </Field.Root>
  )
}
