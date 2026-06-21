import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const accordionClasses = tv({
  slots: {
    item: "accordion-item",
    itemAddon: "accordion-item-addon",
    itemBody: "accordion-item-body",
    itemContent: "accordion-item-content",
    itemIcon: "accordion-item-icon",
    itemIndicator: "accordion-item-indicator",
    itemSubtitle: "accordion-item-subtitle",
    itemTitle: "accordion-item-title",
    itemTrigger: "accordion-item-trigger",
    itemTriggerAction: "accordion-item-trigger-action",
    itemTriggerOverlay: "accordion-item-trigger-overlay",
    root: "accordion",
  },
})

export type AccordionVariantProps = VariantProps<typeof accordionClasses>
