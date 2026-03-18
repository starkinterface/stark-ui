import { Button } from "./../button"

export default function Disabled() {
  return (
    <div className="flex gap-2">
      <Button disabled variant="accent">
        Accent
      </Button>
      <Button disabled variant="primary">
        Primary
      </Button>
      <Button disabled variant="secondary">
        Secondary
      </Button>
      <Button disabled variant="ghost">
        Ghost
      </Button>
      <Button disabled variant="outline">
        Outline
      </Button>
      <Button disabled variant="danger">
        Danger
      </Button>
      <Button disabled variant="danger-soft">
        Danger Soft
      </Button>
    </div>
  )
}
