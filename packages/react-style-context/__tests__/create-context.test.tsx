import { createContext } from "../src/create-context"
import { render } from "@testing-library/react"

describe("createContext()", () => {
  it("throws formatted error when used outside provider", () => {
    const [, useContext] = createContext<unknown>()

    const BadConsumer = () => {
      useContext()

      return null
    }

    expect(() => render(<BadConsumer />)).toThrow(
      "<Component /> must be used within <ComponentRoot />"
    )
  })

  it("includes component name and slot in error message", () => {
    const [, useContext] = createContext<unknown>("Popover")

    const BadConsumer = () => {
      useContext("PopoverTrigger")

      return null
    }

    expect(() => render(<BadConsumer />)).toThrow(
      "<PopoverTrigger /> must be used within <PopoverRoot />"
    )
  })

  it("allows falsey context values", () => {
    const [Context, useContext] = createContext<number>("Counter")

    const Consumer = () => {
      const value = useContext("CounterRoot")
      return <span>{value}</span>
    }

    const { getByText } = render(
      <Context.Provider value={0}>
        <Consumer />
      </Context.Provider>
    )

    expect(getByText("0")).toBeInTheDocument()
  })
})
