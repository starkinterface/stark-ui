import type { SlotFn, Slots } from "../types"

const getSlotFn = <S extends Slots>(
  slots: S,
  slot: keyof S,
  slotComponentName: string
): SlotFn => {
  const slotFn = slots[slot]

  if (typeof slotFn !== "function") {
    throw new TypeError(
      `\`createStyleContext\` could not resolve slot "${String(slot)}" for <${slotComponentName} />. Ensure the slot exists in your tv() slots config.`
    )
  }

  return slotFn as SlotFn
}

export { getSlotFn }
