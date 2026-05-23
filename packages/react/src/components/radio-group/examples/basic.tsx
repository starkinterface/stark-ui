import { RadioGroup } from "../"

export default function Basic() {
  const shippingMethods = [
    { label: "Standard (3-5 days)", value: "standard" },
    { label: "Express (1-2 days)", value: "express" },
    { label: "Next-Day (Overnight)", value: "overnight" },
  ]

  const contactPreferences = [
    { label: "Email (Newsletters and invoices)", value: "email" },
    { label: "SMS (Delivery alerts)", value: "sms" },
    { label: "Phone (Direct support)", value: "phone" },
  ]

  return (
    <div className="flex flex-col gap-6">
      <RadioGroup.Root defaultValue="standard">
        <RadioGroup.Label>Shipping Method</RadioGroup.Label>
        {shippingMethods.map((method) => (
          <RadioGroup.Item key={method.value} value={method.value}>
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>{method.label}</RadioGroup.ItemText>
            <RadioGroup.ItemHiddenInput />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>

      <RadioGroup.Root defaultValue="email" variant="accent">
        <RadioGroup.Label>Preferred Contact Method</RadioGroup.Label>
        {contactPreferences.map((pref) => (
          <RadioGroup.Item key={pref.value} value={pref.value}>
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>{pref.label}</RadioGroup.ItemText>
            <RadioGroup.ItemHiddenInput />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  )
}
