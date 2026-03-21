import { toggleGroupClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { ToggleGroup as ArkToggleGroup } from "@ark-ui/react/toggle-group"

import type { ComponentProps } from "react"

const { withProviderSlot, withSlot } = createStyleContext(toggleGroupClasses, {
  name: "ToggleGroup",
})

const ToggleGroupRoot = withProviderSlot(ArkToggleGroup.Root, "root")
const ToggleGroupRootProvider = withProviderSlot(
  ArkToggleGroup.RootProvider,
  "root"
)
const ToggleGroupItem = withSlot(ArkToggleGroup.Item, "item")

type ToggleGroupProps = ComponentProps<typeof ToggleGroupRoot>
type ToggleGroupRootProviderProps = ComponentProps<
  typeof ToggleGroupRootProvider
>
type ToggleGroupItemProps = ComponentProps<typeof ToggleGroupItem>

export { ToggleGroupRoot, ToggleGroupRootProvider, ToggleGroupItem }
export type {
  ToggleGroupProps,
  ToggleGroupRootProviderProps,
  ToggleGroupItemProps,
}
