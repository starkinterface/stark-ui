import { createStyleContext } from "@/create-style-context"
import { render, screen } from "@testing-library/react"
import { forwardRef } from "react"
import { tv } from "tailwind-variants/lite"

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

const Root = forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  (props, ref) => <div {...props} ref={ref} />
)
Root.displayName = "Root"

const Label = forwardRef<HTMLSpanElement, React.ComponentProps<"span">>(
  (props, ref) => <span {...props} ref={ref} />
)
Label.displayName = "Label"

const HeadlessRoot = (props: { children?: React.ReactNode }) => (
  <div data-testid="headless">{props.children}</div>
)

describe("createStyleContext()", () => {
  describe("withProviderSlot and withSlot", () => {
    it("applies slot classes", () => {
      const { withSlot, withProviderSlot } = createStyleContext(classes)
      const StyledRoot = withProviderSlot(Root, "root")
      const StyledLabel = withSlot(Label, "label")

      render(
        <StyledRoot data-testid="root" size="sm">
          <StyledLabel data-testid="label" />
        </StyledRoot>
      )

      expect(screen.getByTestId("root")).toHaveClass("root-sm")
      expect(screen.getByTestId("label")).toHaveClass("label-sm")
    })

    it("applies variant classes", () => {
      const { withSlot, withProviderSlot } = createStyleContext(classes)
      const StyledRoot = withProviderSlot(Root, "root")
      const StyledLabel = withSlot(Label, "label")

      render(
        <StyledRoot data-testid="root" size="lg">
          <StyledLabel data-testid="label" />
        </StyledRoot>
      )

      expect(screen.getByTestId("root")).toHaveClass("root-lg")
      expect(screen.getByTestId("label")).toHaveClass("label-lg")
    })

    it("merges custom className with slot class", () => {
      const { withSlot, withProviderSlot } = createStyleContext(classes)
      const StyledRoot = withProviderSlot(Root, "root")
      const StyledLabel = withSlot(Label, "label")

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

    it("suppresses slot classes when unstyled", () => {
      const { withSlot, withProviderSlot } = createStyleContext(classes)
      const StyledRoot = withProviderSlot(Root, "root")
      const StyledLabel = withSlot(Label, "label")

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
      const { withSlot, withProviderSlot } = createStyleContext(classes)
      const StyledRoot = withProviderSlot(Root, "root")
      const StyledLabel = withSlot(Label, "label")

      render(
        <StyledRoot data-testid="root">
          <StyledLabel className="only-this" data-testid="label" unstyled />
        </StyledRoot>
      )

      expect(screen.getByTestId("root")).toHaveClass("root-sm")
      expect(screen.getByTestId("label")).toHaveClass("only-this")
      expect(screen.getByTestId("label")).not.toHaveClass("label-sm")
    })
  })

  describe("withProvider()", () => {
    it("provides context without classes on itself", () => {
      const { withSlot, withProvider } = createStyleContext(classes)
      const RootProvider = withProvider(HeadlessRoot)
      const StyledLabel = withSlot(Label, "label")

      render(
        <RootProvider size="lg">
          <StyledLabel data-testid="label" />
        </RootProvider>
      )

      expect(screen.getByTestId("label")).toHaveClass("label-lg")
    })
  })

  describe("withSlot() outside provider", () => {
    it("throws without a provider", () => {
      const { withSlot } = createStyleContext(classes)
      const StyledLabel = withSlot(Label, "label")

      expect(() => render(<StyledLabel data-testid="label" />)).toThrow(
        /must be used within/
      )
    })
  })
})
