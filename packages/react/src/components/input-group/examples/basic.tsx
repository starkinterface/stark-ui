import { InputGroup } from "../"
import { SearchIcon, FilterIcon, EllipsisIcon, InfoIcon } from "lucide-react"

export default function Basic() {
  return (
    <div className="flex flex-col gap-4">
      <InputGroup.Root>
        <InputGroup.Input placeholder="Search..." />
        <InputGroup.Addon data-align="inline-start">
          <SearchIcon />
        </InputGroup.Addon>
        <InputGroup.Addon data-align="inline-end">
          <InputGroup.Button size="icon-xs" variant="ghost">
            <FilterIcon />
          </InputGroup.Button>
          <InputGroup.Button size="icon-xs" variant="outline">
            <EllipsisIcon />
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="example" />
        <InputGroup.Addon data-align="inline-start">
          <InputGroup.Button size="icon-xs" variant="ghost">
            <InfoIcon />
          </InputGroup.Button>
          <InputGroup.Text>https://</InputGroup.Text>
        </InputGroup.Addon>
        <InputGroup.Addon data-align="inline-end">
          <InputGroup.Text>.com</InputGroup.Text>
        </InputGroup.Addon>
      </InputGroup.Root>
    </div>
  )
}
