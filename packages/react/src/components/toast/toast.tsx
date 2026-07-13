import { toastClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Toast as ArkToast } from "@ark-ui/react/toast"

import type { ToastVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(toastClasses, {
  name: "Toast",
})

///////////////////////////////////////////////////////////////////////////////
/// Root

type ToastRootProps = Assign<
  ArkToast.RootProps,
  ToastVariantProps & UnstyledProp
>

const ToastRoot = withProviderSlot<HTMLDivElement, ToastRootProps>(
  ArkToast.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Title

type ToastTitleProps = Assign<ArkToast.TitleProps, UnstyledProp>

const ToastTitle = withSlot<HTMLHeadingElement, ToastTitleProps>(
  ArkToast.Title,
  "title"
)

///////////////////////////////////////////////////////////////////////////////
/// Description

type ToastDescriptionProps = Assign<ArkToast.DescriptionProps, UnstyledProp>

const ToastDescription = withSlot<HTMLParagraphElement, ToastDescriptionProps>(
  ArkToast.Description,
  "description"
)

///////////////////////////////////////////////////////////////////////////////
/// CloseTrigger

type ToastCloseTriggerProps = Assign<ArkToast.CloseTriggerProps, UnstyledProp>

const ToastCloseTrigger = withSlot<HTMLButtonElement, ToastCloseTriggerProps>(
  ArkToast.CloseTrigger,
  "closeTrigger"
)

///////////////////////////////////////////////////////////////////////////////
/// ActionTrigger

type ToastActionTriggerProps = Assign<ArkToast.ActionTriggerProps, UnstyledProp>

const ToastActionTrigger = withSlot<HTMLButtonElement, ToastActionTriggerProps>(
  ArkToast.ActionTrigger,
  "actionTrigger"
)

///////////////////////////////////////////////////////////////////////////////
/// Context

type ToastContextProps = ArkToast.ContextProps

const ToastContext = ArkToast.Context

export {
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastCloseTrigger,
  ToastActionTrigger,
  ToastContext,
}

export type {
  ToastRootProps,
  ToastTitleProps,
  ToastDescriptionProps,
  ToastCloseTriggerProps,
  ToastActionTriggerProps,
  ToastContextProps,
}

export { Toaster, createToaster } from "@ark-ui/react/toast"
export type { ToasterProps, ToastOptions } from "@ark-ui/react/toast"
