const getWeeklyDownloads = async (
  pkg: string,
  version: string
): Promise<number | undefined> => {
  try {
    const encodedPkg = encodeURIComponent(pkg)

    const res = await fetch(
      `https://api.npmjs.org/versions/${encodedPkg}/last-week`,
      {
        next: { revalidate: 60 * 60 * 24 },
      }
    )

    if (!res.ok) {
      return undefined
    }

    const json = await res.json()
    const count = json?.downloads?.[version]

    if (typeof count !== "number") {
      return undefined
    }

    return count
  } catch {
    return undefined
  }
}

const formatWeeklyDownloads = (downloads: number) => {
  if (downloads >= 1_000_000) {
    return `${Number((downloads / 1_000_000).toFixed(1))}M/week`
  }

  if (downloads >= 1000) {
    return `${Number((downloads / 1000).toFixed(1))}k/week`
  }

  return `${downloads.toLocaleString()}/week`
}

export { getWeeklyDownloads, formatWeeklyDownloads }
