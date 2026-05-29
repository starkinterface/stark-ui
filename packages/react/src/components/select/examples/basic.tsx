import { Select } from "../"
import { createListCollection } from "../../../utils"
import { Portal } from "../../portal"
import { ChevronsUpDownIcon, XIcon, CheckCircle2Icon } from "lucide-react"

const technologies = createListCollection({
  items: [
    { label: "Vue", value: "vue" },
    { label: "Solid", value: "solid" },
    { disabled: true, label: "React", value: "react" },
    { label: "Svelte", value: "svelte" },
  ],
})

export default function Basic() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <Select.Root
        collection={technologies}
        positioning={{ fitViewport: true, placement: "bottom" }}
        className="w-64"
      >
        <Select.Label>Main Technology</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Technology" />
            <Select.Indicator>
              <ChevronsUpDownIcon />
            </Select.Indicator>
          </Select.Trigger>
          <Select.ClearTrigger>
            <XIcon />
          </Select.ClearTrigger>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {technologies.items.map((item) => (
                <Select.Item key={item.value} item={item}>
                  <Select.ItemText>{item.label}</Select.ItemText>
                  <Select.ItemIndicator>
                    <CheckCircle2Icon />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
        <Select.HiddenSelect />
      </Select.Root>
    </div>
  )
}
