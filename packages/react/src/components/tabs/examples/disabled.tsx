import { Tabs } from "../"

export default function Disabled() {
  return (
    <div className="flex flex-col gap-6 h-dvh items-center justify-center w-full max-w-lg mx-auto">
      <Tabs.Root defaultValue="overview">
        <Tabs.List>
          <Tabs.Indicator />
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="analytics" disabled>
            Analytics (Pro Only)
          </Tabs.Trigger>
          <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </div>
  )
}
