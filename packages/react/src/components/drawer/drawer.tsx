import { drawerClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import {
  Drawer as ArkDrawer,
  useDrawer,
  useDrawerContext,
} from "@ark-ui/react/drawer"
import { ark } from "@ark-ui/react/factory"

import type { DrawerVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"
import type { ComponentProps } from "react"

const { withProviderSlot, withSlot } = createStyleContext(drawerClasses, {
  name: "Drawer",
})

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type DrawerRootProviderProps = Assign<
  ArkDrawer.RootProviderProps,
  DrawerVariantProps & UnstyledProp
>

const DrawerRootProvider = withProviderSlot<
  HTMLDivElement,
  DrawerRootProviderProps
>(ArkDrawer.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Root

type DrawerRootProps = Assign<
  ArkDrawer.RootProps,
  DrawerVariantProps & UnstyledProp
>

const DrawerRoot = withProviderSlot<HTMLDivElement, DrawerRootProps>(
  ArkDrawer.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Trigger

type DrawerTriggerProps = Assign<ArkDrawer.TriggerProps, UnstyledProp>

const DrawerTrigger = withSlot<HTMLButtonElement, DrawerTriggerProps>(
  ArkDrawer.Trigger,
  "trigger"
)

///////////////////////////////////////////////////////////////////////////////
/// Backdrop

type DrawerBackdropProps = Assign<ArkDrawer.BackdropProps, UnstyledProp>

const DrawerBackdrop = withSlot<HTMLDivElement, DrawerBackdropProps>(
  ArkDrawer.Backdrop,
  "backdrop"
)

///////////////////////////////////////////////////////////////////////////////
/// Positioner

type DrawerPositionerProps = Assign<ArkDrawer.PositionerProps, UnstyledProp>

const DrawerPositioner = withSlot<HTMLDivElement, DrawerPositionerProps>(
  ArkDrawer.Positioner,
  "positioner"
)

///////////////////////////////////////////////////////////////////////////////
/// Content

type DrawerContentProps = Assign<ArkDrawer.ContentProps, UnstyledProp>

const DrawerContent = withSlot<HTMLDivElement, DrawerContentProps>(
  ArkDrawer.Content,
  "content"
)

///////////////////////////////////////////////////////////////////////////////
/// Title

type DrawerTitleProps = Assign<ArkDrawer.TitleProps, UnstyledProp>

const DrawerTitle = withSlot<HTMLHeadingElement, DrawerTitleProps>(
  ArkDrawer.Title,
  "title"
)

///////////////////////////////////////////////////////////////////////////////
/// Description

type DrawerDescriptionProps = Assign<ArkDrawer.DescriptionProps, UnstyledProp>

const DrawerDescription = withSlot<
  HTMLParagraphElement,
  DrawerDescriptionProps
>(ArkDrawer.Description, "description")

///////////////////////////////////////////////////////////////////////////////
/// CloseTrigger

type DrawerCloseTriggerProps = Assign<ArkDrawer.CloseTriggerProps, UnstyledProp>

const DrawerCloseTrigger = withSlot<HTMLButtonElement, DrawerCloseTriggerProps>(
  ArkDrawer.CloseTrigger,
  "closeTrigger"
)

///////////////////////////////////////////////////////////////////////////////
/// Grabber

type DrawerGrabberProps = Assign<ArkDrawer.GrabberProps, UnstyledProp>

const DrawerGrabber = withSlot<HTMLDivElement, DrawerGrabberProps>(
  ArkDrawer.Grabber,
  "grabber"
)

///////////////////////////////////////////////////////////////////////////////
/// GrabberIndicator

type DrawerGrabberIndicatorProps = Assign<
  ArkDrawer.GrabberIndicatorProps,
  UnstyledProp
>

const DrawerGrabberIndicator = withSlot<
  HTMLDivElement,
  DrawerGrabberIndicatorProps
>(ArkDrawer.GrabberIndicator, "grabberIndicator")

///////////////////////////////////////////////////////////////////////////////
/// SwipeArea

type DrawerSwipeAreaProps = Assign<ArkDrawer.SwipeAreaProps, UnstyledProp>

const DrawerSwipeArea = withSlot<HTMLDivElement, DrawerSwipeAreaProps>(
  ArkDrawer.SwipeArea,
  "swipeArea"
)

///////////////////////////////////////////////////////////////////////////////
/// Header

type DrawerHeaderProps = Assign<ComponentProps<typeof ark.div>, UnstyledProp>

const DrawerHeader = withSlot<HTMLDivElement, DrawerHeaderProps>(
  ark.div,
  "header"
)

///////////////////////////////////////////////////////////////////////////////
/// Footer

type DrawerFooterProps = Assign<ComponentProps<typeof ark.div>, UnstyledProp>

const DrawerFooter = withSlot<HTMLDivElement, DrawerFooterProps>(
  ark.div,
  "footer"
)

///////////////////////////////////////////////////////////////////////////////
/// Body

type DrawerBodyProps = Assign<ComponentProps<typeof ark.div>, UnstyledProp>

const DrawerBody = withSlot<HTMLDivElement, DrawerBodyProps>(ark.div, "body")

///////////////////////////////////////////////////////////////////////////////
/// Context

type DrawerContextProps = ArkDrawer.ContextProps

const DrawerContext = ArkDrawer.Context

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  DrawerRootProvider,
  DrawerRoot,
  DrawerTrigger,
  DrawerBackdrop,
  DrawerPositioner,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerCloseTrigger,
  DrawerGrabber,
  DrawerGrabberIndicator,
  DrawerSwipeArea,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  DrawerContext,
  useDrawer,
  useDrawerContext,
}
export type {
  DrawerRootProviderProps,
  DrawerRootProps,
  DrawerTriggerProps,
  DrawerBackdropProps,
  DrawerPositionerProps,
  DrawerContentProps,
  DrawerTitleProps,
  DrawerDescriptionProps,
  DrawerCloseTriggerProps,
  DrawerGrabberProps,
  DrawerGrabberIndicatorProps,
  DrawerSwipeAreaProps,
  DrawerHeaderProps,
  DrawerFooterProps,
  DrawerBodyProps,
  DrawerContextProps,
}
