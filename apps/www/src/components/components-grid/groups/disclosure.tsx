"use client"

import { Tabs } from "@stark-ui/react"
import { LuFiles, LuCpu, LuSettings } from "react-icons/lu"

const TabsExample = () => (
  <Tabs.Root defaultValue="deployments">
    <Tabs.List>
      <Tabs.Indicator />
      <Tabs.Trigger value="deployments">
        <LuFiles />
        Summary
      </Tabs.Trigger>
      <Tabs.Trigger value="logs" disabled>
        <LuCpu />
        Builds
      </Tabs.Trigger>
      <Tabs.Trigger value="settings">
        <LuSettings />
        Config
      </Tabs.Trigger>
    </Tabs.List>
  </Tabs.Root>
)

const Disclosure = () => (
  <div className="flex flex-col gap-4">
    <TabsExample />
  </div>
)

export { Disclosure }
