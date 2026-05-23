import { RadioGroup } from "../"

export default function Invalid() {
  const ageGroups = [
    { label: "Under 18", value: "under-18" },
    { label: "18 - 65", value: "18-65" },
    { label: "Over 65", value: "over-65" },
  ]

  const refundOptions = [
    { label: "Original payment method (3-5 days)", value: "original" },
    { label: "Store credit (Instant refund)", value: "credit" },
  ]

  return (
    <div className="flex flex-col gap-6">
      <RadioGroup.Root invalid>
        <RadioGroup.Label>Age Group (Required)</RadioGroup.Label>
        {ageGroups.map((group) => (
          <RadioGroup.Item key={group.value} value={group.value}>
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>{group.label}</RadioGroup.ItemText>
            <RadioGroup.ItemHiddenInput />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>

      <RadioGroup.Root invalid variant="accent">
        <RadioGroup.Label>Refund Option (Required)</RadioGroup.Label>
        {refundOptions.map((option) => (
          <RadioGroup.Item key={option.value} value={option.value}>
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
            <RadioGroup.ItemHiddenInput />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  )
}
