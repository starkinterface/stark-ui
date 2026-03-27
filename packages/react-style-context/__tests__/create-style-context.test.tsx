import { createStyleContext } from "../src/create-style-context"
import { fireEvent, render, screen } from "@testing-library/react"
import { createRef, forwardRef } from "react"
import { tv } from "tailwind-variants/lite"

import type { ComponentProps, ReactNode } from "react"

const classes = tv({
  defaultVariants: {
    size: "sm",
  },
  slots: {
    label: "",
    root: "",
  },
  variants: {
    size: {
      lg: {
        label: "label-lg",
        root: "root-lg",
      },
      sm: {
        label: "label-sm",
        root: "root-sm",
      },
    },
  },
})

interface SizeVariantProps {
  size?: "sm" | "lg"
}

type StyledRootProps = ComponentProps<"div"> &
  SizeVariantProps & {
    unstyled?: boolean
  }

type StyledLabelProps = ComponentProps<"span"> & {
  unstyled?: boolean
}

type StyledHeadlessRootProps = {
  children?: ReactNode
} & SizeVariantProps & {
    unstyled?: boolean
  }

const Root = forwardRef<HTMLDivElement, ComponentProps<"div">>((props, ref) => (
  <div {...props} ref={ref} />
))
Root.displayName = "Root"

const Label = forwardRef<HTMLSpanElement, ComponentProps<"span">>(
  (props, ref) => <span {...props} ref={ref} />
)
Label.displayName = "Label"

const HeadlessRoot = (props: { children?: ReactNode }) => (
  <div data-testid="headless">{props.children}</div>
)

const createTestStyleContext = () => {
  const { withSlot, withProvider, withProviderSlot } = createStyleContext(
    classes,
    { name: "Popover" }
  )

  const StyledRoot = withProviderSlot<HTMLDivElement, StyledRootProps>(
    Root,
    "root"
  )

  const StyledLabel = withSlot<HTMLSpanElement, StyledLabelProps>(
    Label,
    "label"
  )

  const RootProvider = withProvider<StyledHeadlessRootProps>(HeadlessRoot)

  return { RootProvider, StyledLabel, StyledRoot }
}

