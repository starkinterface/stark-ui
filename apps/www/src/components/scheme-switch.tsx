"use client"

import { ToggleGroup } from "@stark-ui/react"
import { useTheme } from "next-themes"
import { useCallback, useEffect, useState } from "react"
import { LuLaptopMinimal, LuMoon, LuSun } from "react-icons/lu"

export default function SchemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [scheme, setScheme] = useState(["system"])

  useEffect(() => {
    if (theme) {
      setScheme([theme])
    }
  }, [theme])

  const handleSelectionChange = useCallback(
    ({ value }: ToggleGroup.ValueChangeDetails) => {
      const selectedScheme = [...value][0] as string

      if (selectedScheme) {
        setTheme(selectedScheme)
      }
    },
    [setTheme]
  )

  return (
    <ToggleGroup.Root
      deselectable
      value={scheme}
      onValueChange={handleSelectionChange}
    >
      <ToggleGroup.Item value="system">
        <LuLaptopMinimal /> System
      </ToggleGroup.Item>
      <ToggleGroup.Item value="dark">
        <LuMoon /> Dark
      </ToggleGroup.Item>
      <ToggleGroup.Item value="light">
        <LuSun /> Light
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}
