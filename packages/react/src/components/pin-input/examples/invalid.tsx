import { PinInput } from "../"

export default function Invalid() {
  return (
    <div className="flex flex-col gap-6">
      <PinInput.Root count={4} invalid>
        <PinInput.Label>Verification Code</PinInput.Label>
        <PinInput.Control>
          <PinInput.Input index={0} />
          <PinInput.Input index={1} />
          <PinInput.Input index={2} />
          <PinInput.Input index={3} />
        </PinInput.Control>
        <PinInput.HiddenInput />
      </PinInput.Root>
    </div>
  )
}
