import { dialogClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import {
  Dialog as ArkDialog,
  useDialog,
  useDialogContext,
} from "@ark-ui/react/dialog"
import { ark } from "@ark-ui/react/factory"

import type { DialogVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"
import type { ComponentProps } from "react"

const { withProviderSlot, withSlot } = createStyleContext(dialogClasses, {
  name: "Dialog",
})

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type DialogRootProviderProps = Assign<
  ArkDialog.RootProviderProps,
  DialogVariantProps & UnstyledProp
>

const DialogRootProvider = withProviderSlot<
  HTMLDivElement,
  DialogRootProviderProps
>(ArkDialog.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Root

type DialogRootProps = Assign<
  ArkDialog.RootProps,
  DialogVariantProps & UnstyledProp
>

const DialogRoot = withProviderSlot<HTMLDivElement, DialogRootProps>(
  ArkDialog.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Trigger

type DialogTriggerProps = Assign<ArkDialog.TriggerProps, UnstyledProp>

const DialogTrigger = withSlot<HTMLButtonElement, DialogTriggerProps>(
  ArkDialog.Trigger,
  "trigger"
)

///////////////////////////////////////////////////////////////////////////////
/// Backdrop

type DialogBackdropProps = Assign<ArkDialog.BackdropProps, UnstyledProp>

const DialogBackdrop = withSlot<HTMLDivElement, DialogBackdropProps>(
  ArkDialog.Backdrop,
  "backdrop"
)

///////////////////////////////////////////////////////////////////////////////
/// Positioner

type DialogPositionerProps = Assign<ArkDialog.PositionerProps, UnstyledProp>

const DialogPositioner = withSlot<HTMLDivElement, DialogPositionerProps>(
  ArkDialog.Positioner,
  "positioner"
)

///////////////////////////////////////////////////////////////////////////////
/// Content

type DialogContentProps = Assign<ArkDialog.ContentProps, UnstyledProp>

const DialogContent = withSlot<HTMLDivElement, DialogContentProps>(
  ArkDialog.Content,
  "content"
)

///////////////////////////////////////////////////////////////////////////////
/// Title

type DialogTitleProps = Assign<ArkDialog.TitleProps, UnstyledProp>

const DialogTitle = withSlot<HTMLHeadingElement, DialogTitleProps>(
  ArkDialog.Title,
  "title"
)

///////////////////////////////////////////////////////////////////////////////
/// Description

type DialogDescriptionProps = Assign<ArkDialog.DescriptionProps, UnstyledProp>

const DialogDescription = withSlot<
  HTMLParagraphElement,
  DialogDescriptionProps
>(ArkDialog.Description, "description")

///////////////////////////////////////////////////////////////////////////////
/// CloseTrigger

type DialogCloseTriggerProps = Assign<ArkDialog.CloseTriggerProps, UnstyledProp>

const DialogCloseTrigger = withSlot<HTMLButtonElement, DialogCloseTriggerProps>(
  ArkDialog.CloseTrigger,
  "closeTrigger"
)

///////////////////////////////////////////////////////////////////////////////
/// Context

type DialogContextProps = ArkDialog.ContextProps

const DialogContext = ArkDialog.Context

///////////////////////////////////////////////////////////////////////////////
/// Header

type DialogHeaderProps = Assign<ComponentProps<typeof ark.div>, UnstyledProp>

const DialogHeader = withSlot<HTMLDivElement, DialogHeaderProps>(
  ark.div,
  "header"
)

///////////////////////////////////////////////////////////////////////////////
/// Footer

type DialogFooterProps = Assign<ComponentProps<typeof ark.div>, UnstyledProp>

const DialogFooter = withSlot<HTMLDivElement, DialogFooterProps>(
  ark.div,
  "footer"
)

///////////////////////////////////////////////////////////////////////////////
/// Body

type DialogBodyProps = Assign<ComponentProps<typeof ark.div>, UnstyledProp>

const DialogBody = withSlot<HTMLDivElement, DialogBodyProps>(ark.div, "body")

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  DialogRootProvider,
  DialogRoot,
  DialogTrigger,
  DialogBackdrop,
  DialogPositioner,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogCloseTrigger,
  DialogHeader,
  DialogFooter,
  DialogBody,
  DialogContext,
  useDialog,
  useDialogContext,
}
export type {
  DialogRootProviderProps,
  DialogRootProps,
  DialogTriggerProps,
  DialogBackdropProps,
  DialogPositionerProps,
  DialogContentProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogCloseTriggerProps,
  DialogHeaderProps,
  DialogFooterProps,
  DialogBodyProps,
  DialogContextProps,
}
