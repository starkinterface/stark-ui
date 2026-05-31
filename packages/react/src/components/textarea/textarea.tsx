import { attrValue } from "../../utils"
import { textareaClasses, cx } from "@stark-ui/classes"
import { FieldTextarea } from "@ark-ui/react/field"

import type { TextareaVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"
import type { FieldTextareaProps } from "@ark-ui/react/field"

type TextareaProps = Assign<
  FieldTextareaProps,
  TextareaVariantProps & UnstyledProp
>

const Textarea = ({ className, unstyled, ...restProps }: TextareaProps) => {
  const baseClass = textareaClasses({})

  return (
    <FieldTextarea
      {...restProps}
      data-textarea={attrValue(true)}
      className={unstyled ? className : cx(baseClass, className)}
    />
  )
}

export { Textarea }
export type { TextareaProps }
