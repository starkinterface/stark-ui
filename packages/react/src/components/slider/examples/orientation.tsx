import { Slider } from "../"

export default function Orientation() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex w-64 flex-col gap-4">
        <Slider.Root
          defaultValue={[72]}
          thumbAlignment="contain"
          variant="accent"
          className="flex flex-col gap-1"
        >
          <div className="flex justify-between gap-2">
            <Slider.Label>Opacity</Slider.Label>
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
        </Slider.Root>
        <Slider.Root
          defaultValue={[24]}
          thumbAlignment="contain"
          variant="accent"
          className="flex flex-col gap-1"
        >
          <div className="flex justify-between gap-2">
            <Slider.Label>Pressure</Slider.Label>
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
        </Slider.Root>
      </div>

      <div className="flex h-64 gap-4">
        <Slider.Root
          defaultValue={[80]}
          thumbAlignment="contain"
          variant="accent"
          orientation="vertical"
          className="flex flex-col items-center gap-1"
        >
          <Slider.Label>Master</Slider.Label>
          <Slider.Control>
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumb index={0}>
              <Slider.HiddenInput />
            </Slider.Thumb>
          </Slider.Control>
          <Slider.ValueText />
        </Slider.Root>
        <Slider.Root
          defaultValue={[36]}
          thumbAlignment="contain"
          variant="accent"
          orientation="vertical"
          className="flex flex-col items-center gap-1"
        >
          <Slider.Label>Music</Slider.Label>
          <Slider.Control>
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumb index={0}>
              <Slider.HiddenInput />
            </Slider.Thumb>
          </Slider.Control>
          <Slider.ValueText />
        </Slider.Root>
        <Slider.Root
          defaultValue={[64]}
          thumbAlignment="contain"
          variant="accent"
          orientation="vertical"
          className="flex flex-col items-center gap-1"
        >
          <Slider.Label>SFX</Slider.Label>
          <Slider.Control>
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumb index={0}>
              <Slider.HiddenInput />
            </Slider.Thumb>
          </Slider.Control>
          <Slider.ValueText />
        </Slider.Root>
      </div>
    </div>
  )
}
