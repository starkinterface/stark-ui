import { attrValue } from "../../utils"
import { toggleTipClasses } from "@stark-ui/classes"
import { Portal } from "@ark-ui/react"
import { Popover as ArkPopover } from "@ark-ui/react/popover"

import type { ToggleTipVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Toggle as ArkToggle } from "@ark-ui/react/toggle"

interface ToggleTipProps
  extends
    ToggleTipVariantProps,
    ArkPopover.RootProps,
    ArkToggle.RootProps,
    UnstyledProp {}

const ToggleTip = ({
  children,
  portalled = true,
  lazyMount = true,
  unmountOnExit = true,
  ...restProps
}: ToggleTipProps) => {
  const { base, content } = toggleTipClasses()

  return (
    <ArkPopover.Root
      unmountOnExit={unmountOnExit}
      lazyMount={lazyMount}
      portalled={portalled}
      {...restProps}
      data-toggle-tip={attrValue(true)}
      data-part={null}
      data-scope={null}
    >
      <ArkPopover.Trigger
        data-toggle-tip-trigger={attrValue(true)}
        data-part={null}
        data-scope={null}
        className={base()}
      >
        help
      </ArkPopover.Trigger>
      <Portal disabled={!portalled}>
        <ArkPopover.Positioner
          data-toggle-tip-positioner={attrValue(true)}
          data-part={null}
          data-scope={null}
        >
          <ArkPopover.Content
            data-toggle-tip-content={attrValue(true)}
            data-part={null}
            data-scope={null}
            className={content()}
          >
            {children}
          </ArkPopover.Content>
        </ArkPopover.Positioner>
      </Portal>
    </ArkPopover.Root>
  )
}

export { ToggleTip }
export type { ToggleTipProps }
