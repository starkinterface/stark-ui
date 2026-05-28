import { InputGroup } from "../"
import {
  SearchIcon,
  MailIcon,
  RotateCcwIcon,
  EllipsisIcon,
  CreditCardIcon,
  OctagonAlertIcon,
  SparklesIcon,
  ClipboardIcon,
  FilterIcon,
  PencilIcon,
  FileCodeIcon,
} from "lucide-react"

export default function Basic() {
  return (
    <div className="flex flex-col gap-4">
      <InputGroup.Root>
        <InputGroup.Input placeholder="Enter your name" />
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="Search..." />
        <InputGroup.Addon data-align="inline-start">
          <InputGroup.Icon>
            <SearchIcon />
          </InputGroup.Icon>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="Enter your email" />
        <InputGroup.Addon data-align="inline-start">
          <InputGroup.Icon>
            <MailIcon />
          </InputGroup.Icon>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="XXXX XXXX XXXX XXXX" />
        <InputGroup.Addon data-align="inline-start">
          <InputGroup.Icon>
            <CreditCardIcon />
          </InputGroup.Icon>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="example" />
        <InputGroup.Addon data-align="inline-start">
          <InputGroup.Text>https://</InputGroup.Text>
        </InputGroup.Addon>
        <InputGroup.Addon data-align="inline-end">
          <InputGroup.Text>.com</InputGroup.Text>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="0.00" />
        <InputGroup.Addon data-align="inline-start">
          <InputGroup.Text>$</InputGroup.Text>
        </InputGroup.Addon>
        <InputGroup.Addon data-align="inline-end">
          <InputGroup.Text>USD</InputGroup.Text>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="Enter your gmail" />
        <InputGroup.Addon data-align="inline-end">
          <InputGroup.Text>@gmail.com</InputGroup.Text>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="Filter by name" />
        <InputGroup.Addon data-align="inline-start">
          <InputGroup.Button
            aria-label="Filter"
            size="icon-xs"
            variant="secondary"
          >
            <FilterIcon />
          </InputGroup.Button>
        </InputGroup.Addon>
        <InputGroup.Addon data-align="inline-end">
          <InputGroup.Button
            aria-label="Options"
            size="icon-xs"
            variant="outline"
          >
            <EllipsisIcon />
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="Enter username" />
        <InputGroup.Addon data-align="inline-end">
          <InputGroup.Button
            aria-label="Refresh"
            size="icon-xs"
            variant="ghost"
          >
            <RotateCcwIcon />
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="example.com" />
        <InputGroup.Addon data-align="inline-start">
          <InputGroup.Button aria-label="Info" size="icon-xs" variant="ghost">
            <OctagonAlertIcon />
          </InputGroup.Button>
          <InputGroup.Text>https://</InputGroup.Text>
        </InputGroup.Addon>
        <InputGroup.Addon data-align="inline-end">
          <InputGroup.Button aria-label="Info" size="xs" variant="accent">
            Verify
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup.Root>

      {/* Textarea */}
      <InputGroup.Root>
        <InputGroup.Textarea placeholder="Enter your bio" autoresize />
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Textarea placeholder="Put your thoughts here..." />
        <InputGroup.Addon data-align="block-start">
          <InputGroup.Text>
            <PencilIcon />
            My Notes
          </InputGroup.Text>
          <InputGroup.Button
            className="ml-auto"
            size="icon-xs"
            variant="ghost"
            aria-label="Copy to clipboard"
          >
            <ClipboardIcon />
          </InputGroup.Button>
          <InputGroup.Button
            size="icon-xs"
            variant="ghost"
            aria-label="Enhance with AI"
          >
            <SparklesIcon />
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Textarea placeholder="# Hello, world!" autoresize />
        <InputGroup.Addon data-align="block-start">
          <InputGroup.Text>
            <FileCodeIcon />
            README.md
          </InputGroup.Text>
          <InputGroup.Button
            className="ml-auto"
            size="icon-xs"
            variant="ghost"
            aria-label="Enhance with AI"
          >
            <SparklesIcon />
          </InputGroup.Button>
        </InputGroup.Addon>
        <InputGroup.Addon
          data-align="block-end"
          className="border-t border-border data-disabled:border-background-inactive"
        >
          <InputGroup.Text>0/1.200 words used</InputGroup.Text>
          <InputGroup.Button className="ml-auto" size="xs">
            Save
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup.Root>
    </div>
  )
}
