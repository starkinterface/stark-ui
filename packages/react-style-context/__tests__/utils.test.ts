import { splitVariantProps } from "@/utils"

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
