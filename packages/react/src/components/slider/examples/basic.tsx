import { Slider } from "../"

export default function Basic() {
  return (
    <Slider.Root defaultValue={[40]}>
      <div className="flex items-center justify-between gap-4">
        <Slider.Label>Volume</Slider.Label>
        <Slider.ValueText />
      </div>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
      <Slider.MarkerGroup>
        <Slider.Marker value={0}>0%</Slider.Marker>
        <Slider.Marker value={50}>50%</Slider.Marker>
        <Slider.Marker value={100}>100%</Slider.Marker>
      </Slider.MarkerGroup>
    </Slider.Root>
  )
}
