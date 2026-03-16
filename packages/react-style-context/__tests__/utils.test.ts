import { mergeProps, splitVariantProps } from "@/utils"

describe("splitVariantProps()", () => {
  it("returns all props as rest when variant keys are undefined", () => {
    const props = { lazyMount: true, unmountOnExit: true }

    const [variantProps, restProps] = splitVariantProps(props)

    expect(variantProps).toStrictEqual({})
    expect(restProps).toStrictEqual(props)
  })

  it("returns all props as rest when variant keys are empty", () => {
    const props = { lazyMount: true, unmountOnExit: true }

    const [variantProps, restProps] = splitVariantProps(props, [])

    expect(variantProps).toStrictEqual({})
    expect(restProps).toStrictEqual(props)
  })

  it("splits variant props from the rest", () => {
    const props = { lazyMount: true, size: "lg", unmountOnExit: true }

    const [variantProps, restProps] = splitVariantProps(props, ["size"])

    expect(variantProps).toStrictEqual({ size: "lg" })
    expect(restProps).toStrictEqual({ lazyMount: true, unmountOnExit: true })
  })

  it("ignores missing variant keys without mutating the original props", () => {
    const props = { lazyMount: true, unmountOnExit: true }

    const [variantProps, restProps] = splitVariantProps(props, ["size"])

    expect(variantProps).toStrictEqual({})
    expect(restProps).toStrictEqual({ lazyMount: true, unmountOnExit: true })
    expect(props).toStrictEqual({ lazyMount: true, unmountOnExit: true })
  })
})

describe("mergeProps()", () => {
  it("merges two plain objects (later wins)", () => {
    const result = mergeProps({ a: 1, b: 2 }, { b: 3, c: 4 })

    expect(result).toStrictEqual({ a: 1, b: 3, c: 4 })
  })

  it("skips undefined values (keeps earlier)", () => {
    const result = mergeProps({ a: 1, b: 2 }, { a: undefined, b: 3 })

    expect(result).toStrictEqual({ a: 1, b: 3 })
  })

  it("merges className via cx() instead of overriding", () => {
    const result = mergeProps(
      { className: "base-class" },
      { className: "extra-class" }
    )

    expect(result.className).toContain("base-class")
    expect(result.className).toContain("extra-class")
  })

  it("returns empty object when called with no args", () => {
    const result = mergeProps()

    expect(result).toStrictEqual({})
  })

  it("handles three-way merge with correct precedence", () => {
    const result = mergeProps({ a: 1, b: 2 }, { b: 3 }, { a: 4 })

    expect(result).toStrictEqual({ a: 4, b: 3 })
  })
})
