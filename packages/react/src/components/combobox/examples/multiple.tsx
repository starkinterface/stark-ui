import { Combobox } from "../"
import { Portal } from "../../portal"
import { useListCollection } from "@ark-ui/react/combobox"
import { ChevronsUpDownIcon, XIcon, CircleCheckIcon } from "lucide-react"

const initialItems = [
  { label: "JavaScript", value: "js" },
  { label: "TypeScript", value: "ts" },
  { label: "Python", value: "python" },
  { label: "Go", value: "go" },
  { label: "Rust", value: "rust" },
  { label: "Java", value: "java" },
]

interface Item {
  label: string
  value: string
}

export default function Multiple() {
  const { collection } = useListCollection<Item>({
    initialItems,
  })

  return (
    <div className="flex h-dvh items-center justify-center">
      <Combobox.Root
        multiple
        collection={collection}
        positioning={{ fitViewport: true, placement: "bottom" }}
        className="w-64"
      >
        <Combobox.Label>Skills</Combobox.Label>
        <Combobox.Context>
          {(combobox) => (
            <div className="text-sm text-foreground-muted">
              {combobox.selectedItems.length === 0 && (
                <span>None selected</span>
              )}
              {(combobox.selectedItems as Item[]).map((item, index) => (
                <span key={item.value}>
                  {item.label}
                  {index < combobox.selectedItems.length - 1 ? ", " : "."}
                </span>
              ))}
            </div>
          )}
        </Combobox.Context>
        <Combobox.Control>
          <Combobox.Input placeholder="e.g. JavaScript" />
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
              {collection.items.map((item) => (
                <Combobox.Item key={item.value} item={item}>
                  <Combobox.ItemText>{item.label}</Combobox.ItemText>
                  <Combobox.ItemIndicator>
                    <CircleCheckIcon />
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
