import { SiReact, SiVuedotjs } from "react-icons/si"

import type { IconType } from "react-icons"

export const FRAMEWORKS: {
  icon: IconType
  name: string
  color: string
  ready: boolean
}[] = [
  {
    color: "#087ea4",
    icon: SiReact,
    name: "React",
    ready: true,
  },
  {
    color: "#42b883",
    icon: SiVuedotjs,
    name: "Vue",
    ready: false,
  },
] as const
