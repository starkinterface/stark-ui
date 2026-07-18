import { Format } from "../"

import type {
  FormatByteProps,
  FormatNumberProps,
  FormatRelativeTimeProps,
} from "../"
import type React from "react"

interface ByteItem {
  label: string
  value: FormatByteProps["value"]
}

interface NumberItem {
  currency?: FormatNumberProps["currency"]
  label: string
  style?: FormatNumberProps["style"]
  value: FormatNumberProps["value"]
}

interface TimeItem {
  label: string
  value: FormatRelativeTimeProps["value"]
}

interface GroupItem {
  items: {
    label: string
    render: () => React.ReactNode
  }[]
  title: string
}

const byteValues: ByteItem[] = [
  { label: "KB", value: 1450 },
  { label: "MB", value: 3_500_000 },
  { label: "GB", value: 1_024_000_000 },
]

const numberValues: NumberItem[] = [
  { label: "Decimal", value: 1_234_567.89 },
  { label: "Percent", style: "percent", value: 0.125 },
  { currency: "USD", label: "Currency", style: "currency", value: 1250.75 },
]

const timeValues: TimeItem[] = [
  { label: "Current", value: new Date() },
  { label: "Past", value: new Date(Date.now() - 5 * 60 * 1000) },
  { label: "Yesterday", value: new Date(Date.now() - 24 * 60 * 60 * 1000) },
  { label: "Tomorrow", value: new Date(Date.now() + 24 * 60 * 60 * 1000) },
]

const groups: GroupItem[] = [
  {
    items: byteValues.map((item) => ({
      label: item.label,
      render: () => <Format.Byte value={item.value} />,
    })),
    title: "Byte Sizes",
  },
  {
    items: numberValues.map((item) => ({
      label: item.label,
      render: () => (
        <Format.Number
          value={item.value}
          style={item.style}
          currency={item.currency}
        />
      ),
    })),
    title: "Numbers",
  },
  {
    items: timeValues.map((item) => ({
      label: item.label,
      render: () => <Format.RelativeTime value={item.value} />,
    })),
    title: "Relative Time",
  },
]

export default function Basic() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-8 w-full max-w-xl mx-auto p-6">
      <div className="flex flex-col gap-6 w-64">
        {groups.map((group) => (
          <div
            key={group.title}
            className="flex flex-col gap-4 border border-border rounded-xs p-4"
          >
            <h3 className="text-sm">{group.title}</h3>
            <div className="flex flex-col gap-1 text-sm">
              {group.items.map((item) => (
                <div key={item.label} className="flex justify-between">
                  <span className="text-foreground-muted">{item.label}</span>
                  <span className="font-semibold text-foreground">
                    {item.render()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
