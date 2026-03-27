import {
  createContext as createReactContext,
  useContext as useReactContext,
} from "react"

const createContext = <T>(contextName = "Component") => {
  const Context = createReactContext<T | null>(null)

  const useContext = (slotName = "Component"): T => {
    const context = useReactContext(Context)

    if (context === null) {
      throw new Error(
        `<${slotName} /> must be used within <${contextName}Root /> or <${contextName}RootProvider />.`
      )
    }

    return context
  }

  return [Context, useContext] as const
}

export { createContext }
