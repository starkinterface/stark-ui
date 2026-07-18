"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LuBookText,
  LuDownload,
  LuPalette,
  LuHistory,
  LuBot,
  LuScrollText,
  LuZap,
} from "react-icons/lu"
import { SiModelcontextprotocol } from "react-icons/si"

import type { ComponentPropsWithRef } from "react"

type NavigationItemPrimaryProps = ComponentPropsWithRef<"a"> & {
  id?: string
  href: string
}

const NavigationItemPrimary = ({
  id,
  href,
  children,
}: NavigationItemPrimaryProps) => {
  const pathname = usePathname()
  const isCurrentPage = pathname === href

  return (
    <Link
      href={href}
      aria-current={isCurrentPage ? "page" : undefined}
      className="docs-navigation-item-primary"
    >
      {id === "agents-overview" && <LuBot />}
      {id === "agents-mcp-server" && <SiModelcontextprotocol />}
      {id === "agents-llms" && <LuScrollText />}
      {id === "agents-skills" && <LuZap />}

      {id === "introduction" && <LuBookText />}
      {id === "installation" && <LuDownload />}
      {id === "customization" && <LuPalette />}
      {id === "changelog" && <LuHistory />}

      {children}
    </Link>
  )
}

type NavigationItemSecondaryProps = ComponentPropsWithRef<"a"> & {
  href: string
}

const NavigationItemSecondary = ({
  href,
  children,
}: NavigationItemSecondaryProps) => {
  const pathname = usePathname()
  const isCurrentPage = pathname === href

  return (
    <Link
      href={href}
      aria-current={isCurrentPage ? "page" : undefined}
      className="docs-navigation-item-secondary"
    >
      {children}
    </Link>
  )
}

export { NavigationItemPrimary, NavigationItemSecondary }
export type { NavigationItemPrimaryProps, NavigationItemSecondaryProps }
