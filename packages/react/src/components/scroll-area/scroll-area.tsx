import { scrollAreaClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { ScrollArea as ArkScrollArea } from "@ark-ui/react/scroll-area"

import type { ScrollAreaVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(scrollAreaClasses, {
  name: "ScrollArea",
})

///////////////////////////////////////////////////////////////////////////////
/// Root

type ScrollAreaRootProps = Assign<
  ArkScrollArea.RootProps,
  ScrollAreaVariantProps & UnstyledProp
>

const ScrollAreaRoot = withProviderSlot<HTMLDivElement, ScrollAreaRootProps>(
  ArkScrollArea.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Viewport

type ScrollAreaViewportProps = Assign<ArkScrollArea.ViewportProps, UnstyledProp>

const ScrollAreaViewport = withSlot<HTMLDivElement, ScrollAreaViewportProps>(
  ArkScrollArea.Viewport,
  "viewport"
)

///////////////////////////////////////////////////////////////////////////////
/// Content

type ScrollAreaContentProps = Assign<ArkScrollArea.ContentProps, UnstyledProp>

const ScrollAreaContent = withSlot<HTMLDivElement, ScrollAreaContentProps>(
  ArkScrollArea.Content,
  "content"
)

///////////////////////////////////////////////////////////////////////////////
/// Scrollbar

type ScrollAreaScrollbarProps = Assign<
  ArkScrollArea.ScrollbarProps,
  UnstyledProp
>

const ScrollAreaScrollbar = withSlot<HTMLDivElement, ScrollAreaScrollbarProps>(
  ArkScrollArea.Scrollbar,
  "scrollbar"
)

///////////////////////////////////////////////////////////////////////////////
/// Thumb

type ScrollAreaThumbProps = Assign<ArkScrollArea.ThumbProps, UnstyledProp>

const ScrollAreaThumb = withSlot<HTMLDivElement, ScrollAreaThumbProps>(
  ArkScrollArea.Thumb,
  "thumb"
)

///////////////////////////////////////////////////////////////////////////////
/// Corner

type ScrollAreaCornerProps = Assign<ArkScrollArea.CornerProps, UnstyledProp>

const ScrollAreaCorner = withSlot<HTMLDivElement, ScrollAreaCornerProps>(
  ArkScrollArea.Corner,
  "corner"
)

///////////////////////////////////////////////////////////////////////////////
/// Context

type ScrollAreaContextProps = ArkScrollArea.ContextProps

const ScrollAreaContext = ArkScrollArea.Context

export {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
  ScrollAreaContext,
}

export type {
  ScrollAreaRootProps,
  ScrollAreaViewportProps,
  ScrollAreaContentProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaCornerProps,
  ScrollAreaContextProps,
}
