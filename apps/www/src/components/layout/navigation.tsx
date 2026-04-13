import { Button } from "@stark-ui/react"
import { LogoIcon, Wordmark } from "@/components/brand"
import { GitHubLink } from "@/components/github-link"
import { NpmLink } from "@/components/npm-link"
import SchemeSwitcher from "@/components/scheme-switcher"
import Link from "next/link"

const NavigationItem = ({ label, href }: { label: string; href: string }) => (
  <Button variant="ghost" type={undefined} asChild>
    <Link href={href}>{label}</Link>
  </Button>
)

export default function Navigation() {
  return (
    <div className="content-container px-content-padding flex h-full items-center justify-between">
      <Link
        href="/"
        className="-ml-2 flex h-8 items-center gap-2 rounded-xs border border-transparent px-2 transition-[color,background-color,border-color,translate] outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background"
      >
        <LogoIcon aria-hidden className="h-5" />
        <Wordmark aria-hidden className="hidden h-4 sm:block" />
        <span className="sr-only">Stark UI</span>
      </Link>

      <div className="flex items-center gap-0">
        <div className="flex">
          <NavigationItem label="Docs" href="/docs" />
          <NavigationItem label="Components" href="/components" />
        </div>
        <div className="mx-1 h-4 w-px bg-decoration" />
        <SchemeSwitcher />
        <div className="mx-1 h-4 w-px bg-decoration" />
        <NpmLink />
        <GitHubLink />
      </div>
    </div>
  )
}
