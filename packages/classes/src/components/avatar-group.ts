import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const avatarGroupClasses = tv({
  base: "avatar-group",
  defaultVariants: {
    stacking: "last-on-top",
  },
  variants: {
    stacking: {
      "first-on-top": "avatar-group--first-on-top",
      "last-on-top": "avatar-group--last-on-top",
    },
  },
})

export type AvatarGroupVariantProps = VariantProps<typeof avatarGroupClasses>
