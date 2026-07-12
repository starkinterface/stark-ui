import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const menuClasses = tv({
  slots: {
    arrow: "menu-arrow",
    arrowTip: "menu-arrow-tip",
    checkboxItem: "menu-checkbox-item",
    content: "menu-content",
    contextTrigger: "menu-context-trigger",
    indicator: "menu-indicator",
    item: "menu-item",
    itemGroup: "menu-item-group",
    itemGroupLabel: "menu-item-group-label",
    itemIndicator: "menu-item-indicator",
    itemShortcut: "menu-item-shortcut",
    itemText: "menu-item-text",
    positioner: "menu-positioner",
    radioItem: "menu-radio-item",
    radioItemGroup: "menu-radio-item-group",
    root: "menu",
    separator: "menu-separator",
    trigger: "menu-trigger",
    triggerItem: "menu-trigger-item",
  },
})

export type MenuVariantProps = VariantProps<typeof menuClasses>
