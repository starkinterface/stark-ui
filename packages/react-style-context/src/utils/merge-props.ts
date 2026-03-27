// oxlint-disable max-statements
import { cx } from "tailwind-variants/lite"

import type { Props } from "../types"
import type { Ref } from "react"

const EVENT_HANDLER_REGEX = /^on[A-Z]/

const assignRef = <T>(ref: Ref<T> | undefined, value: T | null): void => {
  if (typeof ref === "function") {
    ref(value)
    return
  }

  if (ref && typeof ref === "object") {
    ;(ref as { current: T | null }).current = value
  }
}

const composeRefs =
  <T>(firstRef: Ref<T> | undefined, secondRef: Ref<T> | undefined) =>
  (value: T | null) => {
    assignRef(firstRef, value)
    assignRef(secondRef, value)
  }

const composeEventHandlers =
  (
    firstHandler: (...args: unknown[]) => unknown,
    secondHandler: (...args: unknown[]) => unknown
  ) =>
  (...args: unknown[]) => {
    firstHandler(...args)
    secondHandler(...args)
  }

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
      const previousValue = result[key]

      // Skip undefined, keeps the earlier value
      if (value === undefined) {
        continue
      }

      // className is merged, not overridden
      if (key === "className") {
        result[key] = cx(result[key] as string, value as string)
        continue
      }

      if (key === "ref" && previousValue !== undefined) {
        result[key] = composeRefs(
          previousValue as Ref<unknown>,
          value as Ref<unknown>
        )
        continue
      }

      if (
        EVENT_HANDLER_REGEX.test(key) &&
        typeof previousValue === "function" &&
        typeof value === "function"
      ) {
        result[key] = composeEventHandlers(
          previousValue as (...args: unknown[]) => unknown,
          value as (...args: unknown[]) => unknown
        )
        continue
      }

      result[key] = value
    }
  }

  return result as T
}

export { mergeProps }
