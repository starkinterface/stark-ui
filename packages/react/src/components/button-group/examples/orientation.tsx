import { ButtonGroup } from ".."
import { Button } from "../../button"
import {
  PlayIcon,
  SkipBackIcon,
  SkipForwardIcon,
  PlusIcon,
  MinusIcon,
} from "lucide-react"

export default function Basic() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup orientation="horizontal" spacing="attached">
        <Button variant="outline" size="icon-md" aria-label="Skip Back">
          <SkipBackIcon />
        </Button>
        <Button variant="outline" size="icon-md" aria-label="Play">
          <PlayIcon />
        </Button>
        <Button variant="outline" size="icon-md" aria-label="Skip Forward">
          <SkipForwardIcon />
        </Button>
      </ButtonGroup>

      <ButtonGroup orientation="vertical" spacing="attached" className="w-fit">
        <Button variant="outline" size="icon-md" aria-label="Zoom In">
          <PlusIcon />
        </Button>
        <Button variant="outline" size="icon-md" aria-label="Zoom Out">
          <MinusIcon />
        </Button>
      </ButtonGroup>
    </div>
  )
}
