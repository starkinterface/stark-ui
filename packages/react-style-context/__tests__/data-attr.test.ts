import { getSlotDataAttr, toKebabCase, toSlotDataAttrName } from "../src/utils"

describe("toKebabCase()", () => {
  it("converts simple PascalCase", () => {
    expect(toKebabCase("Tag")).toBe("tag")
  })

  it("converts multi-word PascalCase", () => {
    expect(toKebabCase("TagsInput")).toBe("tags-input")
  })

  it("converts NumberInput", () => {
    expect(toKebabCase("NumberInput")).toBe("number-input")
  })

  it("converts single-word lowercase", () => {
    expect(toKebabCase("Combobox")).toBe("combobox")
  })

  it("converts camelCase slot names", () => {
    expect(toKebabCase("deleteTrigger")).toBe("delete-trigger")
  })

  it("converts multi-segment camelCase", () => {
    expect(toKebabCase("itemDeleteTrigger")).toBe("item-delete-trigger")
  })

  it("converts clearTrigger", () => {
    expect(toKebabCase("clearTrigger")).toBe("clear-trigger")
  })

  it("converts itemGroupLabel", () => {
    expect(toKebabCase("itemGroupLabel")).toBe("item-group-label")
  })
})

describe("toSlotDataAttrName()", () => {
  it("returns data-{scope} for root slot", () => {
    expect(toSlotDataAttrName("Tag", "root")).toBe("data-tag")
  })

  it("returns data-{scope}-{slot} for non-root slot", () => {
    expect(toSlotDataAttrName("Tag", "deleteTrigger")).toBe(
      "data-tag-delete-trigger"
    )
  })

  it("returns data-{scope}-{slot} for text slot", () => {
    expect(toSlotDataAttrName("Tag", "text")).toBe("data-tag-text")
  })

  it("handles multi-word scope names", () => {
    expect(toSlotDataAttrName("TagsInput", "itemDeleteTrigger")).toBe(
      "data-tags-input-item-delete-trigger"
    )
  })

  it("handles NumberInput scope", () => {
    expect(toSlotDataAttrName("NumberInput", "incrementTrigger")).toBe(
      "data-number-input-increment-trigger"
    )
  })

  it("handles Combobox clearTrigger", () => {
    expect(toSlotDataAttrName("Combobox", "clearTrigger")).toBe(
      "data-combobox-clear-trigger"
    )
  })

  it("handles Combobox root", () => {
    expect(toSlotDataAttrName("Combobox", "root")).toBe("data-combobox")
  })

  it("handles Select clearTrigger", () => {
    expect(toSlotDataAttrName("Select", "clearTrigger")).toBe(
      "data-select-clear-trigger"
    )
  })

  it("handles Checkbox control", () => {
    expect(toSlotDataAttrName("Checkbox", "control")).toBe(
      "data-checkbox-control"
    )
  })

  it("handles InputGroup root", () => {
    expect(toSlotDataAttrName("InputGroup", "root")).toBe("data-input-group")
  })
})

describe("getSlotDataAttr()", () => {
  it("returns a props object with the data attribute", () => {
    expect(getSlotDataAttr("Tag", "deleteTrigger")).toStrictEqual({
      "data-tag-delete-trigger": "",
    })
  })

  it("returns a props object for root slot", () => {
    expect(getSlotDataAttr("Tag", "root")).toStrictEqual({
      "data-tag": "",
    })
  })

  it("returns a props object for combobox emptyText", () => {
    expect(getSlotDataAttr("Combobox", "emptyText")).toStrictEqual({
      "data-combobox-empty-text": "",
    })
  })
})
