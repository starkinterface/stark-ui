import { Button } from "@/components/button"

export default function Variants() {
  return (
    <div className="flex gap-2">
      <Button variant="accent">Accent</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="danger-soft">Danger Soft</Button>
    </div>
  )
}
