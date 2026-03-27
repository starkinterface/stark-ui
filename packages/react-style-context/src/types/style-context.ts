import type { Dict } from "./shared"
import type { JSX, RefAttributes } from "react"

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

/** Configuration for `createStyleContext`. `name` must start with an uppercase letter. */
export interface CreateStyleContextConfig {
  name: string
}

/** Context value carrying the computed slot styles. */
export interface StyleContextValue<S extends Slots> {
  slots: S
}

/** Context value carrying the global `unstyled` flag. */
export interface UnstyledContextValue {
  unstyled?: boolean
}

/** Options for `withProvider`. Accepts default props for the styled wrapper props. */
export interface WithProviderOptions<P> {
  defaultProps?: Partial<P>
}

/** Options for `withProviderSlot`. Accepts default props for the styled wrapper props. */
export interface WithProviderSlotOptions<P> {
  defaultProps?: Partial<P>
}

/** Options for `withSlot`. Accepts default props for the styled wrapper props. */
export interface WithSlotOptions<P> {
  defaultProps?: Partial<P>
}

/** Prop to opt-out of slot styling on a per-component basis. */
export interface UnstyledProp {
  unstyled?: boolean
}

/** Generic component signature returned by `withProvider` wrappers. */
export type StyledComponent<P> = (props: P) => JSX.Element

/** Generic ref-capable component signature returned by slot wrappers. */
export type StyledRefComponent<E, P> = (
  props: P & RefAttributes<E>
) => JSX.Element

/**
 * Internal provider input shape before variant and `unstyled` props are split.
 * Combines arbitrary props with optional variant keys and the shared `unstyled` prop.
 */
export type ProviderInputProps<VariantProps> = Dict &
  Partial<VariantProps> &
  UnstyledProp

/** Internal helper shape for components that accept `className`. */
export interface SlotClassNameProp {
  className?: string | undefined
}
