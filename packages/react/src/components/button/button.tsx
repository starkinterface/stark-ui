import { attrValue } from "@/utils"
import { buttonClasses, cx } from "@stark-ui/classes"
import { ark } from "@ark-ui/react/factory"

import type { ButtonVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { HTMLArkProps } from "@ark-ui/react/factory"

interface ButtonProps
  extends ButtonVariantProps, HTMLArkProps<"button">, UnstyledProp {
  loading?: boolean
}

const Button = ({
  className,
  unstyled,
  size,
  variant,
  loading,
  children,
  ...restProps
}: ButtonProps) => {
  const baseClass = buttonClasses({ size, variant })

  return (
    <ark.button
      type="button"
      {...restProps}
      data-loading={attrValue(loading)}
      disabled={loading || restProps.disabled}
      className={unstyled ? className : cx(baseClass, className)}
    >
      {children}
    </ark.button>
  )
}

export { Button }
export type { ButtonProps }
