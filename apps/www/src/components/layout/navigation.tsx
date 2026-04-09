import { Button } from "@stark-ui/react"
import { LogoIcon, Wordmark } from "@/components/brand"
import SchemeSwitcher from "@/components/scheme-switcher"
import Link from "next/link"
import { SiGithub } from "react-icons/si"

export default function Navigation() {
  return (
    <div className="content-container px-content-padding flex h-full items-center justify-between">
      <Link
        href="/"
        className="-ml-2 flex h-8 items-center gap-2 border border-transparent px-2 transition-[color,background-color,border-color,translate] outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background"
      >
        <LogoIcon aria-hidden className="h-5" />
        <Wordmark aria-hidden className="h-4" />
        <span className="sr-only">Stark UI</span>
      </Link>

      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon-md"
          aria-label="GitHub"
          type={undefined}
          asChild
        >
          <Link
            href="https://github.com/starkinterface/stark-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub aria-hidden />
          </Link>
        </Button>
        <SchemeSwitcher />
      </div>
    </div>
  )
}
