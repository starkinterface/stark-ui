import { Button } from "@stark-ui/react"
import Link from "next/link"
import { SiNpm } from "react-icons/si"

const NpmLink = () => (
  <Button
    variant="ghost"
    size="icon-md"
    aria-label="View on npm"
    type={undefined}
    asChild
  >
    <Link
      href="https://npmx.dev/package/@stark-ui/react"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SiNpm aria-hidden />
    </Link>
  </Button>
)

export { NpmLink }
