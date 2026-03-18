import { cx } from "tailwind-variants/lite"

import type { SlotFn } from "./../types"

/**
 * Returns the slot className unless `unstyled` is true, in which case
 * it passes through the user's className unchanged.
 *
 * @param {SlotFn} slotFn - Slot function from tailwind-variants that generates the class string.
 * @param {string | undefined} className - User-provided className to merge with the slot class.
 * @param {boolean | undefined} unstyled - When true, bypasses the slot class entirely.
 *
 * @returns {string | undefined} The resolved className string, or undefined if both inputs are empty.
 */
const resolveClassName = (
  slotFn: SlotFn,
  className: string | undefined,
  unstyled: boolean | undefined
): string | undefined => (unstyled ? className : cx(slotFn(), className))

export { resolveClassName }
