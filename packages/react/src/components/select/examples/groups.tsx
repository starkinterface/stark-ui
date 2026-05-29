import { Select } from "../"
import { createListCollection } from "../../../utils"
import { Portal } from "../../portal"
import { ChevronsUpDownIcon, XIcon, CheckCircle2Icon } from "lucide-react"

const technologies = createListCollection({
  groupBy: (item) => item.type,
  items: [
    { label: "React", type: "Library", value: "react" },
    { label: "Solid", type: "Library", value: "solid" },
    { label: "Vue", type: "Library", value: "vue" },
    { label: "Svelte", type: "Library", value: "svelte" },
    { label: "Angular", type: "Library", value: "angular" },
    { label: "NextJS", type: "Framework", value: "nextjs" },
    { label: "NuxtJS", type: "Framework", value: "nuxtjs" },
    { label: "Remix", type: "Framework", value: "remix" },
    { label: "Astro", type: "Framework", value: "astro" },
    { label: "Qwik", type: "Framework", value: "qwik" },
    { label: "SvelteKit", type: "Framework", value: "sveltekit" },
    { label: "SolidStart", type: "Framework", value: "solidstart" },
  ],
})

export default function Groups() {
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
              {technologies.group().map(([type, group]) => (
                <Select.ItemGroup key={type}>
                  <Select.ItemGroupLabel>{type}</Select.ItemGroupLabel>
                  {group.map((item) => (
                    <Select.Item key={item.value} item={item}>
                      <Select.ItemText>{item.label}</Select.ItemText>
                      <Select.ItemIndicator>
                        <CheckCircle2Icon />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.ItemGroup>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
        <Select.HiddenSelect />
      </Select.Root>
    </div>
  )
}
