import { Button, Steps } from "../../"

const items = [{ title: "First" }, { title: "Second" }, { title: "Third" }]

export default function Basic() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-xl mx-auto p-6">
      <Steps.Root count={items.length} className="w-md">
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

        {items.map((item, index) => (
          <Steps.Content
            key={index}
            index={index}
            className="text-foreground-muted border-border rounded-xs p-4 border"
          >
            Content for {item.title} Step
          </Steps.Content>
        ))}

        <Steps.CompletedContent className="text-foreground-muted border-border rounded-xs p-4 border">
          Steps Complete!
        </Steps.CompletedContent>

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
      </Steps.Root>
    </div>
  )
}
