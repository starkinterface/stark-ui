"use client"

import { useSelectedLayoutSegments } from "next/navigation"
import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

const styles = tv({
  base: "flex-1",
  defaultVariants: {
    layout: "default",
  },
  variants: {
    layout: {
      default: "flex flex-col",
      withHeader: "flex flex-col",
      withHeaderSidebar: ["content-container", "grid-header-sidebar", "grid"],
      withHeaderSidebarToc: [
        "content-container",
        "grid-header-sidebar-toc md:grid-header-sidebar-toc-md lg:grid-header-sidebar-toc-lg",
        "xl:gap-x-content-padding",
        "grid",
      ],
    },
  },
})

type StylesProps = VariantProps<typeof styles>
type Layout = StylesProps["layout"]

const Main = ({ children }: { children: React.ReactNode }) => {
  const segments = useSelectedLayoutSegments()

  let layout: Layout = "default"

  if (segments.includes("(with-toc)")) {
    layout = "withHeaderSidebarToc"
  } else if (segments.includes("(with-sidebar)")) {
    layout = "withHeaderSidebar"
  } else if (segments.includes("(with-header)")) {
    layout = "withHeader"
  }

  return <main className={styles({ layout })}>{children}</main>
}

export default Main
