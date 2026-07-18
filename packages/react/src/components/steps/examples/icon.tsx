import { Steps } from "../../"
import { LuUser, LuCalendar, LuMapPin } from "react-icons/lu"

const items = [
  { icon: LuUser, title: "First" },
  { icon: LuCalendar, title: "Second" },
  { icon: LuMapPin, title: "Third" },
]

export default function Icon() {
  return (
    <div className="flex h-dvh items-center justify-center w-full max-w-xl mx-auto p-6">
      <Steps.Root count={items.length} className="w-md">
        <Steps.List>
          {items.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Steps.Item key={index} index={index}>
                <Steps.Trigger>
                  <Steps.Indicator>
                    <IconComponent />
                  </Steps.Indicator>
                  <Steps.Title>{item.title}</Steps.Title>
                </Steps.Trigger>
                <Steps.Separator />
              </Steps.Item>
            )
          })}
        </Steps.List>
      </Steps.Root>
    </div>
  )
}
