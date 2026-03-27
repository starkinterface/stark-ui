import type { ElementType } from "react"

const getElementTypeName = (component: ElementType): string => {
  if (typeof component === "string") {
    return component
  }

  return component.displayName || component.name || "Component"
}

const getSlotComponentName = (
  scopeName: string,
  slot: string | number | symbol
): string => {
  const slotName = String(slot)
  return `${scopeName}${slotName.charAt(0).toUpperCase()}${slotName.slice(1)}`
}

const setDisplayName = (component: unknown, displayName: string): void => {
  ;(component as { displayName?: string }).displayName = displayName
}

export { getElementTypeName, getSlotComponentName, setDisplayName }
