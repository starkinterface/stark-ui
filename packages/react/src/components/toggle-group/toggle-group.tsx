import { toggleGroupClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { ToggleGroup as ArkToggleGroup } from "@ark-ui/react/toggle-group"

import type { ToggleGroupVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(toggleGroupClasses, {
  name: "ToggleGroup",
})

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type ToggleGroupRootProviderBaseProps = Assign<
  ArkToggleGroup.RootProviderBaseProps,
  ToggleGroupVariantProps
> &
  UnstyledProp

type ToggleGroupRootProviderProps = Assign<
  ArkToggleGroup.RootProviderProps,
  ToggleGroupRootProviderBaseProps
>

const ToggleGroupRootProvider = withProviderSlot<
  HTMLDivElement,
  ToggleGroupRootProviderProps
>(ArkToggleGroup.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Root

type ToggleGroupRootBaseProps = Assign<
  ArkToggleGroup.RootBaseProps,
  ToggleGroupVariantProps
> &
  UnstyledProp

type ToggleGroupProps = Assign<
  ArkToggleGroup.RootProps,
  ToggleGroupRootBaseProps
>

const ToggleGroupRoot = withProviderSlot<HTMLDivElement, ToggleGroupProps>(
  ArkToggleGroup.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Item

type ToggleGroupItemProps = Assign<ArkToggleGroup.ItemProps, UnstyledProp>

const ToggleGroupItem = withSlot<HTMLButtonElement, ToggleGroupItemProps>(
  ArkToggleGroup.Item,
  "item"
)

type ValueChangeDetails = ArkToggleGroup.ValueChangeDetails

///////////////////////////////////////////////////////////////////////////////
/// Exports

export { ToggleGroupRoot, ToggleGroupRootProvider, ToggleGroupItem }
export type {
  ToggleGroupProps,
  ToggleGroupRootProviderProps,
  ToggleGroupItemProps,
  ValueChangeDetails,
}
