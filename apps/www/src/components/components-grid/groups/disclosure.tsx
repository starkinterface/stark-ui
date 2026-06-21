"use client"

import { Accordion, Collapsible, Tabs } from "@stark-ui/react"
import { LuChevronRight, LuCpu, LuFiles, LuSettings } from "react-icons/lu"

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

const AccordionExample = () => (
  <Accordion.Root defaultValue={[""]} collapsible>
    <Accordion.Item value="faq-1">
      <Accordion.ItemTrigger>
        <Accordion.ItemTitle>What is Stark UI?</Accordion.ItemTitle>
        <Accordion.ItemIndicator>
          <LuChevronRight />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>
        <Accordion.ItemBody>
          Stark UI is a component library built on top of Ark UI and Tailwind
          CSS.
        </Accordion.ItemBody>
      </Accordion.ItemContent>
    </Accordion.Item>
    <Accordion.Item value="faq-2">
      <Accordion.ItemTrigger>
        <Accordion.ItemTitle>Can I use it with Next.js?</Accordion.ItemTitle>
        <Accordion.ItemIndicator>
          <LuChevronRight />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>
        <Accordion.ItemBody>
          Yes, Stark UI supports modern React frameworks including Next.js,
          Remix, and Vite out of the box.
        </Accordion.ItemBody>
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
)

const CollapsibleExample = () => (
  <Collapsible.Root>
    <Collapsible.Trigger asChild>
      <button className="flex items-center gap-1.5 rounded-xs pe-1 text-sm text-foreground-muted focus-visible:focus-visible">
        <Collapsible.Indicator>
          <LuChevronRight />
        </Collapsible.Indicator>
        Changelog
      </button>
    </Collapsible.Trigger>
    <Collapsible.Content>
      <Collapsible.Body className="mt-2 text-sm">
        Introduces Collapsible, Accordion, and improved theming support.
      </Collapsible.Body>
    </Collapsible.Content>
  </Collapsible.Root>
)

const Disclosure = () => (
  <div className="flex flex-col gap-4">
    <TabsExample />
    <AccordionExample />
    <CollapsibleExample />
  </div>
)

export { Disclosure }
