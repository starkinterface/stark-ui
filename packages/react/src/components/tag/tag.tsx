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
/// DeleteTrigger

type TagDeleteTriggerProps = Assign<
  ComponentProps<typeof ark.button>,
  UnstyledProp
>

const TagDeleteTrigger = withSlot<HTMLButtonElement, TagDeleteTriggerProps>(
  ark.button,
  "deleteTrigger"
)

///////////////////////////////////////////////////////////////////////////////
/// Text

type TagTextProps = Assign<ComponentProps<typeof ark.span>, UnstyledProp>

const TagText = withSlot<HTMLSpanElement, TagTextProps>(ark.span, "text")

///////////////////////////////////////////////////////////////////////////////
/// Exports

export { TagRoot, TagDeleteTrigger, TagText }
export type { TagRootProps, TagDeleteTriggerProps, TagTextProps }
