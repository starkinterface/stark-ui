import { Button, Steps } from "../../"
import { LuUser, LuCalendar, LuMapPin } from "react-icons/lu"

const items = [
  { description: "Contact Info", icon: LuUser, title: "First" },
  { description: "Date & Time", icon: LuCalendar, title: "Second" },
  { description: "Select Rooms", icon: LuMapPin, title: "Third" },
]

export default function Vertical() {
  return (
    <div className="flex h-dvh items-center justify-center gap-16 w-full max-w-4xl mx-auto p-6">
      <Steps.Root
        count={items.length}
        orientation="vertical"
        className="h-48 w-xl"
      >
        <Steps.List className="w-48">
          {items.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Steps.Item key={index} index={index}>
                <Steps.Trigger>
                  <Steps.Indicator>
                    <IconComponent />
                  </Steps.Indicator>
                  <Steps.Header>
                    <Steps.Title>{item.title}</Steps.Title>
                    <Steps.Description>{item.description}</Steps.Description>
                  </Steps.Header>
                </Steps.Trigger>
                <Steps.Separator />
              </Steps.Item>
            )
          })}
        </Steps.List>

        {items.map((item, index) => (
          <Steps.Content
            key={index}
            index={index}
            className="text-foreground-muted flex flex-col items-center justify-center gap-4 border-border rounded-xs p-4 border w-full"
          >
            Content for {item.title} Step
            <div className="flex gap-2 justify-end">
              <Steps.PrevTrigger asChild>
                <Button variant="secondary">Back</Button>
              </Steps.PrevTrigger>
              <Steps.Context>
                {({ value, count }) => (
                  <Steps.NextTrigger asChild>
                    <Button variant="primary">
                      {value + 1 >= count ? "Finish" : "Next"}
                    </Button>
                  </Steps.NextTrigger>
                )}
              </Steps.Context>
            </div>
          </Steps.Content>
        ))}

        <Steps.CompletedContent className="text-foreground-muted flex flex-col items-center justify-center gap-4 border-border rounded-xs p-4 border w-full">
          Steps Complete!
          <Steps.PrevTrigger asChild>
            <Button variant="secondary">Back</Button>
          </Steps.PrevTrigger>
        </Steps.CompletedContent>
      </Steps.Root>
    </div>
  )
}
