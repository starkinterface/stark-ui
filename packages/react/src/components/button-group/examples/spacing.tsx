import { ButtonGroup } from "../"
import { Button } from "../../button"

export default function Spacing() {
  return (
    <div className="flex flex-col gap-2">
      <ButtonGroup spacing="regular">
        <Button variant="accent">Button 1</Button>
        <Button variant="primary">Button 2</Button>
        <Button variant="secondary">Button 3</Button>
      </ButtonGroup>
      <ButtonGroup spacing="separated">
        <Button variant="secondary">Button 1</Button>
        <Button variant="secondary">Button 2</Button>
        <Button variant="secondary">Button 3</Button>
      </ButtonGroup>
      <ButtonGroup spacing="attached">
        <Button variant="outline">Button 1</Button>
        <Button variant="outline">Button 2</Button>
        <Button variant="outline">Button 3</Button>
      </ButtonGroup>
    </div>
  )
}
