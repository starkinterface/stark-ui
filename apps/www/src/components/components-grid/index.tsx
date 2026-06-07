"use client"

import { Group } from "./group"
import { Actions } from "./groups/actions"
import { DateTime } from "./groups/date-time"
import { Inputs } from "./groups/inputs"
import { Selection } from "./groups/selection"
import { tv } from "tailwind-variants/lite"

import type { GroupProps } from "./group"

const groupStyles = tv({
  slots: {
    actions: "xl:row-start-1",
    collections: ["row-span-2", "xl:row-span-2 xl:row-start-2"],
    dataDisplay: ["col-start-1 row-start-6", "xl:col-start-3 xl:row-start-5"],
    dateTime: [
      "col-start-2 row-span-2",
      "xl:col-start-3 xl:row-span-2 xl:row-start-3",
    ],
    disclosure: "xl:col-start-2 xl:row-start-3",
    feedback: ["col-start-1 row-start-5", "xl:col-span-2 xl:row-start-5"],
    inputs: ["row-span-2", "xl:col-start-2 xl:row-span-2 xl:row-start-1"],
    navigation: ["col-span-2 row-start-7", "xl:col-span-2 xl:row-start-4"],
    overlays: "xl:col-start-3 xl:row-start-2",
    selection: "xl:col-start-3 xl:row-start-1",
  },
})

const styles = groupStyles()

const groups: GroupProps[] = [
  {
    children: <Actions />,
    className: styles.actions(),
    description:
      "Buttons and toggles for triggering events and switching states.",
    exampleCount: 4,
    title: "Actions",
  },
  {
    children: <Inputs />,
    className: styles.inputs(),
    description:
      "Text fields, textareas, and specialized controls for entering data.",
    exampleCount: 8,
    title: "Inputs",
  },
  {
    children: <Selection />,
    className: styles.selection(),
    description:
      "Checkboxes, radios, switches, and sliders for picking options and values.",
    exampleCount: 4,
    title: "Selection",
  },
  {
    className: styles.collections(),
    description:
      "Dropdowns, menus, and tree views that render from dynamic lists of items.",
    exampleCount: 2,
    title: "Collections",
  },
  {
    className: styles.overlays(),
    description:
      "Dialogs, drawers, popovers, and tooltips layered above the page.",
    exampleCount: 2,
    title: "Overlays",
  },
  {
    className: styles.disclosure(),
    description:
      "Accordions, collapsibles, and tabs for revealing and organizing content.",
    exampleCount: 2,
    title: "Disclosure",
  },
  {
    children: <DateTime />,
    className: styles.dateTime(),
    description:
      "Calendars and pickers for selecting dates, times, and ranges.",
    exampleCount: 1,
    title: "Date & Time",
  },
  {
    className: styles.navigation(),
    description:
      "Breadcrumbs, pagination, and steps for guiding users through flows.",
    exampleCount: 2,
    title: "Navigation",
  },
  {
    className: styles.feedback(),
    description: "Alerts, toasts, progress indicators, and loading states.",
    exampleCount: 1,
    title: "Feedback",
  },
  {
    className: styles.dataDisplay(),
    description:
      "Avatars, badges, cards, and tags for presenting labeled information.",
    exampleCount: 2,
    title: "Data Display",
  },
]

const ComponentsGrid = () => (
  <section
    className="grid flex-1 grid-cols-2 gap-px bg-decoration xl:grid-cols-3"
    aria-label="Component Groups Preview"
  >
    {groups.map((group) => (
      <Group key={group.title} {...group} />
    ))}
  </section>
)

export { ComponentsGrid }
