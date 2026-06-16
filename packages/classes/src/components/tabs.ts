import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const tabsClasses = tv({
  slots: {
    content: "tabs-content",
    indicator: "tabs-indicator",
    list: "tabs-list",
    root: "tabs",
    trigger: "tabs-trigger",
  },
})

export type TabsVariantProps = VariantProps<typeof tabsClasses>
