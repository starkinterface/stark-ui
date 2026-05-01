import { Slider } from "../"

export default function DraggingIndicator() {
  return (
    <div className="w-64">
      <Slider.Root
        defaultValue={[40]}
        thumbAlignment="contain"
        variant="accent"
      >
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb index={0}>
            <Slider.DraggingIndicator />
            <Slider.HiddenInput />
          </Slider.Thumb>
        </Slider.Control>
      </Slider.Root>
    </div>
  )
}
