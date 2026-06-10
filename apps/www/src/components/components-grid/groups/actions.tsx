"use client"

import {
  Button,
  Toggle,
  ToggleGroup,
  ButtonGroup,
  DownloadTrigger,
} from "@stark-ui/react"
import {
  LuBell,
  LuBellOff,
  LuCloud,
  LuCloudOff,
  LuEye,
  LuRocket,
  LuShield,
  LuShieldOff,
  LuTerminal,
  LuUndo2,
  LuDownload,
} from "react-icons/lu"

const ToggleExample = () => (
  <ButtonGroup>
    <Toggle.Root
      size="icon-md"
      aria-label="Notifications"
      variant="outline"
      variantActive="accent"
      defaultPressed={true}
    >
      <Toggle.Context>
        {({ pressed }) => (pressed ? <LuBell /> : <LuBellOff />)}
      </Toggle.Context>
    </Toggle.Root>
    <Toggle.Root
      size="icon-md"
      aria-label="Security scan"
      variant="outline"
      variantActive="accent"
      defaultPressed={true}
    >
      <Toggle.Context>
        {({ pressed }) => (pressed ? <LuShield /> : <LuShieldOff />)}
      </Toggle.Context>
    </Toggle.Root>
    <Toggle.Root
      size="icon-md"
      aria-label="Cloud sync"
      variant="outline"
      variantActive="accent"
    >
      <Toggle.Context>
        {({ pressed }) => (pressed ? <LuCloud /> : <LuCloudOff />)}
      </Toggle.Context>
    </Toggle.Root>
  </ButtonGroup>
)

const ToggleGroupExample = () => (
  <ToggleGroup.Root
    variant="outline"
    variantActive="accent"
    spacing="attached"
    defaultValue={["3"]}
  >
    <ToggleGroup.Item value="1" disabled>
      DEV
    </ToggleGroup.Item>
    <ToggleGroup.Item value="2">STAGING</ToggleGroup.Item>
    <ToggleGroup.Item value="3">PRODUCTION</ToggleGroup.Item>
  </ToggleGroup.Root>
)

const Actions = () => (
  <div className="flex flex-col gap-4">
    <div className="flex justify-between gap-2">
      <ToggleExample />
      <ToggleGroupExample />
    </div>
    <div className="grid grid-cols-3 gap-2">
      <Button variant="accent">
        <LuRocket data-icon="inline-start" />
        Deploy
      </Button>
      <Button variant="primary">
        <LuEye data-icon="inline-start" />
        Preview
      </Button>
      <Button variant="secondary">
        <LuUndo2 data-icon="inline-start" />
        Rollback
      </Button>
      <Button variant="outline">
        <LuTerminal data-icon="inline-start" />
        Logs
      </Button>
      <div />
      <DownloadTrigger
        fileName="stark-config.json"
        mimeType="application/json"
        data={JSON.stringify({ project: "stark", version: "1.0.0" }, null, 2)}
        asChild
      >
        <Button variant="outline">
          <LuDownload data-icon="inline-start" />
          Export
        </Button>
      </DownloadTrigger>
    </div>
  </div>
)

export { Actions }
