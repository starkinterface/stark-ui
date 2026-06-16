import { SegmentGroup } from "../"
import { Terminal, Info, AlertTriangle, AlertOctagon } from "lucide-react"

export default function Vertical() {
  const timeOptions = [
    { label: "1 Hour", value: "1h" },
    { label: "24 Hours", value: "24h" },
    { label: "7 Days", value: "7d" },
    { label: "30 Days", value: "30d" },
  ]

  const logLevelOptions = [
    { Icon: Terminal, label: "Debug", value: "debug" },
    { Icon: Info, label: "Info", value: "info" },
    { Icon: AlertTriangle, label: "Warning", value: "warning" },
    { Icon: AlertOctagon, label: "Error", value: "error" },
  ]

  return (
    <div className="flex gap-12 w-full h-dvh items-center justify-center">
      <SegmentGroup.Root defaultValue="24h" orientation="vertical">
        <SegmentGroup.Label>Analytics Window</SegmentGroup.Label>
        <SegmentGroup.Content>
          <SegmentGroup.Indicator />
          {timeOptions.map((option) => (
            <SegmentGroup.Item key={option.value} value={option.value}>
              <SegmentGroup.ItemText>{option.label}</SegmentGroup.ItemText>
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
          ))}
        </SegmentGroup.Content>
      </SegmentGroup.Root>

      <SegmentGroup.Root defaultValue="info" orientation="vertical">
        <SegmentGroup.Label>Console Filter</SegmentGroup.Label>
        <SegmentGroup.Content>
          <SegmentGroup.Indicator />
          {logLevelOptions.map((option) => (
            <SegmentGroup.Item key={option.value} value={option.value}>
              <option.Icon />
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
          ))}
        </SegmentGroup.Content>
      </SegmentGroup.Root>
    </div>
  )
}
