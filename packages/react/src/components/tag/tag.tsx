import { tagClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { ark } from "@ark-ui/react/factory"

import type { TagVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"
import type { ComponentProps } from "react"

const { withProviderSlot, withSlot } = createStyleContext(tagClasses, {
  name: "Tag",
})

///////////////////////////////////////////////////////////////////////////////
/// Root

type TagRootProps = Assign<
  ComponentProps<typeof ark.div>,
  TagVariantProps & UnstyledProp
>

const TagRoot = withProviderSlot<HTMLDivElement, TagRootProps>(ark.div, "root")

///////////////////////////////////////////////////////////////////////////////
/// CloseTrigger

type TagCloseTriggerProps = Assign<
  ComponentProps<typeof ark.button>,
  UnstyledProp
>

const TagCloseTrigger = withSlot<HTMLButtonElement, TagCloseTriggerProps>(
  ark.button,
  "closeTrigger"
)

///////////////////////////////////////////////////////////////////////////////
/// Exports

export { TagRoot, TagCloseTrigger }
export type { TagRootProps, TagCloseTriggerProps }
