import { Button } from "@stark-ui/react"
import Link from "next/link"
import { Suspense } from "react"
import { SiGithub } from "react-icons/si"

const GitHubStarsCount = async () => {
  const data = await fetch(
    "https://api.github.com/repos/starkinterface/stark-ui",
    {
      next: {
        // Revalidate every 24 hours
        revalidate: 60 * 60 * 24,
      },
    }
  )
  const json = await data.json()

  const formattedStars =
    json.stargazers_count >= 1000
      ? `${Number.parseFloat((json.stargazers_count / 1000).toFixed(1))}k`
      : json.stargazers_count.toLocaleString()

  return formattedStars
}

const GitHubLink = ({ className }: { className?: string }) => (
  <Button variant="ghost" aria-label="View on GitHub" type={undefined} asChild>
    <Link
      href="https://github.com/starkinterface/stark-ui"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <SiGithub aria-hidden data-icon="inline-start" />
      <span className="text-foreground-muted">
        <Suspense fallback={null}>
          <GitHubStarsCount />
        </Suspense>
      </span>
    </Link>
  </Button>
)

export { GitHubLink, GitHubStarsCount }
