import { Slider } from "../"

const formatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  maximumFractionDigits: 0,
  style: "currency",
})

export default function Range() {
  return (
    <div className="flex flex-col gap-16">
      <div className="w-64">
        <Slider.Root
          min={100}
          max={10_000}
          step={100}
          defaultValue={[2000, 3000]}
          thumbAlignment="contain"
          variant="accent"
          className="flex flex-col gap-1"
        >
          <div className="flex justify-between gap-2">
            <Slider.Label>Price range</Slider.Label>
            <Slider.Context>
              {({ value }) => (
                <Slider.ValueText>
                  {value.map((val) => formatter.format(val)).join(" - ")}
                </Slider.ValueText>
              )}
            </Slider.Context>
          </div>
          <Slider.Control>
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumb index={0}>
              <Slider.HiddenInput />
            </Slider.Thumb>
            <Slider.Thumb index={1}>
              <Slider.HiddenInput />
            </Slider.Thumb>
          </Slider.Control>
        </Slider.Root>
      </div>

      <div className="h-64">
        <Slider.Root
          min={2016}
          max={2026}
          defaultValue={[2017, 2024]}
          thumbAlignment="contain"
          variant="primary"
          orientation="vertical"
          className="flex flex-col gap-1 w-fit items-start"
        >
          <Slider.Label>Select years</Slider.Label>
          <Slider.Control>
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumb index={0}>
              <Slider.HiddenInput />
            </Slider.Thumb>
            <Slider.Thumb index={1}>
              <Slider.HiddenInput />
            </Slider.Thumb>
            <Slider.MarkerGroup>
              {[2016, 2018, 2020, 2022, 2024, 2026].map((value) => (
                <Slider.Marker key={value} value={value}>
                  {value.toString()}
                </Slider.Marker>
              ))}
            </Slider.MarkerGroup>
          </Slider.Control>
          <Slider.Context>
            {({ value }) => (
              <Slider.ValueText>{value[1] - value[0]} years</Slider.ValueText>
            )}
          </Slider.Context>
        </Slider.Root>
      </div>
    </div>
  )
}
