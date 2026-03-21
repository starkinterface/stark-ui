import { attrValue } from "../../utils"
import { toggleClasses, cx } from "@stark-ui/classes"
import { Toggle as ArkToggle } from "@ark-ui/react/toggle"

import type { ToggleVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { ToggleRootProps } from "@ark-ui/react/toggle"

interface ToggleProps
  extends ToggleVariantProps, ToggleRootProps, UnstyledProp {}

const Toggle = ({
  className,
  unstyled,
  children,
  ...restProps
}: ToggleProps) => {
  const baseClass = toggleClasses()

  return (
    <ArkToggle.Root
      {...restProps}
      data-toggle={attrValue(true)}
      data-part={null}
      data-scope={null}
      className={unstyled ? className : cx(baseClass, className)}
    >
      {children}
    </ArkToggle.Root>
  )
}

export { Toggle }
export type { ToggleProps }
