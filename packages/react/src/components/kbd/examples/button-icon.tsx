import { Kbd } from "../"
import { Button } from "../../button"

export default function ButtonIcon() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <Button variant="accent">
        Search
        <Kbd.Root>
          <Kbd.Key>CTRL</Kbd.Key>
          <Kbd.Key>K</Kbd.Key>
        </Kbd.Root>
      </Button>
    </div>
  )
}
