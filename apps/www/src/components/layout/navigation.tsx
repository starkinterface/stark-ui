import { LogoIcon, Wordmark } from "@/components/brand"
import SchemeSwitcher from "@/components/scheme-switcher"
import Link from "next/link"

export default function Navigation() {
  return (
    <div className="content-container px-content-padding flex h-full items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <LogoIcon aria-hidden className="h-5" />
        <Wordmark aria-hidden className="h-4" />
        <span className="sr-only">Stark UI</span>
      </Link>
      <SchemeSwitcher />
    </div>
  )
}
