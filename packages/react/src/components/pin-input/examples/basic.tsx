import { PinInput } from "../"

export default function Basic() {
  return (
    <div className="flex flex-col gap-6">
      <PinInput.Root count={4}>
        <PinInput.Label>Verification Code</PinInput.Label>
        <PinInput.Control>
          <PinInput.Input index={0} placeholder="-" />
          <PinInput.Input index={1} placeholder="-" />
          <PinInput.Input index={2} placeholder="-" />
          <PinInput.Input index={3} placeholder="-" />
        </PinInput.Control>
        <PinInput.HiddenInput />
      </PinInput.Root>

      <PinInput.Root count={6}>
        <PinInput.Label>Backup Code</PinInput.Label>
        <PinInput.Control>
          <PinInput.Input index={0} />
          <PinInput.Input index={1} />
          <PinInput.Input index={2} />
          <PinInput.Input index={3} />
          <PinInput.Input index={4} />
          <PinInput.Input index={5} />
        </PinInput.Control>
        <PinInput.HiddenInput />
      </PinInput.Root>
    </div>
  )
}
