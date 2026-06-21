import { Accordion } from "../"
import {
  ChevronRightIcon,
  TerminalIcon,
  PlayIcon,
  RocketIcon,
} from "lucide-react"

export default function Horizontal() {
  const stages = [
    {
      content:
        "Compiles source code assets, bundles javascript, treeshakes unused dependencies, and optimizes production code.",
      icon: TerminalIcon,
      number: "01",
      time: "12s duration",
      title: "Build Node",
      value: "build",
    },
    {
      content:
        "Runs comprehensive unit tests using Vitest, checks lint guidelines via oxlint, and executes formatting standards.",
      icon: PlayIcon,
      number: "02",
      time: "8s duration",
      title: "Run Tests",
      value: "test",
    },
    {
      content:
        "Syncs compiled assets to the global edge network cache, invalidates old CDN endpoints, and triggers Slack notifications.",
      icon: RocketIcon,
      number: "03",
      time: "2s duration",
      title: "Go Live",
      value: "deploy",
    },
  ]

  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <div className="text-center flex gap-1 flex-col mb-4">
        <h2>CI/CD Edge Deployment</h2>
        <p className="text-sm text-foreground-muted">
          Automatic verification pipeline stages for edge builds.
        </p>
      </div>

      <Accordion.Root
        defaultValue={["build"]}
        orientation="horizontal"
        className="h-64 border border-border rounded-xs overflow-hidden"
      >
        {stages.map((stage) => (
          <Accordion.Item key={stage.value} value={stage.value}>
            <Accordion.ItemTrigger>
              <Accordion.ItemAddon data-align="block-start">
                <span className="font-mono text-foreground-muted">
                  {stage.number}
                </span>
                <Accordion.ItemIcon>
                  <stage.icon />
                </Accordion.ItemIcon>
              </Accordion.ItemAddon>
              <Accordion.ItemAddon data-align="block-end">
                <Accordion.ItemIndicator>
                  <ChevronRightIcon />
                </Accordion.ItemIndicator>
              </Accordion.ItemAddon>
              <Accordion.ItemTitle className="uppercase font-mono">
                {stage.title}
              </Accordion.ItemTitle>
            </Accordion.ItemTrigger>

            <Accordion.ItemContent>
              <Accordion.ItemBody className="w-lg h-full flex flex-col">
                <div className="space-y-1">
                  <h3 className="text-sm text-foreground">
                    {stage.title} Stage
                  </h3>
                  <p className="text-sm text-foreground-muted">
                    {stage.content}
                  </p>
                </div>
                <span className="font-mono text-xs ms-auto mbs-auto">
                  {stage.time}
                </span>
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  )
}
