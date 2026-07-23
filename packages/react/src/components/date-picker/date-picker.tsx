import { CalendarRoot } from "../calendar"
import { datePickerClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import {
  DatePicker as ArkDatePicker,
  parseDate as arkParseDate,
} from "@ark-ui/react/date-picker"

import type { CalendarRootProps } from "../calendar"
import type { DatePickerVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(datePickerClasses, {
  name: "DatePicker",
})

///////////////////////////////////////////////////////////////////////////////
/// Root

type DatePickerRootProps = Assign<CalendarRootProps, DatePickerVariantProps>

const DatePickerRoot = withProviderSlot<HTMLDivElement, DatePickerRootProps>(
  (props: DatePickerRootProps) => <CalendarRoot inline={false} {...props} />,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type DatePickerRootProviderProps = Assign<
  ArkDatePicker.RootProviderProps,
  DatePickerVariantProps & UnstyledProp
>

const DatePickerRootProvider = withProviderSlot<
  HTMLDivElement,
  DatePickerRootProviderProps
>(ArkDatePicker.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Label

type DatePickerLabelProps = Assign<ArkDatePicker.LabelProps, UnstyledProp>

const DatePickerLabel = withSlot<HTMLLabelElement, DatePickerLabelProps>(
  ArkDatePicker.Label,
  "label"
)

///////////////////////////////////////////////////////////////////////////////
/// Control

type DatePickerControlProps = Assign<ArkDatePicker.ControlProps, UnstyledProp>

const DatePickerControl = withSlot<HTMLDivElement, DatePickerControlProps>(
  ArkDatePicker.Control,
  "control"
)

///////////////////////////////////////////////////////////////////////////////
/// Input

type DatePickerInputProps = Assign<ArkDatePicker.InputProps, UnstyledProp>

const DatePickerInput = withSlot<HTMLInputElement, DatePickerInputProps>(
  ArkDatePicker.Input,
  "input"
)

///////////////////////////////////////////////////////////////////////////////
/// Trigger

type DatePickerTriggerProps = Assign<ArkDatePicker.TriggerProps, UnstyledProp>

const DatePickerTrigger = withSlot<HTMLButtonElement, DatePickerTriggerProps>(
  ArkDatePicker.Trigger,
  "trigger"
)

///////////////////////////////////////////////////////////////////////////////
/// ClearTrigger

type DatePickerClearTriggerProps = Assign<
  ArkDatePicker.ClearTriggerProps,
  UnstyledProp
>

const DatePickerClearTrigger = withSlot<
  HTMLButtonElement,
  DatePickerClearTriggerProps
>(ArkDatePicker.ClearTrigger, "clearTrigger")

///////////////////////////////////////////////////////////////////////////////
/// Positioner

type DatePickerPositionerProps = Assign<
  ArkDatePicker.PositionerProps,
  UnstyledProp
>

const DatePickerPositioner = withSlot<
  HTMLDivElement,
  DatePickerPositionerProps
>(ArkDatePicker.Positioner, "positioner")

///////////////////////////////////////////////////////////////////////////////
/// Content

type DatePickerContentProps = Assign<ArkDatePicker.ContentProps, UnstyledProp>

const DatePickerContent = withSlot<HTMLDivElement, DatePickerContentProps>(
  ArkDatePicker.Content,
  "content"
)

///////////////////////////////////////////////////////////////////////////////
/// PresetTrigger

type DatePickerPresetTriggerProps = Assign<
  ArkDatePicker.PresetTriggerProps,
  UnstyledProp
>

const DatePickerPresetTrigger = withSlot<
  HTMLButtonElement,
  DatePickerPresetTriggerProps
>(ArkDatePicker.PresetTrigger, "presetTrigger")

///////////////////////////////////////////////////////////////////////////////
/// Context

type DatePickerContextProps = ArkDatePicker.ContextProps

const DatePickerContext = ArkDatePicker.Context

///////////////////////////////////////////////////////////////////////////////
/// Utility

const parseDate = arkParseDate

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  DatePickerRoot,
  DatePickerRootProvider,
  DatePickerLabel,
  DatePickerControl,
  DatePickerInput,
  DatePickerTrigger,
  DatePickerClearTrigger,
  DatePickerPositioner,
  DatePickerContent,
  DatePickerPresetTrigger,
  DatePickerContext,
  parseDate,
}

export { useDatePicker } from "@ark-ui/react/date-picker"

export type {
  DatePickerRootProps,
  DatePickerRootProviderProps,
  DatePickerLabelProps,
  DatePickerControlProps,
  DatePickerInputProps,
  DatePickerTriggerProps,
  DatePickerClearTriggerProps,
  DatePickerPositionerProps,
  DatePickerContentProps,
  DatePickerPresetTriggerProps,
  DatePickerContextProps,
}

export type {
  UseDatePickerProps,
  UseDatePickerReturn,
} from "@ark-ui/react/date-picker"
