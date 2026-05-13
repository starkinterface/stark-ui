import { buttonGroupClasses, cx } from "@stark-ui/classes"
import { ark } from "@ark-ui/react/factory"

import type { ButtonGroupVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { HTMLArkProps } from "@ark-ui/react/factory"

interface ButtonGroupProps
  extends ButtonGroupVariantProps, HTMLArkProps<"div">, UnstyledProp {}

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
      data-orientation={orientation}
      {...restProps}
      className={unstyled ? className : cx(baseClass, className)}
    >
      {children}
    </ark.div>
  )
}

export { ButtonGroup }
export type { ButtonGroupProps }
