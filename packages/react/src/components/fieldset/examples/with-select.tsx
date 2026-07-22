import { Fieldset, Select } from "../.."
import { createListCollection } from "@ark-ui/react"

const regions = createListCollection({
  items: [
    { label: "US East (N. Virginia)", value: "us-east-1" },
    { label: "EU Central (Frankfurt)", value: "eu-central-1" },
    { label: "Asia Pacific (Tokyo)", value: "ap-northeast-1" },
    { label: "South America (São Paulo)", value: "sa-east-1" },
  ],
})

export default function WithSelect() {
  return (
    <div className="flex h-dvh items-center justify-center p-6">
      <Fieldset.Root className="w-full max-w-sm">
        <Fieldset.Legend>Infrastructure Region</Fieldset.Legend>
        <Fieldset.HelperText>
          Select the primary datacenter region for your cluster deployment.
        </Fieldset.HelperText>
        <Fieldset.Content>
          <Select.Root collection={regions} defaultValue={["us-east-1"]}>
            <Select.Label>Primary Datacenter</Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select deployment region" />
              </Select.Trigger>
            </Select.Control>
            <Select.Positioner>
              <Select.Content>
                {regions.items.map((item: { label: string; value: string }) => (
                  <Select.Item key={item.value} item={item}>
                    <Select.ItemText>{item.label}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Select.Root>
        </Fieldset.Content>
      </Fieldset.Root>
    </div>
  )
}
