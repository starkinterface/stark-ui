import { TagsInput } from "../"
import { Combobox } from "../../combobox"
import { useCombobox, useListCollection } from "@ark-ui/react/combobox"
import { useFilter } from "@ark-ui/react/locale"
import { Portal } from "@ark-ui/react/portal"
import { useTagsInput } from "@ark-ui/react/tags-input"
import { CheckIcon, XIcon } from "lucide-react"
import { useId } from "react"

export default function WithCombobox() {
  const { contains } = useFilter({ sensitivity: "base" })

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: [
      "React",
      "Solid",
      "Vue",
      "Svelte",
      "Angular",
      "Preact",
      "Next.js",
      "Astro",
      "Nuxt",
    ],
  })

  const uid = useId()

  const tagsInput = useTagsInput({
    ids: { control: `control_${uid}`, input: `input_${uid}` },
  })

  const combobox = useCombobox({
    allowCustomValue: true,
    collection,
    ids: { control: `control_${uid}`, input: `input_${uid}` },
    onInputValueChange(details) {
      filter(details.inputValue)
    },
    onValueChange: (details) => {
      if (details.value[0]) {
        tagsInput.addValue(details.value[0])
      }
    },
    selectionBehavior: "clear",
    value: [],
  })

  return (
    <div className="flex h-dvh items-center justify-center">
      <Combobox.RootProvider value={combobox}>
        <TagsInput.RootProvider value={tagsInput} className="w-80">
          <TagsInput.Label>Frameworks</TagsInput.Label>
          <TagsInput.Control>
            {tagsInput.value.map((value, index) => (
              <TagsInput.Item key={index} index={index} value={value}>
                <TagsInput.ItemPreview>
                  <TagsInput.ItemText>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger>
                    <XIcon />
                  </TagsInput.ItemDeleteTrigger>
                </TagsInput.ItemPreview>
                <TagsInput.ItemInput />
              </TagsInput.Item>
            ))}
            <Combobox.Input asChild>
              <TagsInput.Input placeholder="Add framework..." />
            </Combobox.Input>
            <TagsInput.ClearTrigger>
              <XIcon />
            </TagsInput.ClearTrigger>
          </TagsInput.Control>
          <TagsInput.HiddenInput />
        </TagsInput.RootProvider>

        <Portal>
          <Combobox.Positioner>
            <Combobox.Content>
              <Combobox.EmptyText>No frameworks found</Combobox.EmptyText>
              {collection.items.map((item) => (
                <Combobox.Item key={item} item={item}>
                  <Combobox.ItemText>{item}</Combobox.ItemText>
                  <Combobox.ItemIndicator>
                    <CheckIcon />
                  </Combobox.ItemIndicator>
                </Combobox.Item>
              ))}
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.RootProvider>
    </div>
  )
}
