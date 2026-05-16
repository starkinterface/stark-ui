import { InputGroup } from "../"
import { SparklesIcon } from "lucide-react"

export default function Textarea() {
  return (
    <div className="flex flex-col gap-4">
      <InputGroup.Root>
        <InputGroup.Textarea
          placeholder="Put your thoughts here..."
          autoresize
        />
        <InputGroup.Addon data-align="block-start" className="py-1.25">
          <InputGroup.Text>README.md</InputGroup.Text>
          <InputGroup.Button className="ml-auto" size="icon-xs" variant="ghost">
            <SparklesIcon />
          </InputGroup.Button>
        </InputGroup.Addon>
        <InputGroup.Addon data-align="block-end">
          <InputGroup.Text>1200 characters left</InputGroup.Text>
          <InputGroup.Button className="ml-auto">Save</InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup.Root>
    </div>
  )
}
