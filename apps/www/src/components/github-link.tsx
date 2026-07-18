import { Button } from "@stark-ui/react"
import { formatGitHubStars, getGitHubStars } from "@/lib/github-stars"
import Link from "next/link"
import { Suspense } from "react"
import { SiGithub } from "react-icons/si"

const GitHubButton = ({ stars }: { stars?: number }) => {
  const formattedStars = stars ? formatGitHubStars(stars) : undefined

  return (
    <Button
      variant="ghost"
      aria-label={
        formattedStars
          ? `View on GitHub. ${formattedStars} stars`
          : "View on GitHub"
      }
      type={undefined}
      size="icon-md"
      className="md:button--md"
      asChild
    >
      <Link
        href="https://github.com/starkinterface/stark-ui"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGithub aria-hidden data-icon="inline-start" />
        <span aria-hidden className="hidden flex-col md:inline-flex">
          <span className="text-[9px] leading-2.25 text-foreground-muted">
            Stars
          </span>
          <span className="text-[10px] leading-2.5 text-foreground">
            {formattedStars || "--"}
          </span>
        </span>
      </Link>
    </Button>
  )
}

const GitHubLinkAsync = async () => {
  const stars = await getGitHubStars("starkinterface/stark-ui")

  return <GitHubButton stars={stars} />
}

const GitHubLink = () => (
  <Suspense fallback={<GitHubButton />}>
    <GitHubLinkAsync />
  </Suspense>
)

export { GitHubLink }
