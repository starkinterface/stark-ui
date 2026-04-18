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
      <Button
        type={undefined}
        variant="ghost"
        size="icon-md"
        className="icon:nth-child(2):h-4 py-0 sm:button--md icon:w-auto icon:first:h-5"
        asChild
      >
        <Link href="/" className="-ml-1.5 sm:-ml-2.5">
          <LogoIcon aria-hidden className="h-5" />
          <Wordmark aria-hidden className="hidden h-4 sm:block" />
          <span className="sr-only">Stark UI</span>
        </Link>
      </Button>

      <div className="flex items-center gap-0">
        <div className="flex">
          <NavigationItem label="Docs" href="/docs" />
          <NavigationItem label="Components" href="/docs/components" />
        </div>
        <div className="mx-1 h-4 w-px bg-decoration" />
        <SchemeSwitcher />
        <div className="mx-1 h-4 w-px bg-decoration" />
        <NpmLink />
        <GitHubLink className="-mr-2.5" />
      </div>
    </div>
  )
}
