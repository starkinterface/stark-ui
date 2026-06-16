import { Tabs } from "../"
import { Terminal, Cpu, Globe } from "lucide-react"

export default function Vertical() {
  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <Tabs.Root defaultValue="logs" orientation="vertical" className="w-full">
        <Tabs.List>
          <Tabs.Indicator />
          <Tabs.Trigger value="logs">
            <Terminal />
            Console Logs
          </Tabs.Trigger>
          <Tabs.Trigger value="build">
            <Cpu />
            Build Pipeline
          </Tabs.Trigger>
          <Tabs.Trigger value="domains">
            <Globe />
            Domain Routing
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </div>
  )
}
