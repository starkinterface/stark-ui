import { DateInput, parseDate } from "../.."

export default function Invalid() {
  return (
    <div className="flex h-dvh items-center justify-center p-6">
      <DateInput.Root
        invalid
        defaultValue={[parseDate("2026-07-26")]}
        className="w-64"
      >
        <DateInput.Label>Invalid date input</DateInput.Label>
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
