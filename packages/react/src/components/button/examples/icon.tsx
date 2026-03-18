import {
  BotIcon,
  ArchiveXIcon,
  OrbitIcon,
  ZapIcon,
  CircleArrowRightIcon,
} from "lucide-react"
import { Button } from "./../button"

export default function Icon() {
  return (
    <div className="flex gap-2">
      <Button size="icon-xs" variant="danger-soft" aria-label="Archive">
        <ArchiveXIcon />
      </Button>
      <Button size="icon-sm" variant="accent" aria-label="Sync">
        <OrbitIcon />
      </Button>
      <Button size="icon-md" variant="outline" aria-label="Execute">
        <ZapIcon />
      </Button>
      <Button size="icon-md" variant="primary" aria-label="Deploy">
        <BotIcon />
      </Button>
      <Button size="icon-lg" variant="outline" aria-label="Get Started">
        <CircleArrowRightIcon />
      </Button>
    </div>
  )
}
