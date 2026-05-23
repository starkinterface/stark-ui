import { RadioGroup } from "../"

export default function Disabled() {
  const currentPlans = [
    { label: "Starter - $9/month", value: "starter" },
    { label: "Professional - $29/month", value: "pro" },
    { label: "Enterprise - Custom pricing", value: "enterprise" },
  ]

  const timeSlots = [
    { disabled: false, label: "Morning (8 AM - 12 PM)", value: "morning" },
    { disabled: false, label: "Afternoon (12 PM - 4 PM)", value: "afternoon" },
    {
      disabled: true,
      label: "Evening (4 PM - 8 PM) - Fully booked",
      value: "evening",
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <RadioGroup.Root defaultValue="starter" disabled>
        <RadioGroup.Label>Subscription Plan (Current Plan)</RadioGroup.Label>
        {currentPlans.map((plan) => (
          <RadioGroup.Item key={plan.value} value={plan.value}>
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>{plan.label}</RadioGroup.ItemText>
            <RadioGroup.ItemHiddenInput />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>

      <RadioGroup.Root defaultValue="morning">
        <RadioGroup.Label>Delivery Time Slot</RadioGroup.Label>
        {timeSlots.map((slot) => (
          <RadioGroup.Item
            key={slot.value}
            value={slot.value}
            disabled={slot.disabled}
          >
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>{slot.label}</RadioGroup.ItemText>
            <RadioGroup.ItemHiddenInput />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  )
}
