"use client"

import { createContext } from "./create-context"
import { splitVariantProps, mergeProps, resolveClassName } from "./utils"

import type {
  Dict,
  Slots,
  Classes,
  CreateStyleContextConfig,
  StyleContextValue,
  UnstyledContextValue,
  WithProviderOptions,
  WithProviderSlotOptions,
  WithSlotOptions,
  UnstyledProp,
} from "./types"
import type { ElementType, JSX, RefAttributes } from "react"

type StyledComponent<P> = (props: P) => JSX.Element
type StyledRefComponent<E, P> = (props: P & RefAttributes<E>) => JSX.Element

const createStyleContext = <VariantProps = unknown, S extends Slots = Slots>(
  classes: Classes<VariantProps, S>,
  config?: CreateStyleContextConfig
) => {
  const [StyleProvider, useStyle] = createContext<StyleContextValue<S>>(
    config?.name
  )

  const [UnstyledProvider, useUnstyled] = createContext<UnstyledContextValue>(
    config?.name
  )

  /**
   * Splits variant props, computes slot styles, and extracts the `unstyled` flag
   * from the combined provider props.
   *
   * @param {T} providerProps - The full props including variant keys and `unstyled`.
   *
   * @returns {object} An object with `restProps`, `slots`, and `unstyled`.
   */
  const useSplitProviderProps = <
    T extends Dict & Partial<VariantProps> & UnstyledProp,
  >(
    providerProps: T
  ) => {
    const [variantProps, props] = splitVariantProps(
      providerProps,
      classes.variantKeys
    )

    const slots = classes(variantProps as VariantProps)

    const { unstyled, ...restProps } = props as Omit<T, keyof VariantProps> &
      UnstyledProp

    return { restProps, slots, unstyled }
  }

  /**
   * Creates the root component that **DOES NOT RENDER an underlying DOM element**.
   *
   * @param {ElementType} Component - The base component to render.
   * @param {WithProviderOptions<ElementType>} [options] - Optional default props.
   *
   * @returns {Function} A component that provides style and unstyled context to its children.
   */
  const withProvider = <P,>(
    Component: ElementType,
    options?: WithProviderOptions<ElementType>
  ): StyledComponent<P> => {
    const StyledComponent = ((
      props: Dict & Partial<VariantProps> & UnstyledProp
    ) => {
      const SuperComponent = Component as ElementType
      const { restProps, slots, unstyled } = useSplitProviderProps(props)
      const defaultProps = options?.defaultProps ?? {}
      const mergedProps = mergeProps(defaultProps, restProps) as Dict

      return (
        <StyleProvider value={{ slots }}>
          <UnstyledProvider value={{ unstyled }}>
            <SuperComponent {...mergedProps} />
          </UnstyledProvider>
        </StyleProvider>
      )
    }) as StyledComponent<P>

    return StyledComponent
  }

  /**
   * Creates the root component that **RENDERS an underlying DOM element**.
   *
   * @param {ElementType} Component - The base component to render.
   * @param {keyof S} slot - The slot key to apply className from.
   * @param {WithProviderSlotOptions<ElementType>} [options] - Optional default props.
   *
   * @returns {Function} A component that provides style and unstyled context to its children.
   */
  const withProviderSlot = <E, P>(
    Component: ElementType,
    slot: keyof S,
    options?: WithProviderSlotOptions<ElementType>
  ): StyledRefComponent<E, P> => {
    const StyledComponent = ((
      props: Dict &
        Partial<VariantProps> &
        UnstyledProp & {
          className?: string | undefined
        }
    ) => {
      const SuperComponent = Component as ElementType
      const { restProps, slots, unstyled } = useSplitProviderProps(props)

      const defaultProps = options?.defaultProps ?? {}
      const mergedProps = mergeProps(defaultProps, restProps)

      const { className, ...otherProps } = mergedProps as Dict & {
        className?: string
      }

      return (
        <StyleProvider value={{ slots }}>
          <UnstyledProvider value={{ unstyled }}>
            <SuperComponent
              {...otherProps}
              className={resolveClassName(slots[slot], className, unstyled)}
            />
          </UnstyledProvider>
        </StyleProvider>
      )
    }) as StyledRefComponent<E, P>

    return StyledComponent
  }

  /**
   * Creates a component that consumes slot and unstyled context from a parent provider.
   *
   * @param {ElementType} Component - The base component to render.
   * @param {keyof S} slot - The slot key to apply className from.
   * @param {WithSlotOptions<ElementType>} [options] - Optional default props.
   *
   * @returns {Function} A styled slot component.
   */
  const withSlot = <E, P>(
    Component: ElementType,
    slot: keyof S,
    options?: WithSlotOptions<ElementType>
  ): StyledRefComponent<E, P> => {
    const StyledComponent = ((
      props: Dict & UnstyledProp & { className?: string | undefined }
    ) => {
      const SuperComponent = Component as ElementType
      const { slots } = useStyle()
      const { unstyled: providerUnstyled } = useUnstyled()
      const { unstyled, className, ...restProps } = props

      const defaultProps = options?.defaultProps ?? {}
      const mergedProps = mergeProps(defaultProps, restProps)
      const isUnstyled = unstyled ?? providerUnstyled

      return (
        <SuperComponent
          {...mergedProps}
          className={resolveClassName(slots[slot], className, isUnstyled)}
        />
      )
    }) as StyledRefComponent<E, P>

    return StyledComponent
  }

  return { withProvider, withProviderSlot, withSlot }
}

export { createStyleContext }
