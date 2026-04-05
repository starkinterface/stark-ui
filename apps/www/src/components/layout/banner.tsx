"use client"

import { Button } from "@stark-ui/react"
import { BANNER_ID } from "@/constants/features"

const handleClose = () => {
  delete document.documentElement.dataset.bannerVisible
  document.documentElement.dataset.bannerHidden = ""

  try {
    localStorage.setItem("banner-hidden", BANNER_ID)
  } catch {
    console.log("Failed to set banner in localStorage")
  }
}

const Banner = () => (
  <div className="content-container px-content-padding banner-hidden:hidden flex h-full items-center justify-between">
    <p className="text-sm text-foreground-muted">
      Stark UI is under heavy development.
    </p>
    <Button size="xs" variant="outline" onClick={handleClose}>
      Close
    </Button>
  </div>
)

export default Banner
