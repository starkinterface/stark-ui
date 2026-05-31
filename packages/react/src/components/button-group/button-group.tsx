import { attrValue } from "../../utils"
import { buttonGroupClasses, cx } from "@stark-ui/classes"
import { ark } from "@ark-ui/react/factory"

import type { ButtonGroupVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { ComponentProps } from "react"

interface ButtonGroupProps
  extends
    ButtonGroupVariantProps,
    ComponentProps<typeof ark.div>,
    UnstyledProp {}

const ButtonGroup = ({
  className,
  unstyled,
  orientation = "horizontal",
  spacing = "regular",
  children,
  ...restProps
}: ButtonGroupProps) => {
  const baseClass = buttonGroupClasses({ orientation, spacing })

  return (
    <ark.div
      {...restProps}
      data-button-group={attrValue(true)}
      data-orientation={orientation}
      className={unstyled ? className : cx(baseClass, className)}
    >
      {children}
    </ark.div>
  )
}

export { ButtonGroup }
export type { ButtonGroupProps }
