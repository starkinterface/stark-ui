import { Combobox } from "../"
import { createListCollection } from "../../../utils"
import { Portal } from "../../portal"
import { ChevronsUpDownIcon, XIcon, CheckCircle2Icon } from "lucide-react"

const technologies = createListCollection({
  items: [
    { label: "Vue", value: "vue" },
    { label: "Solid", value: "solid" },
    { label: "React", value: "react" },
    { label: "Svelte", value: "svelte" },
  ],
})

export default function Invalid() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <Combobox.Root
        collection={technologies}
        invalid
        positioning={{ fitViewport: true, placement: "bottom" }}
        className="w-64"
      >
        <Combobox.Label>Main Technology</Combobox.Label>
        <Combobox.Control>
          <Combobox.Input placeholder="Select technology..." />
          <Combobox.Trigger>
            <ChevronsUpDownIcon />
          </Combobox.Trigger>
          <Combobox.ClearTrigger>
            <XIcon />
          </Combobox.ClearTrigger>
        </Combobox.Control>
        <Portal>
          <Combobox.Positioner>
            <Combobox.Content>
              {technologies.items.map((item) => (
                <Combobox.Item key={item.value} item={item}>
                  <Combobox.ItemText>{item.label}</Combobox.ItemText>
                  <Combobox.ItemIndicator>
                    <CheckCircle2Icon />
                  </Combobox.ItemIndicator>
                </Combobox.Item>
              ))}
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>
    </div>
  )
}
