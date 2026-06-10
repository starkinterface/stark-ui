"use client"

import { Tag } from "@stark-ui/react"
import { LuX } from "react-icons/lu"

const TagExample = () => (
  <div className="flex flex-wrap gap-2">
    <Tag.Root>
      <Tag.Text>Status: Active</Tag.Text>
    </Tag.Root>
    <Tag.Root>
      <Tag.Text>Deployment</Tag.Text>
      <Tag.DeleteTrigger>
        <LuX />
      </Tag.DeleteTrigger>
    </Tag.Root>
    <Tag.Root>
      <Tag.Text>Web App</Tag.Text>
      <Tag.DeleteTrigger>
        <LuX />
      </Tag.DeleteTrigger>
    </Tag.Root>
  </div>
)

const DataDisplay = () => (
  <div className="flex flex-col gap-4">
    <TagExample />
  </div>
)

export { DataDisplay }
