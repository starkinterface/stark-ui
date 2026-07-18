import { Steps } from "../../"

const items = [{ title: "First" }, { title: "Second" }, { title: "Third" }]

export default function Variants() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-12 w-full max-w-xl mx-auto p-6">
      <div className="w-md">
        <h3 className="text-sm font-medium mb-4 text-foreground-muted">
          Primary (Default)
        </h3>
        <Steps.Root count={items.length} variant="primary" defaultStep={1}>
          <Steps.List>
            {items.map((item, index) => (
              <Steps.Item key={index} index={index}>
                <Steps.Trigger>
                  <Steps.Indicator>{index + 1}</Steps.Indicator>
                  <Steps.Title>{item.title}</Steps.Title>
                </Steps.Trigger>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
        </Steps.Root>
      </div>

      <div className="w-md">
        <h3 className="text-sm font-medium mb-4 text-foreground-muted">
          Accent
        </h3>
        <Steps.Root count={items.length} variant="accent" defaultStep={1}>
          <Steps.List>
            {items.map((item, index) => (
              <Steps.Item key={index} index={index}>
                <Steps.Trigger>
                  <Steps.Indicator>{index + 1}</Steps.Indicator>
                  <Steps.Title>{item.title}</Steps.Title>
                </Steps.Trigger>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
        </Steps.Root>
      </div>
    </div>
  )
}
