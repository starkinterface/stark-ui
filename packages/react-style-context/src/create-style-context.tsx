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
import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  JSX,
  RefAttributes,
} from "react"

type ProviderProps<
  T extends ElementType,
  VariantProps,
> = ComponentPropsWithoutRef<T> & Partial<VariantProps> & UnstyledProp

type ProviderSlotProps<
  T extends ElementType,
  VariantProps,
> = ComponentPropsWithRef<T> &
  Partial<VariantProps> &
  UnstyledProp & { className?: string | undefined }

type SlotProps<T extends ElementType> = ComponentPropsWithRef<T> &
  UnstyledProp & { className?: string | undefined }

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
   * @param {T} Component - The base component to render.
   * @param {WithProviderOptions<T>} [options] - Optional default props.
   *
   * @returns {Function} A component that provides style and unstyled context to its children.
   */
  function withProvider<P>(
    Component: ElementType,
    options?: WithProviderOptions<ElementType>
  ): StyledComponent<P>
  function withProvider<T extends ElementType>(
    Component: T,
    options?: WithProviderOptions<T>
  ): StyledComponent<ProviderProps<T, VariantProps>>
  function withProvider(
    Component: ElementType,
    options?: WithProviderOptions<ElementType>
  ) {
    const StyledComponent = (
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
    }

    return StyledComponent
  }

  /**
   * Creates the root component that **RENDERS an underlying DOM element**.
   *
   * @param {T} Component - The base component to render.
   * @param {keyof S} slot - The slot key to apply className from.
   * @param {WithProviderSlotOptions<T>} [options] - Optional default props.
   *
   * @returns {Function} A component that provides style and unstyled context to its children.
   */
  function withProviderSlot<E, P>(
    Component: ElementType,
    slot: keyof S,
    options?: WithProviderSlotOptions<ElementType>
  ): StyledRefComponent<E, P>
  function withProviderSlot<T extends ElementType>(
    Component: T,
    slot: keyof S,
    options?: WithProviderSlotOptions<T>
  ): StyledComponent<ProviderSlotProps<T, VariantProps>>
  function withProviderSlot(
    Component: ElementType,
    slot: keyof S,
    options?: WithProviderSlotOptions<ElementType>
  ) {
    const StyledComponent = (
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
    }

    return StyledComponent
  }

  /**
   * Creates a component that consumes slot and unstyled context from a parent provider.
   *
   * @param {T} Component - The base component to render.
   * @param {keyof S} slot - The slot key to apply className from.
   * @param {WithSlotOptions<T>} [options] - Optional default props.
   *
   * @returns {Function} A styled slot component.
   */
  function withSlot<E, P>(
    Component: ElementType,
    slot: keyof S,
    options?: WithSlotOptions<ElementType>
  ): StyledRefComponent<E, P>
  function withSlot<T extends ElementType>(
    Component: T,
    slot: keyof S,
    options?: WithSlotOptions<T>
  ): StyledComponent<SlotProps<T>>
  function withSlot(
    Component: ElementType,
    slot: keyof S,
    options?: WithSlotOptions<ElementType>
  ) {
    const StyledComponent = (
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
    }

    return StyledComponent
  }

  return { withProvider, withProviderSlot, withSlot }
}

export { createStyleContext }
