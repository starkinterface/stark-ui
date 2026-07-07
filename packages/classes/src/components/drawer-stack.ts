import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const drawerStackClasses = tv({
  slots: {
    content: "drawer-stack-content",
    contentBackground: "drawer-stack-content-background",
    root: "drawer-stack",
  },
})

export type DrawerStackVariantProps = VariantProps<typeof drawerStackClasses>
