import { Button } from "@/components/button"
import {
  BotIcon,
  ArchiveXIcon,
  OrbitIcon,
  ZapIcon,
  CircleArrowRightIcon,
} from "lucide-react"

export default function WithIcon() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Button size="xs" variant="danger-soft">
          <ArchiveXIcon data-icon="inline-start" />
          Archive
        </Button>
        <Button size="xs" variant="accent">
          <OrbitIcon data-icon="inline-start" />
          Sync
        </Button>
        <Button size="xs" variant="ghost">
          <ZapIcon data-icon="inline-start" />
          Execute
        </Button>
        <Button size="xs" variant="primary">
          <BotIcon data-icon="inline-start" />
          Deploy
        </Button>
        <Button size="xs" variant="accent">
          Get Started
          <CircleArrowRightIcon data-icon="inline-end" />
        </Button>
      </div>

      <div className="flex gap-2">
        <Button size="sm" variant="danger-soft">
          <ArchiveXIcon data-icon="inline-start" />
          Archive
        </Button>
        <Button size="sm" variant="accent">
          <OrbitIcon data-icon="inline-start" />
          Sync
        </Button>
        <Button size="sm" variant="ghost">
          <ZapIcon data-icon="inline-start" />
          Execute
        </Button>
        <Button size="sm" variant="primary">
          <BotIcon data-icon="inline-start" />
          Deploy
        </Button>
        <Button size="sm" variant="accent">
          Get Started
          <CircleArrowRightIcon data-icon="inline-end" />
        </Button>
      </div>

      <div className="flex gap-2">
        <Button size="md" variant="danger-soft">
          <ArchiveXIcon data-icon="inline-start" />
          Archive
        </Button>
        <Button size="md" variant="accent">
          <OrbitIcon data-icon="inline-start" />
          Sync
        </Button>
        <Button size="md" variant="ghost">
          <ZapIcon data-icon="inline-start" />
          Execute
        </Button>
        <Button size="md" variant="primary">
          <BotIcon data-icon="inline-start" />
          Deploy
        </Button>
        <Button size="md" variant="accent">
          Get Started
          <CircleArrowRightIcon data-icon="inline-end" />
        </Button>
      </div>

      <div className="flex gap-2">
        <Button size="lg" variant="danger-soft">
          <ArchiveXIcon data-icon="inline-start" />
          Archive
        </Button>
        <Button size="lg" variant="accent">
          <OrbitIcon data-icon="inline-start" />
          Sync
        </Button>
        <Button size="lg" variant="ghost">
          <ZapIcon data-icon="inline-start" />
          Execute
        </Button>
        <Button size="lg" variant="primary">
          <BotIcon data-icon="inline-start" />
          Deploy
        </Button>
        <Button size="lg" variant="accent">
          Get Started
          <CircleArrowRightIcon data-icon="inline-end" />
        </Button>
      </div>
    </div>
  )
}
