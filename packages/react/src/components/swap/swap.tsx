import { swapClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Swap as ArkSwap } from "@ark-ui/react/swap"

import type { SwapVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(swapClasses, {
  name: "Swap",
})

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type SwapRootProviderProps = Assign<
  ArkSwap.RootProviderProps,
  SwapVariantProps & UnstyledProp
>

const SwapRootProvider = withProviderSlot<
  HTMLSpanElement,
  SwapRootProviderProps
>(ArkSwap.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Root

type SwapRootProps = Assign<ArkSwap.RootProps, SwapVariantProps & UnstyledProp>

const SwapRoot = withProviderSlot<HTMLSpanElement, SwapRootProps>(
  ArkSwap.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Indicator

type SwapIndicatorProps = Assign<ArkSwap.IndicatorProps, UnstyledProp>

const SwapIndicator = withSlot<HTMLSpanElement, SwapIndicatorProps>(
  ArkSwap.Indicator,
  "indicator"
)

///////////////////////////////////////////////////////////////////////////////
/// Exports

export { SwapIndicator, SwapRoot, SwapRootProvider }
export type { SwapIndicatorProps, SwapRootProps, SwapRootProviderProps }

///////////////////////////////////////////////////////////////////////////////
/// Re-exports

export { useSwap } from "@ark-ui/react/swap"
