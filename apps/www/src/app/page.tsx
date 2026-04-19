import { Button } from "@stark-ui/react"
import heroBackground from "@/assets/images/hero-background.webp"
import InteractivePreview from "@/components/interactive-preview"
import Image from "next/image"
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
        <Button className="lg:button--lg" variant="primary" asChild>
          <Link href="/docs">
            Get Started
            <LuArrowRight data-icon="inline-end" />
          </Link>
        </Button>
        <Button className="lg:button--lg" variant="ghost" asChild>
          <Link href="/docs/components">View Components</Link>
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
