// oxlint-disable max-statements
import { cx } from "tailwind-variants/lite"

import type { Props } from "./../types"

/**
 * Shallowly merges multiple props objects with left-to-right precedence.
 *
 * - Later values override earlier ones (unless `undefined`).
 * - `className` values are merged via `cx()` instead of overridden.
 *
 * @param {T[]} sources - Props objects to merge (later wins).
 * @returns {T} A single merged props object.
 */
const mergeProps = <T extends Props>(...sources: T[]): T => {
  const result = {} as Props

  for (const source of sources) {
    for (const key in source) {
      if (!Object.hasOwn(source, key)) {
        continue
      }

      const value = source[key]

      // Skip undefined, keeps the earlier value
      if (value === undefined) {
        continue
      }

      // className is merged, not overridden
      if (key === "className") {
        result[key] = cx(result[key] as string, value as string)
        continue
      }

      result[key] = value
    }
  }

  return result as T
}

export { mergeProps }
