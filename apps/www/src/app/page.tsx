import { Button } from "@stark-ui/react"
import { ComponentsGrid } from "@/components/components-grid"
import DecorationLine from "@/components/decoration-line"
import Link from "next/link"
import { LuArrowRight } from "react-icons/lu"

export default function Page() {
  return (
    <div className="content-container p-content-padding flex flex-1 flex-col justify-end">
      {/* oxfmt-ignore */}
      <h1 className="text-2xl max-w-xl font-light tracking-tight text-pretty lg:text-4xl lg:max-w-4xl">
        <em className="not-italic">Beautiful component library for React and Vue.</em> <span className="text-foreground-muted">Carefully crafted themes built with Tailwind CSS—modern design, accessible by default.</span>
      </h1>

      <div className="mt-6 flex gap-2">
        <Button className="lg:button--lg" variant="accent" asChild>
          <Link href="/docs">
            Get Started
            <LuArrowRight data-icon="inline-end" />
          </Link>
        </Button>
        <Button className="lg:button--lg" variant="ghost" asChild>
          <Link href="/docs/components">View Components</Link>
        </Button>
      </div>

      <div className="-mx-content-padding relative mt-8 hidden lg:mt-12 lg:flex">
        <DecorationLine className="inside-container z-1" />
        <DecorationLine className="inside-container z-1" position="end" />
        <DecorationLine orientation="vertical" className="z-1" />
        <DecorationLine orientation="vertical" position="end" className="z-1" />
        <ComponentsGrid />
      </div>
    </div>
  )
}
