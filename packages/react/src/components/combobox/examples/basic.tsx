import { Combobox } from "../"
import { createListCollection } from "../../../utils"
import { Portal } from "../../portal"
import { ChevronsUpDownIcon, XIcon, CheckCircle2Icon } from "lucide-react"
import { useState } from "react"

const initialItems = [
  { label: "Vue", value: "vue" },
  { label: "Solid", value: "solid" },
  { label: "React", value: "react" },
  { label: "Svelte", value: "svelte" },
]

export default function Basic() {
  const [items, setItems] = useState(initialItems)

  const collection = createListCollection({ items })

  const handleInputChange = (details: { inputValue: string }) => {
    const filtered = initialItems.filter((item) =>
      item.label.toLowerCase().includes(details.inputValue.toLowerCase())
    )
    setItems(filtered)
  }

  return (
    <div className="flex h-dvh items-center justify-center">
      <Combobox.Root
        collection={collection}
        onInputValueChange={handleInputChange}
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
              <Combobox.EmptyText>No results found.</Combobox.EmptyText>
              {collection.items.map((item) => (
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
