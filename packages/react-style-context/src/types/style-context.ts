import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
} from "react"

/** Slot function. Call it to get the class string. e.g. `trigger()` */
export type SlotFn = (...args: never[]) => string

/**
 * Slots object. The resolved return value of a `tv()` call with `slots`.
 *
 * @example
 * const slots = classes({ size: "sm" })
 * slots.root()  // => "root-sm"
 * slots.label() // => "label-sm"
 */
export type Slots = Record<string, SlotFn>

/**
 * tailwind-variants `tv()` function. It also exposes `variantKeys`.
 *
 * @example
 * const classes = tv({
 *   slots: { root: "...", trigger: "..." },
 *   variants: { size: { sm: "...", lg: "..." } },
 * })
 *
 * classes.variantKeys // => ["size"]
 */
export interface Classes<VariantProps = unknown, S extends Slots = Slots> {
  (props?: VariantProps): S
  variantKeys?: (string | number)[]
}

/** Configuration for `createStyleContext`. */
export interface CreateStyleContextConfig {
  name?: `${Uppercase<string>}${string}`
}

/** Context value carrying the computed slot styles. */
export interface StyleContextValue<S extends Slots> {
  slots: S
}

/** Context value carrying the global `unstyled` flag. */
export interface UnstyledContextValue {
  unstyled?: boolean
}

/** Options for `withProvider`. Accepts default props without ref. */
export interface WithProviderOptions<T extends ElementType> {
  defaultProps?: Partial<ComponentPropsWithoutRef<T>>
}

/** Options for `withProviderSlot`. Accepts default props with ref. */
export interface WithProviderSlotOptions<T extends ElementType> {
  defaultProps?: Partial<ComponentPropsWithRef<T>>
}

/** Options for `withSlot`. Accepts default props with ref. */
export interface WithSlotOptions<T extends ElementType> {
  defaultProps?: Partial<ComponentPropsWithRef<T>>
}

/** Prop to opt-out of slot styling on a per-component basis. */
export interface UnstyledProp {
  unstyled?: boolean
}
