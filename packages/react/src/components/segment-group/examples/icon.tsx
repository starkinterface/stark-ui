import { SegmentGroup } from "../"
import {
  Sun,
  Moon,
  Monitor,
  Grid2X2,
  List,
  TableProperties,
} from "lucide-react"

export default function Icon() {
  const themeOptions = [
    { Icon: Sun, label: "Light", value: "light" },
    { Icon: Moon, label: "Dark", value: "dark" },
    { Icon: Monitor, label: "System", value: "system" },
  ]

  const viewOptions = [
    { Icon: Grid2X2, label: "Grid", value: "grid" },
    { Icon: List, label: "List", value: "list" },
    { Icon: TableProperties, label: "Table", value: "table" },
  ]

  return (
    <div className="flex flex-col gap-8 h-dvh items-center justify-center">
      <SegmentGroup.Root defaultValue="system" orientation="horizontal">
        <SegmentGroup.Label>Theme Mode</SegmentGroup.Label>
        <SegmentGroup.Content>
          <SegmentGroup.Indicator />
          {themeOptions.map((option) => (
            <SegmentGroup.Item key={option.value} value={option.value}>
              <option.Icon />
              <SegmentGroup.ItemText>{option.label}</SegmentGroup.ItemText>
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
          ))}
        </SegmentGroup.Content>
      </SegmentGroup.Root>

      <SegmentGroup.Root defaultValue="grid" orientation="horizontal">
        <SegmentGroup.Label>Layout Style</SegmentGroup.Label>
        <SegmentGroup.Content>
          <SegmentGroup.Indicator />
          {viewOptions.map((option) => (
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
