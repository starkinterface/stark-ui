"use client"

import { RingLoader } from "@stark-loader/react"
import {
  Field,
  Input,
  InputGroup,
  NumberInput,
  PasswordInput,
  PinInput,
  Textarea,
} from "@stark-ui/react"
import { useEffect, useRef, useState } from "react"
import {
  LuMinus,
  LuPlus,
  LuGlobe,
  LuGlobeLock,
  LuMoveHorizontal,
  LuEye,
  LuEyeOff,
} from "react-icons/lu"

const FieldExample = () => (
  <Field.Root>
    <Field.Label>Project name</Field.Label>
    <Input placeholder="stark-dashboard" />
  </Field.Root>
)

const FieldDisabledExample = () => (
  <Field.Root disabled>
    <Field.Label>Domain</Field.Label>
    <InputGroup.Root>
      <InputGroup.Addon data-align="inline-start">
        <InputGroup.Icon>
          <LuGlobe />
        </InputGroup.Icon>
      </InputGroup.Addon>
      <InputGroup.Addon data-align="inline-start">
        <InputGroup.Text>https://</InputGroup.Text>
      </InputGroup.Addon>
      <InputGroup.Input value="stark.app" />
    </InputGroup.Root>
  </Field.Root>
)

const TAKEN = new Set(["stark", "enji", "enjidev"])

const InputGroupExample = () => {
  const [value, setValue] = useState("stark")
  const [loading, setLoading] = useState(false)
  const skipInitialCheck = useRef(true)

  useEffect(() => {
    if (skipInitialCheck.current) {
      skipInitialCheck.current = false

      return
    }
    setLoading(true)

    const id = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(id)
  }, [value])

  const isInvalid = !loading && TAKEN.has(value)

  return (
    <Field.Root invalid={isInvalid}>
      <Field.Label>Project subdomain</Field.Label>
      <InputGroup.Root>
        <InputGroup.Addon data-align="inline-start">
          <InputGroup.Icon>
            {loading ? <RingLoader /> : <LuGlobeLock />}
          </InputGroup.Icon>
        </InputGroup.Addon>
        <InputGroup.Addon data-align="inline-start">
          <InputGroup.Text>https://</InputGroup.Text>
        </InputGroup.Addon>
        <InputGroup.Input
          placeholder="stark-dashboard"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <InputGroup.Addon data-align="inline-end">
          <InputGroup.Text>.stark.app</InputGroup.Text>
        </InputGroup.Addon>
      </InputGroup.Root>

      {!isInvalid && (
        <Field.HelperText>
          Your subdomain can't be changed later.
        </Field.HelperText>
      )}
      <Field.ErrorText>
        This subdomain is already taken. Please choose a different one.
      </Field.ErrorText>
    </Field.Root>
  )
}

const NumberInputExample = () => (
  <NumberInput.Root
    defaultValue="0"
    min={0}
    max={1000}
    step={10}
    formatOptions={{
      currency: "USD",
      maximumFractionDigits: 0,
      style: "currency",
    }}
    className="w-40"
  >
    <NumberInput.Label>Usage limit</NumberInput.Label>
    <NumberInput.Control>
      <NumberInput.Scrubber asChild>
        <NumberInput.Addon data-align="inline-start">
          <NumberInput.Icon>
            <LuMoveHorizontal />
          </NumberInput.Icon>
        </NumberInput.Addon>
      </NumberInput.Scrubber>
      <NumberInput.Input />
      <NumberInput.Addon data-align="inline-end">
        <NumberInput.DecrementTrigger aria-label="Decrease instances">
          <LuMinus />
        </NumberInput.DecrementTrigger>
        <NumberInput.IncrementTrigger aria-label="Increase instances">
          <LuPlus />
        </NumberInput.IncrementTrigger>
      </NumberInput.Addon>
    </NumberInput.Control>
  </NumberInput.Root>
)

const PinInputExample = () => (
  <Field.Root>
    <PinInput.Root count={6}>
      <PinInput.Label>Authentication Code</PinInput.Label>
      <PinInput.Control>
        <PinInput.Input index={0} placeholder="-" />
        <PinInput.Input index={1} placeholder="-" />
        <PinInput.Input index={2} placeholder="-" />
        <PinInput.Input index={3} placeholder="-" />
        <PinInput.Input index={4} placeholder="-" />
        <PinInput.Input index={5} placeholder="-" />
      </PinInput.Control>
      <PinInput.HiddenInput />
    </PinInput.Root>
  </Field.Root>
)

const TextareaExample = () => (
  <Field.Root>
    <Field.Label>Description</Field.Label>
    <Textarea autoresize rows={3} placeholder="What does your project do?" />
  </Field.Root>
)

const PasswordInputExample = () => (
  <Field.Root>
    <PasswordInput.Root>
      <PasswordInput.Label>Account Password</PasswordInput.Label>
      <PasswordInput.Control>
        <PasswordInput.Input placeholder="••••••••" />
        <PasswordInput.Addon data-align="inline-end">
          <PasswordInput.VisibilityTrigger>
            <PasswordInput.Indicator fallback={<LuEyeOff className="size-4" />}>
              <LuEye className="size-4" />
            </PasswordInput.Indicator>
          </PasswordInput.VisibilityTrigger>
        </PasswordInput.Addon>
      </PasswordInput.Control>
    </PasswordInput.Root>
  </Field.Root>
)

const Inputs = () => (
  <div className="flex flex-col gap-4">
    <FieldExample />
    <FieldDisabledExample />
    <InputGroupExample />
    <div className="flex justify-between gap-4">
      <NumberInputExample />
      <PinInputExample />
    </div>
    <PasswordInputExample />
    <TextareaExample />
  </div>
)

export { Inputs }
