import { toggleClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Toggle as ArkToggle } from "@ark-ui/react/toggle"

import type { ToggleVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(toggleClasses, {
  name: "Toggle",
})

///////////////////////////////////////////////////////////////////////////////
/// Root

type ToggleRootBaseProps = Assign<ArkToggle.RootBaseProps, ToggleVariantProps> &
  UnstyledProp

type ToggleRootProps = Assign<ArkToggle.RootProps, ToggleRootBaseProps>

const ToggleRoot = withProviderSlot<HTMLButtonElement, ToggleRootProps>(
  ArkToggle.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Indicator

type ToggleIndicatorProps = Assign<ArkToggle.IndicatorProps, UnstyledProp>

const ToggleIndicator = withSlot<HTMLDivElement, ToggleIndicatorProps>(
  ArkToggle.Indicator,
  "indicator"
)

///////////////////////////////////////////////////////////////////////////////
/// Context

type ToggleContextProps = ArkToggle.ContextProps

const ToggleContext = ArkToggle.Context

///////////////////////////////////////////////////////////////////////////////
/// Exports

export { ToggleContext, ToggleIndicator, ToggleRoot }
export type { ToggleContextProps, ToggleIndicatorProps, ToggleRootProps }
