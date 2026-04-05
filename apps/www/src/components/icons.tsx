import { cx } from "@stark-ui/react"
import { SiReact, SiVuedotjs } from "react-icons/si"

import type { IconBaseProps } from "react-icons"

const ReactIcon = ({ className, ...props }: IconBaseProps) => (
  <SiReact
    className={cx("text-[#087ea4] black:text-[#58c4dc]", className)}
    {...props}
  />
)

const VueIcon = ({ className, ...props }: IconBaseProps) => (
  <SiVuedotjs className={cx("text-[#42b883]", className)} {...props} />
)

export { ReactIcon, VueIcon }
