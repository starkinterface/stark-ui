"use client"

import { Tooltip, Button } from "@stark-ui/react"
import { LuTrash2 } from "react-icons/lu"

const TooltipExample = () => (
  <div className="flex items-center gap-4">
    <Tooltip.Root
      closeDelay={0}
      openDelay={0}
      positioning={{ placement: "top-start" }}
    >
      <Tooltip.Trigger asChild>
        <Button variant="danger-soft" size="icon-md">
          <LuTrash2 />
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Positioner>
        <Tooltip.Content>
          <Tooltip.Arrow>
            <Tooltip.ArrowTip />
          </Tooltip.Arrow>
          This will permanently delete the deployment!
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  </div>
)

const Overlays = () => (
  <div className="flex flex-col gap-4">
    <TooltipExample />
  </div>
)

export { Overlays }
