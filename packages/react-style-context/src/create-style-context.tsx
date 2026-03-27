"use client"

import { createContext } from "./create-context"
import {
  resolveClassName,
  getSlotFn,
  getElementTypeName,
  getSlotComponentName,
  setDisplayName,
  validateStyleConfig,
  mergeWithDefaultProps,
  splitProviderPropsWithDefaults,
} from "./utils"

import type {
  Dict,
  Slots,
  Classes,
  CreateStyleContextConfig,
  ProviderInputProps,
  SlotClassNameProp,
  StyledComponent,
  StyledRefComponent,
  StyleContextValue,
  UnstyledContextValue,
  WithProviderOptions,
  WithProviderSlotOptions,
  WithSlotOptions,
  UnstyledProp,
} from "./types"
import type { ElementType, RefAttributes } from "react"

const createStyleContext = <VariantProps = unknown, S extends Slots = Slots>(
  classes: Classes<VariantProps, S>,
  config: CreateStyleContextConfig
) => {
  const validatedConfig = validateStyleConfig(config)
  const scopeName = validatedConfig.name

  const [StyleProvider, useStyle] =
    createContext<StyleContextValue<S>>(scopeName)

  const [UnstyledProvider, useUnstyled] =
    createContext<UnstyledContextValue>(scopeName)

  const { variantKeys } = classes
  const variantKeySet =
    variantKeys && variantKeys.length > 0 ? new Set(variantKeys) : undefined

  /**
   * Creates the root component that **DOES NOT RENDER an underlying DOM element**.
   *
   * @param {ElementType} Component - The base component to render.
   * @param {WithProviderOptions<P>} [options] - Optional default props.
   *
   * @returns {Function} A component that provides style and unstyled context to its children.
   */
  const withProvider = <P, T extends ElementType = ElementType>(
    Component: T,
    options?: WithProviderOptions<P>
  ): StyledComponent<P> => {
    const StyledComponent = ((props: P) => {
      const SuperComponent = Component as ElementType
      const { restProps, slots, unstyled } = splitProviderPropsWithDefaults(
        classes,
        props as unknown as ProviderInputProps<VariantProps>,
        variantKeys,
        variantKeySet,
        options?.defaultProps as Dict | undefined
      )

      return (
        <StyleProvider value={{ slots }}>
          <UnstyledProvider value={{ unstyled }}>
            <SuperComponent {...(restProps as Dict)} />
          </UnstyledProvider>
        </StyleProvider>
      )
    }) as StyledComponent<P>
    setDisplayName(
      StyledComponent,
      `${scopeName}.Provider(${getElementTypeName(Component)})`
    )

    return StyledComponent
  }

  /**
   * Creates the root component that **RENDERS an underlying DOM element**.
   *
   * @param {ElementType} Component - The base component to render.
   * @param {keyof S} slot - The slot key to apply className from.
   * @param {WithProviderSlotOptions<P>} [options] - Optional default props.
   *
   * @returns {Function} A component that provides style and unstyled context to its children.
   */
  const withProviderSlot = <E, P, T extends ElementType = ElementType>(
    Component: T,
    slot: keyof S,
    options?: WithProviderSlotOptions<P>
  ): StyledRefComponent<E, P> => {
    const slotComponentName = `${scopeName}.${String(slot)}`
    const StyledComponent = ((props: P & RefAttributes<E>) => {
      const SuperComponent = Component as ElementType
      const { restProps, slots, unstyled } = splitProviderPropsWithDefaults(
        classes,
        props as unknown as ProviderInputProps<VariantProps>,
        variantKeys,
        variantKeySet,
        options?.defaultProps as Dict | undefined
      )
      const { className, ...otherProps } = restProps as Dict & SlotClassNameProp
      const slotFn = getSlotFn(slots, slot, slotComponentName)

      return (
        <StyleProvider value={{ slots }}>
          <UnstyledProvider value={{ unstyled }}>
            <SuperComponent
              {...otherProps}
              className={resolveClassName(slotFn, className, unstyled)}
            />
          </UnstyledProvider>
        </StyleProvider>
      )
    }) as StyledRefComponent<E, P>
    setDisplayName(StyledComponent, slotComponentName)

    return StyledComponent
  }

  /**
   * Creates a component that consumes slot and unstyled context from a parent provider.
   *
   * @param {ElementType} Component - The base component to render.
   * @param {keyof S} slot - The slot key to apply className from.
   * @param {WithSlotOptions<P>} [options] - Optional default props.
   *
   * @returns {Function} A styled slot component.
   */
  const withSlot = <E, P, T extends ElementType = ElementType>(
    Component: T,
    slot: keyof S,
    options?: WithSlotOptions<P>
  ): StyledRefComponent<E, P> => {
    const slotComponentName = getSlotComponentName(scopeName, slot)
    const StyledComponent = ((props: P & RefAttributes<E>) => {
      const SuperComponent = Component as ElementType
      const { slots } = useStyle(slotComponentName)
      const { unstyled: providerUnstyled } = useUnstyled(slotComponentName)
      const mergedProps = mergeWithDefaultProps(
        props as unknown as Dict,
        options?.defaultProps as Dict | undefined
      )
      const { className, unstyled, ...otherProps } = mergedProps as Dict &
        SlotClassNameProp &
        UnstyledProp
      const slotFn = getSlotFn(slots, slot, slotComponentName)
      const isUnstyled = unstyled ?? providerUnstyled

      return (
        <SuperComponent
          {...otherProps}
          className={resolveClassName(slotFn, className, isUnstyled)}
        />
      )
    }) as StyledRefComponent<E, P>
    setDisplayName(StyledComponent, `${scopeName}.${String(slot)}`)

    return StyledComponent
  }

  return { withProvider, withProviderSlot, withSlot }
}

export { createStyleContext }
