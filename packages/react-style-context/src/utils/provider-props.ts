import { mergeProps } from "./merge-props"
import { splitVariantProps } from "./split-props"

import type {
  Classes,
  Dict,
  ProviderInputProps,
  Slots,
  UnstyledProp,
} from "../types"

const mergeWithDefaultProps = <T extends Dict>(
  props: T,
  defaultProps?: Dict
): T => (defaultProps ? (mergeProps(defaultProps, props) as T) : props)

const splitProviderProps = <
  VariantProps,
  S extends Slots,
  T extends ProviderInputProps<VariantProps>,
>(
  classes: Classes<VariantProps, S>,
  providerProps: T,
  variantKeys?: (string | number)[],
  variantKeySet?: ReadonlySet<string | number>
) => {
  const [variantProps, props] = splitVariantProps(
    providerProps,
    variantKeys,
    variantKeySet
  )
  const slots = classes(variantProps as VariantProps)

  if (slots === null || typeof slots !== "object") {
    throw new Error(
      "`createStyleContext` expected `classes` to return a slots object."
    )
  }

  const { unstyled, ...restProps } = props as Omit<T, keyof VariantProps> &
    UnstyledProp

  return { restProps, slots: slots as S, unstyled }
}

const splitProviderPropsWithDefaults = <
  VariantProps,
  S extends Slots,
  T extends ProviderInputProps<VariantProps>,
>(
  classes: Classes<VariantProps, S>,
  providerProps: T,
  variantKeys?: (string | number)[],
  variantKeySet?: ReadonlySet<string | number>,
  defaultProps?: Dict
) => {
  const mergedProviderProps = mergeWithDefaultProps(providerProps, defaultProps)

  return splitProviderProps(
    classes,
    mergedProviderProps as ProviderInputProps<VariantProps>,
    variantKeys,
    variantKeySet
  )
}

export {
  mergeWithDefaultProps,
  splitProviderProps,
  splitProviderPropsWithDefaults,
}
