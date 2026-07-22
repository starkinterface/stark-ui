import { Fieldset, Slider } from "../.."

export default function WithSlider() {
  return (
    <div className="flex h-dvh items-center justify-center p-6">
      <Fieldset.Root className="w-full max-w-sm">
        <Fieldset.Legend>Compute Resource Limits</Fieldset.Legend>
        <Fieldset.HelperText>
          Tune performance bounds and memory thresholds for worker nodes.
        </Fieldset.HelperText>
        <Fieldset.Content>
          <Slider.Root thumbAlignment="contain" defaultValue={[75]}>
            <Slider.Label>CPU Allocation (%)</Slider.Label>
            <Slider.Control>
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumb index={0}>
                <Slider.HiddenInput />
              </Slider.Thumb>
            </Slider.Control>
          </Slider.Root>

          <Slider.Root
            thumbAlignment="contain"
            defaultValue={[40]}
            min={0}
            max={100}
          >
            <Slider.Label>Memory Threshold (GB)</Slider.Label>
            <Slider.Control>
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumb index={0}>
                <Slider.HiddenInput />
              </Slider.Thumb>
            </Slider.Control>
          </Slider.Root>
        </Fieldset.Content>
      </Fieldset.Root>
    </div>
  )
}
