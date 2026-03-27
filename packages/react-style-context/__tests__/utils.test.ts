import {
  mergeProps,
  splitVariantProps,
  splitProviderProps,
  splitProviderPropsWithDefaults,
  mergeWithDefaultProps,
  getSlotFn,
  getElementTypeName,
  getSlotComponentName,
  setDisplayName,
  validateStyleConfig,
} from "../src/utils"

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

  it("composes event handlers from multiple sources", () => {
    const callOrder: string[] = []
    const result = mergeProps(
      {
        onClick: () => {
          callOrder.push("default")
        },
      },
      {
        onClick: () => {
          callOrder.push("user")
        },
      }
    ) as {
      onClick?: () => void
    }

    result.onClick?.()

    expect(callOrder).toStrictEqual(["default", "user"])
  })

  it("composes refs from multiple sources", () => {
    const defaultRef = { current: null as HTMLDivElement | null }
    const userRef = { current: null as HTMLDivElement | null }
    const node = document.createElement("div")
    const result = mergeProps(
      { ref: defaultRef },
      { ref: userRef }
    ) as unknown as {
      ref?: (node: HTMLDivElement | null) => void
    }

    result.ref?.(node)

    expect(defaultRef.current).toBe(node)
    expect(userRef.current).toBe(node)
  })
})

describe("provider-props utils", () => {
  interface TestVariantProps {
    size?: "sm" | "lg"
  }

  const createClasses = () =>
    Object.assign(
      (props?: TestVariantProps) => ({
        root: () => (props?.size === "lg" ? "root-lg" : "root-sm"),
      }),
      {
        variantKeys: ["size"],
      }
    )

  it("mergeWithDefaultProps merges defaults and props", () => {
    const result = mergeWithDefaultProps(
      { className: "user", id: "label" },
      { className: "default" }
    )

    expect(result.id).toBe("label")
    expect(result.className).toContain("default")
    expect(result.className).toContain("user")
  })

  it("splitProviderProps separates variant and unstyled props", () => {
    const classes = createClasses()
    const variantKeySet = new Set(classes.variantKeys)
    const result = splitProviderProps(
      classes,
      { id: "root", size: "lg", unstyled: true },
      classes.variantKeys,
      variantKeySet
    )

    expect(result.restProps).toStrictEqual({ id: "root" })
    expect(result.unstyled).toBe(true)
    expect(result.slots.root()).toBe("root-lg")
  })

  it("splitProviderPropsWithDefaults applies default variant props", () => {
    const classes = createClasses()
    const variantKeySet = new Set(classes.variantKeys)
    const result = splitProviderPropsWithDefaults(
      classes,
      { id: "root" },
      classes.variantKeys,
      variantKeySet,
      { size: "lg" }
    )

    expect(result.restProps).toStrictEqual({ id: "root" })
    expect(result.slots.root()).toBe("root-lg")
  })

  it("throws when classes() does not return a slots object", () => {
    const brokenClasses = Object.assign(() => null, {
      variantKeys: ["size"],
    })

    expect(() =>
      splitProviderProps(
        brokenClasses as never,
        { size: "sm" },
        brokenClasses.variantKeys,
        new Set(brokenClasses.variantKeys)
      )
    ).toThrow(
      /^`createStyleContext` expected `classes` to return a slots object\.$/
    )
  })
})

describe("slot utils", () => {
  it("returns slot function when slot exists", () => {
    const slots = {
      root: () => "root-class",
    }

    const slotFn = getSlotFn(slots, "root", "PopoverRoot")

    expect(slotFn()).toBe("root-class")
  })

  it("throws when slot key is missing", () => {
    const slots = {
      root: () => "root-class",
    }

    expect(() =>
      getSlotFn(slots as never, "trigger", "PopoverTrigger")
    ).toThrow(
      /^`createStyleContext` could not resolve slot "trigger" for <PopoverTrigger \/>\. Ensure the slot exists in your tv\(\) slots config\.$/
    )
  })

  it("throws when resolved slot value is not a function", () => {
    const invalidSlots = {
      root: "root-class",
    }

    expect(() =>
      getSlotFn(invalidSlots as never, "root", "PopoverRoot")
    ).toThrow(
      /^`createStyleContext` could not resolve slot "root" for <PopoverRoot \/>\. Ensure the slot exists in your tv\(\) slots config\.$/
    )
  })
})

describe("display-name utils", () => {
  it("gets host element name for string element types", () => {
    expect(getElementTypeName("button")).toBe("button")
  })

  it("prefers displayName over function name", () => {
    const Named = Object.assign(
      function Label() {
        return null
      },
      {
        displayName: "PopoverLabel",
      }
    )

    expect(getElementTypeName(Named)).toBe("PopoverLabel")
  })

  it("returns fallback name for anonymous components", () => {
    expect(getElementTypeName({} as never)).toBe("Component")
  })

  it("builds slot component name from scope and slot", () => {
    expect(getSlotComponentName("Popover", "label")).toBe("PopoverLabel")
  })

  it("keeps scoped naming for Component scope", () => {
    expect(getSlotComponentName("Component", "label")).toBe("ComponentLabel")
  })

  it("assigns displayName to component-like objects", () => {
    const component: { displayName?: string } = {}

    setDisplayName(component, "Field.root")

    expect(component.displayName).toBe("Field.root")
  })
})

describe("config utils", () => {
  it("returns normalized config when valid", () => {
    const config = validateStyleConfig({
      futureFlag: true,
      name: "  Popover  ",
    }) as { name: string; futureFlag?: boolean }

    expect(config.name).toBe("Popover")
    expect(config.futureFlag).toBe(true)
  })

  it("returns trimmed name when config is valid", () => {
    expect(
      validateStyleConfig({
        name: "  Popover  ",
      }).name
    ).toBe("Popover")
  })

  it("throws when config.name is missing", () => {
    expect(() => validateStyleConfig({})).toThrow(
      /^`createStyleContext` requires a config object with a string `name`\.$/
    )
  })

  it("throws when name is empty", () => {
    expect(() =>
      validateStyleConfig({
        name: "   ",
      })
    ).toThrow(/^`createStyleContext` requires a non-empty `config\.name`\.$/)
  })

  it("throws when name does not start with uppercase", () => {
    expect(() =>
      validateStyleConfig({
        name: "popover",
      })
    ).toThrow(
      /^`createStyleContext` requires `config\.name` to start with an uppercase letter\.$/
    )
  })
})
