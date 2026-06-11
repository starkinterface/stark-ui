import { attrValue } from "../../utils"
import { avatarGroupClasses, cx } from "@stark-ui/classes"
import { ark } from "@ark-ui/react/factory"

import type { AvatarGroupVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { ComponentProps } from "react"

interface AvatarGroupProps
  extends
    AvatarGroupVariantProps,
    ComponentProps<typeof ark.div>,
    UnstyledProp {}

const AvatarGroup = ({
  children,
  className,
  stacking,
  unstyled,
  ...restProps
}: AvatarGroupProps) => {
  const baseClass = avatarGroupClasses({ stacking })

  return (
    <ark.div
      {...restProps}
      className={unstyled ? className : cx(baseClass, className)}
      data-avatar-group={attrValue(true)}
    >
      {children}
    </ark.div>
  )
}

export { AvatarGroup }
export type { AvatarGroupProps }
