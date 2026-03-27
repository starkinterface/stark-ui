import type { CreateStyleContextConfig } from "../types"

const STARTS_WITH_UPPERCASE_REGEX = /^[A-Z]/

const validateStyleConfig = (config: unknown): CreateStyleContextConfig => {
  if (
    config === null ||
    config === undefined ||
    typeof config !== "object" ||
    typeof (config as { name?: unknown }).name !== "string"
  ) {
    throw new Error(
      "`createStyleContext` requires a config object with a string `name`."
    )
  }

  const normalizedConfig = config as Record<string, unknown> & { name: string }
  const scopeName = normalizedConfig.name.trim()

  if (scopeName.length === 0) {
    throw new Error("`createStyleContext` requires a non-empty `config.name`.")
  }

  if (!STARTS_WITH_UPPERCASE_REGEX.test(scopeName)) {
    throw new Error(
      "`createStyleContext` requires `config.name` to start with an uppercase letter."
    )
  }

  return {
    ...normalizedConfig,
    name: scopeName,
  } as CreateStyleContextConfig
}

export { validateStyleConfig }
