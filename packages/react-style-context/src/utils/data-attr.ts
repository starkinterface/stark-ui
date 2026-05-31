/**
 * Converts a PascalCase string to kebab-case.
 *
 * @example
 * toKebabCase("TagsInput")   // → "tags-input"
 * toKebabCase("NumberInput")  // → "number-input"
 * toKebabCase("Combobox")     // → "combobox"
 * toKebabCase("Tag")          // → "tag"
 */
const PASCAL_SPLIT_REGEX = /(?<=[a-z0-9])(?=[A-Z])/gu

const toKebabCase = (value: string): string =>
  value.split(PASCAL_SPLIT_REGEX).join("-").toLowerCase()

/**
 * Builds the data attribute name for a slot.
 *
 * - For "root" slots, returns `data-{scope}` (e.g. `data-tag`).
 * - For other slots, returns `data-{scope}-{slot}` (e.g. `data-tag-delete-trigger`).
 *
 * @example
 * toSlotDataAttrName("Tag", "root")           // → "data-tag"
 * toSlotDataAttrName("Tag", "deleteTrigger")  // → "data-tag-delete-trigger"
 * toSlotDataAttrName("TagsInput", "itemDeleteTrigger") // → "data-tags-input-item-delete-trigger"
 */
const toSlotDataAttrName = (
  scopeName: string,
  slot: string | number | symbol
): string => {
  const kebabScope = toKebabCase(scopeName)
  const slotStr = String(slot)

  if (slotStr === "root") {
    return `data-${kebabScope}`
  }

  return `data-${kebabScope}-${toKebabCase(slotStr)}`
}

/**
 * Returns a props object containing a single data attribute for the given slot.
 *
 * @example
 * getSlotDataAttr("Tag", "deleteTrigger")
 * // → { "data-tag-delete-trigger": "" }
 */
const getSlotDataAttr = (
  scopeName: string,
  slot: string | number | symbol
): Record<string, string> => {
  const attrName = toSlotDataAttrName(scopeName, slot)
  return { [attrName]: "" }
}

export { getSlotDataAttr, toKebabCase, toSlotDataAttrName }
