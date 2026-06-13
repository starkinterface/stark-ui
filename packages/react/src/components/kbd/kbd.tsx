import { attrValue } from "../../utils"
import { kbdClasses, cx } from "@stark-ui/classes"
import { ark } from "@ark-ui/react/factory"

import type { KbdVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { ComponentProps } from "react"

interface KbdProps
  extends KbdVariantProps, ComponentProps<typeof ark.kbd>, UnstyledProp {}

const Kbd = ({
  className,
  unstyled,
  size,
  children,
  ...restProps
}: KbdProps) => {
  const baseClass = kbdClasses({ size })

  return (
    <ark.kbd
      {...restProps}
      className={unstyled ? className : cx(baseClass, className)}
      data-kbd={attrValue(true)}
    >
      {children}
    </ark.kbd>
  )
}

export { Kbd }
export type { KbdProps }
