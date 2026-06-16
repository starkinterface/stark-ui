import { Tabs } from "../"

export default function Basic() {
  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center w-full max-w-lg mx-auto">
      <Tabs.Root defaultValue="deployments">
        <Tabs.List>
          <Tabs.Indicator />
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="deployments">Deployments</Tabs.Trigger>
          <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </div>
  )
}
