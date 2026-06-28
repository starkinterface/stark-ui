import { Button } from "@stark-ui/react"
import { getGitHubStars, formatGitHubStars } from "@/lib/github-stars"
import Link from "next/link"
import { Suspense } from "react"
import { SiGithub } from "react-icons/si"

const GitHubButton = ({ stars }: { stars?: number }) => (
  <Button
    variant="ghost"
    aria-label={stars ? `View on GitHub. ${stars} stars` : "View on GitHub"}
    type={undefined}
    size={stars ? "md" : "icon-md"}
    asChild
  >
    <Link
      href="https://github.com/starkinterface/stark-ui"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SiGithub aria-hidden data-icon={stars ? "inline-start" : undefined} />
      {stars && (
        <span className="text-foreground-muted">
          {formatGitHubStars(stars)}
        </span>
      )}
    </Link>
  </Button>
)

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
