import { Kbd } from "../"
import { Button } from "../../button"

export default function ButtonIcon() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <Button variant="accent">
        Search
        <span className="flex gap-1">
          <Kbd>CTRL</Kbd>
          <Kbd>K</Kbd>
        </span>
      </Button>
    </div>
  )
}
