import { InputGroup } from "../"
import { Field } from "../../field"
import {
  SearchIcon,
  FilterIcon,
  EllipsisIcon,
  SparklesIcon,
} from "lucide-react"

export default function Disabled() {
  return (
    <div className="flex flex-col gap-4">
      <Field.Root disabled>
        <InputGroup.Root>
          <InputGroup.Input placeholder="Search..." disabled />
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
      </Field.Root>
      <Field.Root disabled>
        <InputGroup.Root>
          <InputGroup.Textarea
            placeholder="Put your thoughts here..."
            autoresize
            disabled
          />
          <InputGroup.Addon data-align="block-start" className="py-1.25">
            <InputGroup.Text>README.md</InputGroup.Text>
            <InputGroup.Button
              className="ml-auto"
              size="icon-xs"
              variant="ghost"
            >
              <SparklesIcon />
            </InputGroup.Button>
          </InputGroup.Addon>
          <InputGroup.Addon data-align="block-end">
            <InputGroup.Text>1200 characters left</InputGroup.Text>
            <InputGroup.Button className="ml-auto">Save</InputGroup.Button>
          </InputGroup.Addon>
        </InputGroup.Root>
      </Field.Root>
    </div>
  )
}
