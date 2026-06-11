import { avatarClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Avatar as ArkAvatar } from "@ark-ui/react/avatar"
import { ark } from "@ark-ui/react/factory"

import type { AvatarVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"
import type { ComponentProps } from "react"

const { withProviderSlot, withSlot } = createStyleContext(avatarClasses, {
  name: "Avatar",
})

///////////////////////////////////////////////////////////////////////////////
/// Root

type AvatarRootProps = Assign<
  ArkAvatar.RootProps,
  AvatarVariantProps & UnstyledProp
>

const AvatarRoot = withProviderSlot<HTMLDivElement, AvatarRootProps>(
  ArkAvatar.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Image

type AvatarImageProps = Assign<ArkAvatar.ImageProps, UnstyledProp>

const AvatarImage = withSlot<HTMLImageElement, AvatarImageProps>(
  ArkAvatar.Image,
  "image"
)

///////////////////////////////////////////////////////////////////////////////
/// Fallback

type AvatarFallbackProps = Assign<ArkAvatar.FallbackProps, UnstyledProp>

const AvatarFallback = withSlot<HTMLSpanElement, AvatarFallbackProps>(
  ArkAvatar.Fallback,
  "fallback"
)

///////////////////////////////////////////////////////////////////////////////
/// Indicator

type AvatarIndicatorProps = Assign<ComponentProps<typeof ark.div>, UnstyledProp>

const AvatarIndicator = withSlot<HTMLDivElement, AvatarIndicatorProps>(
  ark.div,
  "indicator"
)

///////////////////////////////////////////////////////////////////////////////
/// Context

type AvatarContextProps = ArkAvatar.ContextProps

const AvatarContext = ArkAvatar.Context

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  AvatarContext,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarRoot,
}
export type {
  AvatarContextProps,
  AvatarFallbackProps,
  AvatarImageProps,
  AvatarIndicatorProps,
  AvatarRootProps,
}
