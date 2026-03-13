import type { Dict } from "@/types"

const splitVariantProps = (
  props: Dict,
  variantKeys?: string[]
): [variantProps: Dict, restProps: Dict] => {
  if (!variantKeys || variantKeys.length === 0) {
    return [{}, props]
  }

  const variantProps = {} as Dict
  const restProps = {} as Dict
  const variantKeySet = new Set(variantKeys)

  for (const [key, value] of Object.entries(props)) {
    if (variantKeySet.has(key)) {
      variantProps[key] = value
    } else {
      restProps[key] = value
    }
  }

  return [variantProps, restProps]
}

export { splitVariantProps }
