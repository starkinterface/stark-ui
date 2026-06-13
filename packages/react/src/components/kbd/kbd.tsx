import { kbdClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { ark } from "@ark-ui/react/factory"

import type { KbdVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"
import type { ComponentProps } from "react"

const { withProviderSlot, withSlot } = createStyleContext(kbdClasses, {
  name: "Kbd",
})

///////////////////////////////////////////////////////////////////////////////
/// Root

type KbdRootProps = Assign<
  ComponentProps<typeof ark.div>,
  KbdVariantProps & UnstyledProp
>

const KbdRoot = withProviderSlot<HTMLDivElement, KbdRootProps>(ark.div, "root")

///////////////////////////////////////////////////////////////////////////////
/// Key

type KbdKeyProps = Assign<ComponentProps<typeof ark.kbd>, UnstyledProp>

const KbdKey = withSlot<HTMLElement, KbdKeyProps>(ark.kbd, "key")

///////////////////////////////////////////////////////////////////////////////
/// Separator

type KbdSeparatorProps = Assign<ComponentProps<typeof ark.span>, UnstyledProp>

const KbdSeparator = withSlot<HTMLSpanElement, KbdSeparatorProps>(
  ark.span,
  "separator"
)

export { KbdRoot, KbdKey, KbdSeparator }
export type { KbdRootProps, KbdKeyProps, KbdSeparatorProps }
