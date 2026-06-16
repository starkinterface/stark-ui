import { SegmentGroup } from "../"

export default function Basic() {
  const options = [
    { label: "Development", value: "development" },
    { label: "Preview", value: "preview" },
    { label: "Production", value: "production" },
  ]

  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center">
      <SegmentGroup.Root defaultValue="preview" orientation="horizontal">
        <SegmentGroup.Label>Deployment Environment</SegmentGroup.Label>
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
