import { DateInput } from "../"

export default function Range() {
  return (
    <div className="flex h-dvh items-center justify-center p-6">
      <DateInput.Root className="w-md" selectionMode="range">
        <DateInput.Label>Date</DateInput.Label>
        <DateInput.Control>
          <DateInput.SegmentGroup index={0}>
            <DateInput.SegmentContext>
              {(segment) => <DateInput.Segment segment={segment} />}
            </DateInput.SegmentContext>
          </DateInput.SegmentGroup>
          <DateInput.SegmentGroup index={1}>
            <DateInput.SegmentContext>
              {(segment) => <DateInput.Segment segment={segment} />}
            </DateInput.SegmentContext>
          </DateInput.SegmentGroup>
        </DateInput.Control>
        <DateInput.HiddenInput />
      </DateInput.Root>
    </div>
  )
}
