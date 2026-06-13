import { Kbd } from "../"
import { InputGroup } from "../../input-group"

export default function InputAddon() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <InputGroup.Root className="w-80">
        <InputGroup.Input placeholder="Search documentation..." />
        <InputGroup.Addon data-align="inline-end">
          <Kbd>CTRL</Kbd>
          <Kbd>K</Kbd>
        </InputGroup.Addon>
      </InputGroup.Root>
    </div>
  )
}
