import { attrValue } from "../../utils"
import { Button } from "../button"
import { inputGroupClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { ark } from "@ark-ui/react/factory"
import { FieldInput, FieldTextarea, useFieldContext } from "@ark-ui/react/field"

import type { InputGroupVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"
import type { ComponentProps } from "react"

const { withProviderSlot, withSlot } = createStyleContext(inputGroupClasses, {
  name: "InputGroup",
})

///////////////////////////////////////////////////////////////////////////////
/// Root

type InputGroupRootProps = Assign<
  ComponentProps<typeof ark.div>,
  InputGroupVariantProps & UnstyledProp
>

const InputGroupRoot = withProviderSlot<HTMLDivElement, InputGroupRootProps>(
  ark.div,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Input

type InputGroupInputProps = ComponentProps<typeof FieldInput>

const InputGroupInput = withSlot<HTMLInputElement, InputGroupInputProps>(
  FieldInput,
  "input"
)

///////////////////////////////////////////////////////////////////////////////
/// Textarea

type InputGroupTextareaProps = ComponentProps<typeof FieldTextarea>

const InputGroupTextarea = withSlot<
  HTMLTextAreaElement,
  InputGroupTextareaProps
>(FieldTextarea, "textarea")

///////////////////////////////////////////////////////////////////////////////
/// Addon

type InputGroupAddonProps = Assign<ComponentProps<typeof ark.div>, UnstyledProp>

const InputGroupAddon = withSlot<HTMLDivElement, InputGroupAddonProps>(
  (props: InputGroupAddonProps) => {
    const field = useFieldContext()
    return <ark.div data-disabled={attrValue(field?.disabled)} {...props} />
  },
  "addon"
)

///////////////////////////////////////////////////////////////////////////////
/// Icon

type InputGroupIconProps = Assign<ComponentProps<typeof ark.div>, UnstyledProp>

const InputGroupIcon = withSlot<HTMLDivElement, InputGroupIconProps>(
  (props: InputGroupIconProps) => {
    const field = useFieldContext()
    return <ark.div data-disabled={attrValue(field?.disabled)} {...props} />
  },
  "icon"
)

///////////////////////////////////////////////////////////////////////////////
/// Text

type InputGroupTextProps = Assign<ComponentProps<typeof ark.span>, UnstyledProp>

const InputGroupText = withSlot<HTMLSpanElement, InputGroupTextProps>(
  (props: InputGroupTextProps) => {
    const field = useFieldContext()
    return (
      <ark.span
        data-disabled={attrValue(field?.disabled)}
        aria-disabled={field?.disabled}
        {...props}
      />
    )
  },
  "text"
)

///////////////////////////////////////////////////////////////////////////////
/// Button

type InputGroupButtonProps = Assign<ComponentProps<typeof Button>, UnstyledProp>

const InputGroupButton = withSlot<HTMLButtonElement, InputGroupButtonProps>(
  ({ disabled, ...props }: InputGroupButtonProps) => {
    const field = useFieldContext()
    return <Button {...props} disabled={disabled ?? field?.disabled} />
  },
  "button"
)

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  InputGroupRoot,
  InputGroupInput,
  InputGroupTextarea,
  InputGroupAddon,
  InputGroupIcon,
  InputGroupText,
  InputGroupButton,
}
export type {
  InputGroupRootProps,
  InputGroupInputProps,
  InputGroupTextareaProps,
  InputGroupAddonProps,
  InputGroupIconProps,
  InputGroupTextProps,
  InputGroupButtonProps,
}
