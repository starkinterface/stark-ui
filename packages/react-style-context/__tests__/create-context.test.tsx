import { createContext } from "@/create-context"
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
})
