const getGitHubStars = async (repo: string): Promise<number | undefined> => {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      next: { revalidate: 60 * 60 * 24 },
    })

    if (!res.ok) {
      return undefined
    }

    const json = await res.json()
    const count = json?.stargazers_count

    if (typeof count !== "number") {
      return undefined
    }

    return count
  } catch {
    return undefined
  }
}

const formatGitHubStars = (count: number) =>
  count >= 1000
    ? `${Number.parseFloat((count / 1000).toFixed(1))}k`
    : count.toLocaleString()

export { getGitHubStars, formatGitHubStars }
