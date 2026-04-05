import { Button, cx } from "@stark-ui/react"
import { FRAMEWORKS } from "@/constants/frameworks"
import Link from "next/link"
import { LuArrowRight } from "react-icons/lu"

const Frameworks = () => (
  <section className="flex gap-2">
    <h2 className="sr-only">Supported Frameworks</h2>
    <ul className="flex items-center gap-6">
      {FRAMEWORKS.map((framework) => (
        <li key={framework.name}>
          <div
            data-soon={framework.ready ? undefined : ""}
            className={cx(
              "flex items-center gap-2 whitespace-nowrap",
              "text-foreground",
              "data-soon:text-foreground-muted data-soon:icon:opacity-48"
            )}
          >
            <framework.icon className="size-5" aria-hidden />{" "}
            <span>{framework.name}</span>
          </div>
        </li>
      ))}
    </ul>
  </section>
)

export default function Page() {
  return (
    <div className="content-container p-content-padding flex flex-1 flex-col justify-end gap-6">
      {/* oxfmt-ignore */}
      <h1 className="text-2xl max-w-4xl font-light tracking-tight text-pretty lg:text-4xl">
        A living user interface <span className="text-foreground-muted">— you grow your product, we grow the interface. Modern design, accessible by default.</span>
      </h1>

      {/* oxfmt-ignore */}
      <p className="text-pretty text-foreground-muted lg:text-lg">
        <strong className="font-normal">A component library</strong> with first-class support <strong className="font-normal">for React and Vue</strong>
      </p>

      <div className="flex gap-2">
        <Button className="lg:button--lg" variant="accent" asChild>
          <Link href="/docs">Get Started</Link>
        </Button>
        <Button className="lg:button--lg" variant="ghost" asChild>
          <Link href="/docs/components">
            View Components <LuArrowRight />
          </Link>
        </Button>
      </div>

      <Frameworks />
    </div>
  )
}
