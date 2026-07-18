import { Steps } from "../../"

const items = [
  { description: "Contact Info", title: "First" },
  { description: "Date & Time", title: "Second" },
  { description: "Select Rooms", title: "Third" },
]

export default function Description() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-xl mx-auto p-6">
      <Steps.Root count={items.length} className="w-md">
        <Steps.List>
          {items.map((item, index) => (
            <Steps.Item key={index} index={index}>
              <Steps.Trigger>
                <Steps.Indicator>{index + 1}</Steps.Indicator>
                <Steps.Header>
                  <Steps.Title>{item.title}</Steps.Title>
                  <Steps.Description>{item.description}</Steps.Description>
                </Steps.Header>
              </Steps.Trigger>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>
      </Steps.Root>
    </div>
  )
}
