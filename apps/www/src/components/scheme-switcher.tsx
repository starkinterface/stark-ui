"use client"

import { Button } from "@stark-ui/react"
import { useTheme } from "next-themes"
import { useCallback } from "react"
import { LuMoon, LuSun } from "react-icons/lu"

export default function SchemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const handleClick = useCallback(() => {
    setTheme(theme === "black" ? "white" : "black")
  }, [setTheme, theme])

  return (
    <Button
      onClick={handleClick}
      size="icon-md"
      variant="ghost"
      aria-label="Switch scheme"
    >
      <LuMoon className="white:hidden" />
      <LuSun className="black:hidden" />
    </Button>
  )
}
