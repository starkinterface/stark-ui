import { ButtonGroup } from "../"
import { Button } from "../../button"
import {
  ArrowLeftIcon,
  ArchiveIcon,
  FlagIcon,
  TagIcon,
  ReplyIcon,
  ReplyAllIcon,
  ForwardIcon,
} from "lucide-react"

export default function Basic() {
  return (
    <div className="flex items-center gap-2 max-w-sm">
      <Button variant="outline" size="icon-md" aria-label="Back to inbox">
        <ArrowLeftIcon />
      </Button>

      {/* Archive / Flag */}
      <ButtonGroup spacing="attached">
        <Button variant="outline">
          <ArchiveIcon />
          Archive
        </Button>
        <Button variant="outline" aria-label="Flag" size="icon-md">
          <FlagIcon />
        </Button>
      </ButtonGroup>

      {/* Label */}
      <Button variant="outline" size="icon-md" aria-label="Add label">
        <TagIcon />
      </Button>

      <div className="flex-1" />

      <ButtonGroup spacing="attached">
        <Button variant="outline" size="icon-md" aria-label="Reply">
          <ReplyIcon />
        </Button>
        <Button variant="outline" size="icon-md" aria-label="Reply all">
          <ReplyAllIcon />
        </Button>
        <Button variant="outline" size="icon-md" aria-label="Forward">
          <ForwardIcon />
        </Button>
      </ButtonGroup>
    </div>
  )
}
