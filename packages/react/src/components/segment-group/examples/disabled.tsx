import { SegmentGroup } from "../"

export default function Disabled() {
  const options = [
    { label: "Hobby", value: "hobby" },
    { label: "Pro", value: "pro" },
    {
      disabled: true,
      label: "Enterprise",
      value: "enterprise",
    },
  ]

  return (
    <div className="flex flex-col gap-6 h-dvh items-center justify-center w-full max-w-md mx-auto">
      <SegmentGroup.Root defaultValue="hobby">
        <SegmentGroup.Label>Self-Serve Tier</SegmentGroup.Label>
        <SegmentGroup.Content>
          <SegmentGroup.Indicator />
          {options.map((option) => (
            <SegmentGroup.Item
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              <SegmentGroup.ItemText>{option.label}</SegmentGroup.ItemText>
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
          ))}
        </SegmentGroup.Content>
      </SegmentGroup.Root>

      <SegmentGroup.Root defaultValue="hobby" disabled>
        <SegmentGroup.Label>
          Provisioned Database Tier (Account Locked)
        </SegmentGroup.Label>
        <SegmentGroup.Content>
          <SegmentGroup.Indicator />
          {options.map((option) => (
            <SegmentGroup.Item key={option.value} value={option.value}>
              <SegmentGroup.ItemText>{option.label}</SegmentGroup.ItemText>
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
          ))}
        </SegmentGroup.Content>
      </SegmentGroup.Root>
    </div>
  )
}
