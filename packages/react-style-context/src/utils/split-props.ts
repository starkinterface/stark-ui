// oxlint-disable max-statements
import type { Props } from "./../types"

const splitVariantProps = <T extends Props, K extends keyof T>(
  props: T,
  variantKeys?: (K | string | number)[]
): [variantProps: Pick<T, K>, restProps: Omit<T, K>] => {
  if (!variantKeys || variantKeys.length === 0) {
    return [{} as Pick<T, K>, props as Omit<T, K>]
  }

  const variantProps = {} as Pick<T, K>
  const restProps = {} as Omit<T, K>
  const variantKeySet = new Set(variantKeys)

  for (const [key, value] of Object.entries(props)) {
    if (variantKeySet.has(key)) {
      ;(variantProps as Props)[key] = value
    } else {
      ;(restProps as Props)[key] = value
    }
  }

  return [variantProps, restProps]
}

export { splitVariantProps }
