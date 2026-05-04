import { inputClasses, cx } from "@stark-ui/classes"
import { FieldInput } from "@ark-ui/react/field"

import type { InputVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"
import type { FieldInputProps } from "@ark-ui/react/field"

type InputProps = Assign<FieldInputProps, InputVariantProps & UnstyledProp>

const Input = ({
  className,
  unstyled,
  type = "text",
  ...restProps
}: InputProps) => {
  const baseClass = inputClasses({})

  return (
    <FieldInput
      type={type}
      {...restProps}
      className={unstyled ? className : cx(baseClass, className)}
    />
  )
}

export { Input }
export type { InputProps }