describe("createStyleContext()", () => {
  describe("withProviderSlot and withSlot", () => {
    it("applies slot classes", () => {
      const { StyledLabel, StyledRoot } = createTestStyleContext()

      render(
        <StyledRoot data-testid="root" size="sm">
          <StyledLabel data-testid="label" />
        </StyledRoot>
      )

      expect(screen.getByTestId("root")).toHaveClass("root-sm")
      expect(screen.getByTestId("label")).toHaveClass("label-sm")
    })

    it("applies variant classes", () => {
      const { StyledLabel, StyledRoot } = createTestStyleContext()

      render(
        <StyledRoot data-testid="root" size="lg">
          <StyledLabel data-testid="label" />
        </StyledRoot>
      )

      expect(screen.getByTestId("root")).toHaveClass("root-lg")
      expect(screen.getByTestId("label")).toHaveClass("label-lg")
    })

    it("applies default variant from withProviderSlot defaultProps", () => {
      const { withProviderSlot } = createStyleContext(classes, {
        name: "Popover",
      })
      const StyledRoot = withProviderSlot<HTMLDivElement, StyledRootProps>(
        Root,
        "root",
        {
          defaultProps: {
            size: "lg",
          },
        }
      )

      render(<StyledRoot data-testid="root" />)

      expect(screen.getByTestId("root")).toHaveClass("root-lg")
    })

    it("merges custom className with slot class", () => {
      const { StyledLabel, StyledRoot } = createTestStyleContext()

      render(
        <StyledRoot className="extra-root" data-testid="root">
          <StyledLabel className="extra-label" data-testid="label" />
        </StyledRoot>
      )

      const root = screen.getByTestId("root")
      expect(root).toHaveClass("root-sm")
      expect(root).toHaveClass("extra-root")

      const label = screen.getByTestId("label")
      expect(label).toHaveClass("label-sm")
      expect(label).toHaveClass("extra-label")
    })

    it("merges withSlot defaultProps.className with slot and user className", () => {
      const { withSlot, withProviderSlot } = createStyleContext(classes, {
        name: "Popover",
      })
      const StyledRoot = withProviderSlot<HTMLDivElement, StyledRootProps>(
        Root,
        "root"
      )
      const StyledLabel = withSlot<HTMLSpanElement, StyledLabelProps>(
        Label,
        "label",
        {
          defaultProps: {
            className: "default-label",
          },
        }
      )

      render(
        <StyledRoot>
          <StyledLabel className="extra-label" data-testid="label" />
        </StyledRoot>
      )

      expect(screen.getByTestId("label")).toHaveClass("label-sm")
      expect(screen.getByTestId("label")).toHaveClass("default-label")
      expect(screen.getByTestId("label")).toHaveClass("extra-label")
    })

    it("applies default unstyled from withProviderSlot defaultProps", () => {
      const { withProviderSlot } = createStyleContext(classes, {
        name: "Popover",
      })
      const StyledRoot = withProviderSlot<HTMLDivElement, StyledRootProps>(
        Root,
        "root",
        {
          defaultProps: {
            className: "from-default",
            unstyled: true,
          },
        }
      )

      render(<StyledRoot data-testid="root" />)

      expect(screen.getByTestId("root")).toHaveClass("from-default")
      expect(screen.getByTestId("root")).not.toHaveClass("root-sm")
    })

    it("composes default and user event handlers in withSlot", () => {
      const callOrder: string[] = []
      const { withSlot, withProviderSlot } = createStyleContext(classes, {
        name: "Popover",
      })
      const StyledRoot = withProviderSlot<HTMLDivElement, StyledRootProps>(
        Root,
        "root"
      )
      const StyledLabel = withSlot<HTMLSpanElement, StyledLabelProps>(
        Label,
        "label",
        {
          defaultProps: {
            onClick: () => {
              callOrder.push("default")
            },
          },
        }
      )

      render(
        <StyledRoot>
          <StyledLabel
            data-testid="label"
            onClick={() => {
              callOrder.push("user")
            }}
          />
        </StyledRoot>
      )

      fireEvent.click(screen.getByTestId("label"))

      expect(callOrder).toStrictEqual(["default", "user"])
    })

    it("composes default and user refs in withSlot", () => {
      const defaultRef = createRef<HTMLSpanElement>()
      const userRef = createRef<HTMLSpanElement>()
      const { withSlot, withProviderSlot } = createStyleContext(classes, {
        name: "Popover",
      })
      const StyledRoot = withProviderSlot<HTMLDivElement, StyledRootProps>(
        Root,
        "root"
      )
      const StyledLabel = withSlot<HTMLSpanElement, StyledLabelProps>(
        Label,
        "label",
        {
          defaultProps: {
            ref: defaultRef,
          },
        }
      )

      render(
        <StyledRoot>
          <StyledLabel data-testid="label" ref={userRef} />
        </StyledRoot>
      )

      expect(defaultRef.current).toBe(screen.getByTestId("label"))
      expect(userRef.current).toBe(screen.getByTestId("label"))
    })

    it("suppresses slot classes when unstyled", () => {
      const { StyledLabel, StyledRoot } = createTestStyleContext()

      render(
        <StyledRoot className="custom" data-testid="root" unstyled>
          <StyledLabel data-testid="label" />
        </StyledRoot>
      )

      expect(screen.getByTestId("root")).toHaveClass("custom")
      expect(screen.getByTestId("root")).not.toHaveClass("root-sm")
      expect(screen.getByTestId("label").className).toBe("")
    })

    it("allows per-child unstyled override", () => {
      const { StyledLabel, StyledRoot } = createTestStyleContext()

      render(
        <StyledRoot data-testid="root">
          <StyledLabel className="only-this" data-testid="label" unstyled />
        </StyledRoot>
      )

      expect(screen.getByTestId("root")).toHaveClass("root-sm")
      expect(screen.getByTestId("label")).toHaveClass("only-this")
      expect(screen.getByTestId("label")).not.toHaveClass("label-sm")
    })

    it("applies default unstyled from withSlot defaultProps", () => {
      const { withSlot, withProviderSlot } = createStyleContext(classes, {
        name: "Popover",
      })
      const StyledRoot = withProviderSlot<HTMLDivElement, StyledRootProps>(
        Root,
        "root"
      )
      const StyledLabel = withSlot<HTMLSpanElement, StyledLabelProps>(
        Label,
        "label",
        {
          defaultProps: {
            className: "from-default",
            unstyled: true,
          },
        }
      )

      render(
        <StyledRoot>
          <StyledLabel data-testid="label" />
        </StyledRoot>
      )

      expect(screen.getByTestId("label")).toHaveClass("from-default")
      expect(screen.getByTestId("label")).not.toHaveClass("label-sm")
    })

    it("forwards refs through withProviderSlot", () => {
      const { StyledRoot } = createTestStyleContext()
      const ref = createRef<HTMLDivElement>()

      render(<StyledRoot data-testid="root" ref={ref} />)

      expect(ref.current).toBe(screen.getByTestId("root"))
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it("forwards refs through withSlot", () => {
      const { StyledLabel, StyledRoot } = createTestStyleContext()
      const ref = createRef<HTMLSpanElement>()

      render(
        <StyledRoot>
          <StyledLabel data-testid="label" ref={ref} />
        </StyledRoot>
      )

      expect(ref.current).toBe(screen.getByTestId("label"))
      expect(ref.current).toBeInstanceOf(HTMLSpanElement)
    })

    it("invokes callback refs on mount and unmount", () => {
      const { StyledLabel, StyledRoot } = createTestStyleContext()
      const refCalls: (HTMLSpanElement | null)[] = []

      const callbackRef = (node: HTMLSpanElement | null) => {
        refCalls.push(node)
      }

      const { unmount } = render(
        <StyledRoot>
          <StyledLabel data-testid="label" ref={callbackRef} />
        </StyledRoot>
      )

      expect(refCalls.some((node) => node instanceof HTMLSpanElement)).toBe(
        true
      )

      unmount()

      expect(refCalls.at(-1)).toBeNull()
    })

    it("keeps refs stable across rerenders", () => {
      const { StyledLabel, StyledRoot } = createTestStyleContext()
      const ref = createRef<HTMLSpanElement>()

      const { rerender } = render(
        <StyledRoot size="sm">
          <StyledLabel data-testid="label" ref={ref} />
        </StyledRoot>
      )

      const firstNode = ref.current
      expect(firstNode).toBe(screen.getByTestId("label"))

      rerender(
        <StyledRoot className="extra-root" size="lg">
          <StyledLabel className="extra-label" data-testid="label" ref={ref} />
        </StyledRoot>
      )

      expect(ref.current).toBe(firstNode)
      expect(ref.current).toHaveClass("label-lg")
      expect(ref.current).toHaveClass("extra-label")
    })

    it("preserves ref behavior in unstyled mode", () => {
      const { StyledLabel, StyledRoot } = createTestStyleContext()
      const rootRef = createRef<HTMLDivElement>()
      const labelRef = createRef<HTMLSpanElement>()

      render(
        <StyledRoot
          className="root-custom"
          data-testid="root"
          ref={rootRef}
          unstyled
        >
          <StyledLabel
            className="label-custom"
            data-testid="label"
            ref={labelRef}
            unstyled
          />
        </StyledRoot>
      )

      expect(rootRef.current).toBe(screen.getByTestId("root"))
      expect(labelRef.current).toBe(screen.getByTestId("label"))
      expect(rootRef.current).toHaveClass("root-custom")
      expect(labelRef.current).toHaveClass("label-custom")
    })

    it("throws a clear error when a slot key is not defined in classes", () => {
      const { withProviderSlot } = createStyleContext(classes, {
        name: "Popover",
      })
      const BrokenRoot = withProviderSlot<HTMLDivElement, StyledRootProps>(
        Root,
        "missing" as never
      )

      expect(() => render(<BrokenRoot data-testid="root" />)).toThrow(
        'could not resolve slot "missing"'
      )
    })
  })

  describe("withProvider()", () => {
    it("provides context without classes on itself", () => {
      const { RootProvider, StyledLabel } = createTestStyleContext()

      render(
        <RootProvider size="lg">
          <StyledLabel data-testid="label" />
        </RootProvider>
      )

      expect(screen.getByTestId("label")).toHaveClass("label-lg")
    })

    it("applies default variant from withProvider defaultProps", () => {
      const { withProvider, withSlot } = createStyleContext(classes, {
        name: "Popover",
      })
      const RootProvider = withProvider<StyledHeadlessRootProps>(HeadlessRoot, {
        defaultProps: {
          size: "lg",
        },
      })
      const StyledLabel = withSlot<HTMLSpanElement, StyledLabelProps>(
        Label,
        "label"
      )

      render(
        <RootProvider>
          <StyledLabel data-testid="label" />
        </RootProvider>
      )

      expect(screen.getByTestId("label")).toHaveClass("label-lg")
    })
  })

  describe("displayName", () => {
    it("assigns readable display names to generated components", () => {
      const { withProvider, withProviderSlot, withSlot } = createStyleContext(
        classes,
        {
          name: "Field",
        }
      )
      const StyledRoot = withProviderSlot<HTMLDivElement, StyledRootProps>(
        Root,
        "root"
      )
      const StyledLabel = withSlot<HTMLSpanElement, StyledLabelProps>(
        Label,
        "label"
      )
      const RootProvider = withProvider<StyledHeadlessRootProps>(HeadlessRoot)

      expect((StyledRoot as { displayName?: string }).displayName).toBe(
        "Field.root"
      )
      expect((StyledLabel as { displayName?: string }).displayName).toBe(
        "Field.label"
      )
      expect((RootProvider as { displayName?: string }).displayName).toBe(
        "Field.Provider(HeadlessRoot)"
      )
    })
  })

  describe("withSlot() outside provider", () => {
    it("throws without a provider", () => {
      const { StyledLabel } = createTestStyleContext()

      expect(() => render(<StyledLabel data-testid="label" />)).toThrow(
        /must be used within/
      )
    })

    it("uses configured component name in provider error message", () => {
      const { withSlot } = createStyleContext(classes, {
        name: "Popover",
      })
      const StyledLabel = withSlot<HTMLSpanElement, StyledLabelProps>(
        Label,
        "label"
      )

      expect(() => render(<StyledLabel data-testid="label" />)).toThrow(
        "<PopoverLabel /> must be used within <PopoverRoot />"
      )
    })

    it("uses scoped slot name when scope name is Component", () => {
      const { withSlot } = createStyleContext(classes, { name: "Component" })
      const StyledLabel = withSlot<HTMLSpanElement, StyledLabelProps>(
        Label,
        "label"
      )

      expect(() => render(<StyledLabel data-testid="label" />)).toThrow(
        "<ComponentLabel /> must be used within <ComponentRoot />"
      )
    })

    it("does not resolve callback refs without a provider", () => {
      const { StyledLabel } = createTestStyleContext()
      const refCalls: (HTMLSpanElement | null)[] = []

      const callbackRef = (node: HTMLSpanElement | null) => {
        refCalls.push(node)
      }

      expect(() =>
        render(<StyledLabel data-testid="label" ref={callbackRef} />)
      ).toThrow(/must be used within/)
      expect(refCalls).toStrictEqual([])
    })
  })

  describe("invalid classes()", () => {
    it("throws when classes() does not return a slots object", () => {
      const invalidClasses = Object.assign(() => null, {
        variantKeys: ["size"],
      })
      const { withProviderSlot } = createStyleContext(
        invalidClasses as unknown as typeof classes,
        { name: "Popover" }
      )
      const StyledRoot = withProviderSlot<HTMLDivElement, StyledRootProps>(
        Root,
        "root"
      )

      expect(() => render(<StyledRoot data-testid="root" />)).toThrow(
        "`createStyleContext` expected `classes` to return a slots object."
      )
    })
  })
})
