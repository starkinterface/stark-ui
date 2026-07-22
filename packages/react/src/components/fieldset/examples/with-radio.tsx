import { Fieldset, RadioGroup } from "../.."

export default function WithRadio() {
  return (
    <div className="flex h-dvh items-center justify-center p-6">
      <Fieldset.Root className="w-full max-w-sm">
        <Fieldset.Legend>Subscription Plan</Fieldset.Legend>
        <Fieldset.HelperText>
          Select the billing cycle that fits your engineering team&apos;s scale.
        </Fieldset.HelperText>
        <RadioGroup.Root defaultValue="annual">
          <RadioGroup.Item value="monthly">
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>Monthly ($29/user/month)</RadioGroup.ItemText>
            <RadioGroup.ItemHiddenInput />
          </RadioGroup.Item>
          <RadioGroup.Item value="annual">
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>
              Annual ($24/user/month - Save 20%)
            </RadioGroup.ItemText>
            <RadioGroup.ItemHiddenInput />
          </RadioGroup.Item>
          <RadioGroup.Item value="enterprise">
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>Enterprise (Custom SLAs)</RadioGroup.ItemText>
            <RadioGroup.ItemHiddenInput />
          </RadioGroup.Item>
        </RadioGroup.Root>
      </Fieldset.Root>
    </div>
  )
}
