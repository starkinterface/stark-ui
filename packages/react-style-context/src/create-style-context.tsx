"use client"

import { splitVariantProps, mergeProps, resolveClassName } from "@/utils"
import { createContext } from "./create-context"

import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
} from "react"
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
  const useSplitProviderProps = <T extends Dict & VariantProps & UnstyledProp>(
    providerProps: T
  ) => {
    const [variantProps, props] = splitVariantProps(
      providerProps,
      classes.variantKeys
    )

    const slots = classes(variantProps)

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
  const withProvider = <T extends ElementType>(
    Component: T,
    options?: WithProviderOptions<T>
  ) => {
    const StyledComponent = (
      props: ComponentPropsWithoutRef<T> & Partial<VariantProps> & UnstyledProp
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
  const withProviderSlot = <T extends ElementType>(
    Component: T,
    slot: keyof S,
    options?: WithProviderSlotOptions<T>
  ) => {
    const StyledComponent = (
      props: ComponentPropsWithRef<T> &
        Partial<VariantProps> &
        UnstyledProp & {
          className?: string | undefined
        }
    ) => {
      const SuperComponent = Component as ElementType
      const { restProps, slots, unstyled } = useSplitProviderProps(props)

      const defaultProps = options?.defaultProps ?? {}
      const mergedProps = mergeProps(defaultProps, restProps)

      const { className, ...otherProps } =
        mergedProps as ComponentPropsWithRef<T> & { className?: string }

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
  const withSlot = <T extends ElementType>(
    Component: T,
    slot: keyof S,
    options?: WithSlotOptions<T>
  ) => {
    const StyledComponent = (
      props: ComponentPropsWithRef<T> &
        UnstyledProp & { className?: string | undefined }
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
