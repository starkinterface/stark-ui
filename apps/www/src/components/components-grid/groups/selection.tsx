"use client"

import { Checkbox, RadioGroup, Slider, Switch } from "@stark-ui/react"
import { LuCheck } from "react-icons/lu"

const CheckboxExample = () => (
  <Checkbox.Root variant="accent">
    <Checkbox.Control>
      <Checkbox.Indicator>
        <LuCheck />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.Label>I agree to the Terms and Conditions</Checkbox.Label>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
)

const RadioGroupExample = () => (
  <RadioGroup.Root variant="accent" defaultValue="us-east">
    <RadioGroup.Label>Region</RadioGroup.Label>
    <div className="flex gap-4">
      <RadioGroup.Item value="us-east">
        <RadioGroup.ItemControl />
        <RadioGroup.ItemText>US East</RadioGroup.ItemText>
        <RadioGroup.ItemHiddenInput />
      </RadioGroup.Item>
      <RadioGroup.Item value="eu-west">
        <RadioGroup.ItemControl />
        <RadioGroup.ItemText>EU West</RadioGroup.ItemText>
        <RadioGroup.ItemHiddenInput />
      </RadioGroup.Item>
      <RadioGroup.Item value="ap-south" disabled>
        <RadioGroup.ItemControl />
        <RadioGroup.ItemText>AP South</RadioGroup.ItemText>
        <RadioGroup.ItemHiddenInput />
      </RadioGroup.Item>
    </div>
  </RadioGroup.Root>
)

const SwitchExample = () => (
  <div className="flex w-full flex-col gap-4">
    <Switch.Root
      variant="primary"
      className="flex w-full flex-row justify-between gap-2"
    >
      <Switch.Label>Auto-scaling</Switch.Label>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.HiddenInput />
    </Switch.Root>
    <Switch.Root
      variant="primary"
      className="flex w-full flex-row justify-between gap-2"
      checked
      disabled
    >
      <Switch.Label>DDoS protection</Switch.Label>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.HiddenInput />
    </Switch.Root>
  </div>
)

const SliderExample = () => (
  <div className="flex flex-col gap-2">
    <Slider.Root
      variant="primary"
      defaultValue={[4]}
      min={2}
      max={8}
      step={2}
      thumbAlignment="contain"
    >
      <div className="flex justify-between">
        <Slider.Label>CPU cores</Slider.Label>
      </div>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
        <Slider.MarkerGroup>
          {[2, 4, 6, 8].map((value) => (
            <Slider.Marker key={value} value={value}>
              {value}
            </Slider.Marker>
          ))}
        </Slider.MarkerGroup>
      </Slider.Control>
    </Slider.Root>
    <Slider.Root
      variant="primary"
      defaultValue={[16]}
      min={4}
      max={20}
      step={4}
      thumbAlignment="contain"
    >
      <div className="flex justify-between">
        <Slider.Label>RAM</Slider.Label>
      </div>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
        <Slider.MarkerGroup>
          {[4, 8, 12, 16, 20].map((value) => (
            <Slider.Marker key={value} value={value}>
              {value}GB
            </Slider.Marker>
          ))}
        </Slider.MarkerGroup>
      </Slider.Control>
    </Slider.Root>
  </div>
)

const Selection = () => (
  <div className="flex flex-col gap-4">
    <RadioGroupExample />
    <SliderExample />
    <SwitchExample />
    <CheckboxExample />
  </div>
)

export { Selection }
