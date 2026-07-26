import { dateInputClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { DateInput as ArkDateInput } from "@ark-ui/react/date-input"

import type { DateInputVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(dateInputClasses, {
  name: "DateInput",
})

///////////////////////////////////////////////////////////////////////////////
/// Root

type DateInputRootProps = Assign<
  ArkDateInput.RootProps,
  DateInputVariantProps & UnstyledProp
>

const DateInputRoot = withProviderSlot<HTMLDivElement, DateInputRootProps>(
  ArkDateInput.Root,
  "root",
  { defaultProps: { shouldForceLeadingZeros: true } }
)

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type DateInputRootProviderProps = Assign<
  ArkDateInput.RootProviderProps,
  DateInputVariantProps & UnstyledProp
>

const DateInputRootProvider = withProviderSlot<
  HTMLDivElement,
  DateInputRootProviderProps
>(ArkDateInput.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Label

type DateInputLabelProps = Assign<ArkDateInput.LabelProps, UnstyledProp>

const DateInputLabel = withSlot<HTMLLabelElement, DateInputLabelProps>(
  ArkDateInput.Label,
  "label"
)

///////////////////////////////////////////////////////////////////////////////
/// Control

type DateInputControlProps = Assign<ArkDateInput.ControlProps, UnstyledProp>

const DateInputControl = withSlot<HTMLDivElement, DateInputControlProps>(
  ArkDateInput.Control,
  "control"
)

///////////////////////////////////////////////////////////////////////////////
/// SegmentGroup

type DateInputSegmentGroupProps = Assign<
  ArkDateInput.SegmentGroupProps,
  UnstyledProp
>

const DateInputSegmentGroup = withSlot<
  HTMLDivElement,
  DateInputSegmentGroupProps
>(ArkDateInput.SegmentGroup, "segmentGroup")

///////////////////////////////////////////////////////////////////////////////
/// Segment

type DateInputSegmentProps = Assign<ArkDateInput.SegmentProps, UnstyledProp>

const DateInputSegment = withSlot<HTMLSpanElement, DateInputSegmentProps>(
  ArkDateInput.Segment,
  "segment"
)

///////////////////////////////////////////////////////////////////////////////
/// SegmentContext

type DateInputSegmentContextProps = ArkDateInput.SegmentContextProps

const DateInputSegmentContext = ArkDateInput.SegmentContext

///////////////////////////////////////////////////////////////////////////////
/// HiddenInput

type DateInputHiddenInputProps = Assign<
  ArkDateInput.HiddenInputProps,
  UnstyledProp
>

const DateInputHiddenInput = withSlot<
  HTMLInputElement,
  DateInputHiddenInputProps
>(ArkDateInput.HiddenInput, "hiddenInput")

///////////////////////////////////////////////////////////////////////////////
/// Context

type DateInputContextProps = ArkDateInput.ContextProps

const DateInputContext = ArkDateInput.Context

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  DateInputRoot,
  DateInputRootProvider,
  DateInputLabel,
  DateInputControl,
  DateInputSegmentGroup,
  DateInputSegment,
  DateInputSegmentContext,
  DateInputHiddenInput,
  DateInputContext,
}

export { useDateInput } from "@ark-ui/react/date-input"

export type {
  DateInputRootProps,
  DateInputRootProviderProps,
  DateInputLabelProps,
  DateInputControlProps,
  DateInputSegmentGroupProps,
  DateInputSegmentProps,
  DateInputSegmentContextProps,
  DateInputHiddenInputProps,
  DateInputContextProps,
}

export type {
  UseDateInputProps,
  UseDateInputReturn,
} from "@ark-ui/react/date-input"
