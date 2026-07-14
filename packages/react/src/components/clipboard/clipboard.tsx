import { clipboardClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Clipboard as ArkClipboard } from "@ark-ui/react/clipboard"

import type { ClipboardVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(clipboardClasses, {
  name: "Clipboard",
})

///////////////////////////////////////////////////////////////////////////////
/// Root

type ClipboardRootProps = Assign<
  ArkClipboard.RootProps,
  ClipboardVariantProps & UnstyledProp
>

const ClipboardRoot = withProviderSlot<HTMLDivElement, ClipboardRootProps>(
  ArkClipboard.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Label

type ClipboardLabelProps = Assign<ArkClipboard.LabelProps, UnstyledProp>

const ClipboardLabel = withSlot<HTMLLabelElement, ClipboardLabelProps>(
  ArkClipboard.Label,
  "label"
)

///////////////////////////////////////////////////////////////////////////////
/// Control

type ClipboardControlProps = Assign<ArkClipboard.ControlProps, UnstyledProp>

const ClipboardControl = withSlot<HTMLDivElement, ClipboardControlProps>(
  ArkClipboard.Control,
  "control"
)

///////////////////////////////////////////////////////////////////////////////
/// Input

type ClipboardInputProps = Assign<ArkClipboard.InputProps, UnstyledProp>

const ClipboardInput = withSlot<HTMLInputElement, ClipboardInputProps>(
  ArkClipboard.Input,
  "input"
)

///////////////////////////////////////////////////////////////////////////////
/// Trigger

type ClipboardTriggerProps = Assign<ArkClipboard.TriggerProps, UnstyledProp>

const ClipboardTrigger = withSlot<HTMLButtonElement, ClipboardTriggerProps>(
  ArkClipboard.Trigger,
  "trigger"
)

///////////////////////////////////////////////////////////////////////////////
/// Indicator

type ClipboardIndicatorProps = Assign<ArkClipboard.IndicatorProps, UnstyledProp>

const ClipboardIndicator = withSlot<HTMLDivElement, ClipboardIndicatorProps>(
  ArkClipboard.Indicator,
  "indicator"
)

///////////////////////////////////////////////////////////////////////////////
/// ValueText

type ClipboardValueTextProps = Assign<ArkClipboard.ValueTextProps, UnstyledProp>

const ClipboardValueText = withSlot<HTMLDivElement, ClipboardValueTextProps>(
  ArkClipboard.ValueText,
  "valueText"
)

///////////////////////////////////////////////////////////////////////////////
/// Context

type ClipboardContextProps = ArkClipboard.ContextProps

const ClipboardContext = ArkClipboard.Context

export {
  ClipboardRoot,
  ClipboardLabel,
  ClipboardControl,
  ClipboardInput,
  ClipboardTrigger,
  ClipboardIndicator,
  ClipboardValueText,
  ClipboardContext,
}

export type {
  ClipboardRootProps,
  ClipboardLabelProps,
  ClipboardControlProps,
  ClipboardInputProps,
  ClipboardTriggerProps,
  ClipboardIndicatorProps,
  ClipboardValueTextProps,
  ClipboardContextProps,
}
