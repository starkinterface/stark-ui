import { Slider } from "../"

export default function Marks() {
  return (
    <div className="flex flex-col gap-16">
      <div className="w-64">
        <Slider.Root
          min={0.25}
          max={1.75}
          step={0.25}
          defaultValue={[1]}
          thumbAlignment="contain"
          variant="accent"
          origin="center"
          className="flex flex-col gap-1"
        >
          <div className="flex justify-between gap-2">
            <Slider.Label>Playback speed</Slider.Label>
            <Slider.Context>
              {({ value }) => <Slider.ValueText>x{value[0]}</Slider.ValueText>}
            </Slider.Context>
          </div>
          <Slider.Control>
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumb index={0}>
              <Slider.HiddenInput />
            </Slider.Thumb>
            <Slider.MarkerGroup>
              {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75].map((value) => (
                <Slider.Marker key={value} value={value}>
                  {value.toString().replace("0.", ".")}
                </Slider.Marker>
              ))}
            </Slider.MarkerGroup>
          </Slider.Control>
        </Slider.Root>
      </div>

      <div className="h-64">
        <Slider.Root
          min={0}
          max={100}
          defaultValue={[34]}
          thumbAlignment="contain"
          variant="accent"
          orientation="vertical"
          className="flex flex-col items-start w-fit gap-1"
        >
          <Slider.Label>Temperature</Slider.Label>
          <Slider.Control>
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumb index={0}>
              <Slider.HiddenInput />
            </Slider.Thumb>
            <Slider.MarkerGroup>
              {[0, 20, 37, 100].map((value) => (
                <Slider.Marker key={value} value={value}>
                  {value}°C
                </Slider.Marker>
              ))}
            </Slider.MarkerGroup>
          </Slider.Control>
          <Slider.Context>
            {({ value }) => <Slider.ValueText>{value[0]}°C</Slider.ValueText>}
          </Slider.Context>
        </Slider.Root>
      </div>
    </div>
  )
}
