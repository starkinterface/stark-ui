import { DateInput } from "../"

export default function Basic() {
  return (
    <div className="flex h-dvh items-center justify-center p-6">
      <DateInput.Root className="w-64">
        <DateInput.Label>Date</DateInput.Label>
        <DateInput.Control>
          <DateInput.SegmentGroup>
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
