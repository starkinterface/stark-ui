import { Accordion } from "../"
import { Tag } from "../../tag"
import {
  ChevronRightIcon,
  CpuIcon,
  DatabaseIcon,
  AlertTriangleIcon,
} from "lucide-react"

export default function Addon() {
  const dbTiers = [
    {
      details:
        "Best for prototyping, hackathons, and personal side projects. Auto-pauses after 7 days of inactivity.",
      title: "Shared vCPU (Hobby Dev)",
      value: "shared",
    },
    {
      details:
        "Recommended for live applications. Daily automatic backups, point-in-time recovery, and 99.9% uptime SLA.",
      recommended: true,
      title: "Dedicated General (Production)",
      value: "dedicated",
    },
    {
      details:
        "High-performance nodes optimized for heavy semantic vector indexing and AI models. Requires enterprise verification.",
      disabled: true,
      title: "GPU Optimized (AI & Vector)",
      value: "gpu",
    },
  ]

  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <div className="text-center flex gap-1 flex-col mb-4">
        <h2>Database Provisioning</h2>
        <p className="text-sm text-foreground-muted">
          Select a database cluster configuration for your project.
        </p>
      </div>

      <Accordion.Root defaultValue={[""]} className="w-full" collapsible>
        {dbTiers.map((tier) => (
          <Accordion.Item
            key={tier.value}
            value={tier.value}
            disabled={tier.disabled}
          >
            <Accordion.ItemTrigger>
              <Accordion.ItemIcon>
                {tier.value === "gpu" ? <CpuIcon /> : <DatabaseIcon />}
              </Accordion.ItemIcon>

              <Accordion.ItemTitle>{tier.title}</Accordion.ItemTitle>

              <Accordion.ItemAddon data-align="inline-end">
                {tier.recommended && (
                  <Tag.Root>
                    <Tag.Text>Recommended</Tag.Text>
                  </Tag.Root>
                )}
                {tier.disabled && (
                  <Tag.Root>
                    <AlertTriangleIcon />
                    <Tag.Text>Locked</Tag.Text>
                  </Tag.Root>
                )}
                <Accordion.ItemIndicator>
                  <ChevronRightIcon />
                </Accordion.ItemIndicator>
              </Accordion.ItemAddon>
            </Accordion.ItemTrigger>

            <Accordion.ItemContent>
              <Accordion.ItemBody>
                <p>{tier.details}</p>
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  )
}
