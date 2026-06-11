import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const avatarClasses = tv({
  defaultVariants: {
    shape: "circle",
    size: "md",
  },
  slots: {
    fallback: "avatar-fallback",
    image: "avatar-image",
    indicator: "avatar-indicator",
    root: "avatar",
  },
  variants: {
    shape: {
      circle: { root: "avatar--circle" },
      square: { root: "avatar--square" },
    },
    size: {
      lg: { root: "avatar--lg" },
      md: { root: "avatar--md" },
      sm: { root: "avatar--sm" },
      xs: { root: "avatar--xs" },
    },
  },
})

export type AvatarVariantProps = VariantProps<typeof avatarClasses>
