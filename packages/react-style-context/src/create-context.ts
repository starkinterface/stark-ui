import {
  createContext as createReactContext,
  useContext as useReactContext,
} from "react"

const createContext = <T>(contextName = "Component") => {
  const Context = createReactContext<T | null>(null)

  const useContext = (slotName = "Component"): T => {
    const context = useReactContext(Context)

    if (!context) {
      throw new Error(
        `<${slotName} /> must be used within <${contextName}Root />.`
      )
    }

    return context
  }

  return [Context, useContext] as const
}

export { createContext }
