import { Accordion } from "../"
import { Tag } from "../../tag"
import { Toggle } from "../../toggle"
import {
  ChevronRightIcon,
  GitBranchIcon,
  FolderIcon,
  StarIcon,
  StarOffIcon,
} from "lucide-react"

export default function Interactive() {
  const repositories = [
    {
      branches: 12,
      description:
        "Primary client application built with Next.js and Stark UI.",
      title: "web-client-monorepo",
      value: "frontend",
    },
    {
      branches: 4,
      description: "Gateway proxy and authentication microservices.",
      title: "core-gateway-api",
      value: "backend",
    },
    {
      branches: 2,
      description: "Public documentation site powered by MDX and Contentlayer.",
      title: "developer-docs-portal",
      value: "docs",
    },
  ]

  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <div className="text-center flex gap-1 flex-col mb-4">
        <h2>Repositories</h2>
        <p className="text-sm text-foreground-muted">
          Active projects in starkinterface team.
        </p>
      </div>

      <Accordion.Root defaultValue={[""]} className="w-full" collapsible>
        {repositories.map((repo) => {
          const titleId = `accordion-title-${repo.value}`

          return (
            <Accordion.Item key={repo.value} value={repo.value}>
              <Accordion.ItemTriggerAction>
                {/* Overlay trigger button for collapse action */}
                <Accordion.ItemTriggerOverlay aria-labelledby={titleId} />

                <Accordion.ItemAddon data-align="inline-start">
                  <Accordion.ItemIndicator>
                    <ChevronRightIcon />
                  </Accordion.ItemIndicator>
                  <Accordion.ItemIcon>
                    <FolderIcon />
                  </Accordion.ItemIcon>
                </Accordion.ItemAddon>

                <Accordion.ItemTitle className="font-mono" id={titleId}>
                  {repo.title}
                </Accordion.ItemTitle>

                <Accordion.ItemAddon data-align="inline-end">
                  <Tag.Root>
                    <GitBranchIcon />
                    <Tag.Text>{repo.branches}</Tag.Text>
                  </Tag.Root>
                  <Toggle.Root
                    size="icon-xs"
                    variant="ghost"
                    variantActive="accent"
                    aria-label="Save repository"
                  >
                    <Toggle.Context>
                      {({ pressed }) =>
                        pressed ? <StarIcon /> : <StarOffIcon />
                      }
                    </Toggle.Context>
                  </Toggle.Root>
                </Accordion.ItemAddon>
              </Accordion.ItemTriggerAction>

              <Accordion.ItemContent>
                <Accordion.ItemBody>
                  <p>{repo.description}</p>
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          )
        })}
      </Accordion.Root>
    </div>
  )
}
