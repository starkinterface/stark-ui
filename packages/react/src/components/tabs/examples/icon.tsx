import { Tabs } from "../"
import { Sun, Cpu, Settings } from "lucide-react"

export default function Icon() {
  return (
    <div className="flex flex-col gap-6 h-dvh items-center justify-center w-full max-w-lg mx-auto">
      <Tabs.Root defaultValue="deployments">
        <Tabs.List className="w-full">
          <Tabs.Indicator />
          <Tabs.Trigger value="overview">
            <Sun />
            Overview
          </Tabs.Trigger>
          <Tabs.Trigger value="deployments">
            <Cpu />
            Builds
          </Tabs.Trigger>
          <Tabs.Trigger value="settings">
            <Settings />
            Config
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </div>
  )
}
