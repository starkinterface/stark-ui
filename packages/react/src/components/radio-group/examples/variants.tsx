import { RadioGroup } from "../"

export default function Variants() {
  const themes = [
    { label: "Light theme", value: "light" },
    { label: "Dark theme", value: "dark" },
    { label: "System preference", value: "system" },
  ]

  const storageTiers = [
    { label: "5 GB - Free", value: "free" },
    { label: "100 GB - $1.99/month", value: "standard" },
    { label: "200 GB - $2.99/month", value: "premium" },
  ]

  return (
    <div className="flex flex-col gap-6">
      <RadioGroup.Root defaultValue="system">
        <RadioGroup.Label>Visual Theme</RadioGroup.Label>
        {themes.map((theme) => (
          <RadioGroup.Item key={theme.value} value={theme.value}>
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>{theme.label}</RadioGroup.ItemText>
            <RadioGroup.ItemHiddenInput />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>

      <RadioGroup.Root defaultValue="standard" variant="accent">
        <RadioGroup.Label>Cloud Storage Tier</RadioGroup.Label>
        {storageTiers.map((tier) => (
          <RadioGroup.Item key={tier.value} value={tier.value}>
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>{tier.label}</RadioGroup.ItemText>
            <RadioGroup.ItemHiddenInput />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  )
}
