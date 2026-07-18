import { Button } from "@stark-ui/react"
import { formatWeeklyDownloads, getWeeklyDownloads } from "@/lib/npm-downloads"
import Link from "next/link"
import { Suspense } from "react"
import { SiNpm } from "react-icons/si"

const NpmButton = ({ downloads }: { downloads?: number }) => {
  const formattedDownloads = downloads
    ? formatWeeklyDownloads(downloads)
    : undefined

  return (
    <Button
      variant="ghost"
      aria-label={
        formattedDownloads
          ? `View on npm. ${formattedDownloads} downloads`
          : "View on npm"
      }
      type={undefined}
      size="icon-md"
      className="md:button--md"
      asChild
    >
      <Link
        href="https://npmx.dev/package/@stark-ui/react"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiNpm aria-hidden data-icon="inline-start" />
        <span aria-hidden className="hidden flex-col md:inline-flex">
          <span className="text-[9px] leading-2.25 text-foreground-muted">
            Downloads
          </span>
          <span className="text-[10px] leading-2.5 text-foreground">
            {formattedDownloads || "--"}
          </span>
        </span>
      </Link>
    </Button>
  )
}

const NpmLinkAsync = async () => {
  const downloads = await getWeeklyDownloads("@stark-ui/react", "0.1.0")

  return <NpmButton downloads={downloads} />
}

const NpmLink = () => (
  <Suspense fallback={<NpmButton />}>
    <NpmLinkAsync />
  </Suspense>
)

export { NpmLink }
