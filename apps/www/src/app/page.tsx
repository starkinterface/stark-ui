import { Button } from "@stark-ui/react"
import heroBackground from "@/assets/images/hero-background.webp"
import { ReactIcon, VueIcon } from "@/components/icons"
import InteractivePreview from "@/components/interactive-preview"
import Image from "next/image"
import Link from "next/link"
import { LuArrowRight } from "react-icons/lu"

import type { IconType } from "react-icons"

const Framework = ({
  name,
  Icon,
}: {
  name: string
  Icon: IconType
  ready: boolean
}) => (
  <span className="relative ps-4.5 whitespace-nowrap text-foreground-muted lg:ps-5">
    <Icon
      className="absolute inset-y-0 inset-s-0 my-auto size-3.5 text-foreground-muted! lg:size-4"
      aria-hidden
    />
    {name}
  </span>
)

export default function Page() {
  return (
    <div className="content-container p-content-padding flex flex-1 flex-col justify-end">
      {/* oxfmt-ignore */}
      <h1 className="text-2xl max-w-4xl font-light tracking-tight text-pretty lg:text-4xl">
        A living user interface <span className="text-foreground-muted">— you grow your product, we grow the interface. Modern design, accessible by default.</span>
      </h1>

      {/* oxfmt-ignore */}
      <p className="text-pretty text-foreground-muted mt-2 lg:text-lg">
        <strong className="font-normal">A component library</strong> with first-class support <strong className="font-normal">for <Framework name="React" Icon={ReactIcon} ready={true} /> and <Framework name="Vue" Icon={VueIcon} ready={false} /></strong>
      </p>

      <div className="mt-6 flex gap-2">
        <Button className="lg:button--lg" variant="primary" asChild>
          <Link href="/docs">Quick Start</Link>
        </Button>
        <Button className="lg:button--lg" variant="ghost" asChild>
          <Link href="/docs/components">
            View Components <LuArrowRight data-icon="inline-end" />
          </Link>
        </Button>
      </div>

      <div className="relative mt-8 hidden overflow-clip rounded-md p-10 lg:mt-12 lg:flex">
        <div className="pointer-events-none absolute inset-0 -z-1">
          <Image
            src={heroBackground}
            alt=""
            preload
            className="absolute inset-0 size-full object-cover object-center"
          />
        </div>
        <InteractivePreview />
      </div>
    </div>
  )
}
