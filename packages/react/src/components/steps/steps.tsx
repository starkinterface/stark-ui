import { stepsClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { ark } from "@ark-ui/react/factory"
import { Steps as ArkSteps } from "@ark-ui/react/steps"

import type { StepsVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"
import type { ComponentProps } from "react"

const { withProviderSlot, withSlot } = createStyleContext(stepsClasses, {
  name: "Steps",
})

///////////////////////////////////////////////////////////////////////////////
/// Root

type StepsRootProps = Assign<
  ArkSteps.RootProps,
  StepsVariantProps & UnstyledProp
>

const StepsRoot = withProviderSlot<HTMLDivElement, StepsRootProps>(
  ArkSteps.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// List

type StepsListProps = Assign<ArkSteps.ListProps, UnstyledProp>

const StepsList = withSlot<HTMLDivElement, StepsListProps>(
  ArkSteps.List,
  "list"
)

///////////////////////////////////////////////////////////////////////////////
/// Item

type StepsItemProps = Assign<ArkSteps.ItemProps, UnstyledProp>

const StepsItem = withSlot<HTMLDivElement, StepsItemProps>(
  ArkSteps.Item,
  "item"
)

///////////////////////////////////////////////////////////////////////////////
/// Trigger

type StepsTriggerProps = Assign<ArkSteps.TriggerProps, UnstyledProp>

const StepsTrigger = withSlot<HTMLButtonElement, StepsTriggerProps>(
  ArkSteps.Trigger,
  "trigger"
)

///////////////////////////////////////////////////////////////////////////////
/// Indicator

type StepsIndicatorProps = Assign<ArkSteps.IndicatorProps, UnstyledProp>

const StepsIndicator = withSlot<HTMLDivElement, StepsIndicatorProps>(
  ArkSteps.Indicator,
  "indicator"
)

///////////////////////////////////////////////////////////////////////////////
/// Separator

type StepsSeparatorProps = Assign<ArkSteps.SeparatorProps, UnstyledProp>

const StepsSeparator = withSlot<HTMLDivElement, StepsSeparatorProps>(
  ArkSteps.Separator,
  "separator"
)

///////////////////////////////////////////////////////////////////////////////
/// Content

type StepsContentProps = Assign<ArkSteps.ContentProps, UnstyledProp>

const StepsContent = withSlot<HTMLDivElement, StepsContentProps>(
  ArkSteps.Content,
  "content"
)

///////////////////////////////////////////////////////////////////////////////
/// CompletedContent

type StepsCompletedContentProps = Assign<
  ArkSteps.CompletedContentProps,
  UnstyledProp
>

const StepsCompletedContent = withSlot<
  HTMLDivElement,
  StepsCompletedContentProps
>(ArkSteps.CompletedContent, "completedContent")

///////////////////////////////////////////////////////////////////////////////
/// PrevTrigger

type StepsPrevTriggerProps = Assign<ArkSteps.PrevTriggerProps, UnstyledProp>

const StepsPrevTrigger = withSlot<HTMLButtonElement, StepsPrevTriggerProps>(
  ArkSteps.PrevTrigger,
  "prevTrigger"
)

///////////////////////////////////////////////////////////////////////////////
/// NextTrigger

type StepsNextTriggerProps = Assign<ArkSteps.NextTriggerProps, UnstyledProp>

const StepsNextTrigger = withSlot<HTMLButtonElement, StepsNextTriggerProps>(
  ArkSteps.NextTrigger,
  "nextTrigger"
)

///////////////////////////////////////////////////////////////////////////////
/// Header

type StepsHeaderProps = Assign<ComponentProps<typeof ark.div>, UnstyledProp>

const StepsHeader = withSlot<HTMLDivElement, StepsHeaderProps>(
  ark.div,
  "header"
)

///////////////////////////////////////////////////////////////////////////////
/// Title

type StepsTitleProps = Assign<ComponentProps<typeof ark.div>, UnstyledProp>

const StepsTitle = withSlot<HTMLDivElement, StepsTitleProps>(ark.div, "title")

///////////////////////////////////////////////////////////////////////////////
/// Description

type StepsDescriptionProps = Assign<
  ComponentProps<typeof ark.div>,
  UnstyledProp
>

const StepsDescription = withSlot<HTMLDivElement, StepsDescriptionProps>(
  ark.div,
  "description"
)

///////////////////////////////////////////////////////////////////////////////
/// Context

type StepsContextProps = ArkSteps.ContextProps

const StepsContext = ArkSteps.Context

export {
  StepsRoot,
  StepsList,
  StepsItem,
  StepsTrigger,
  StepsIndicator,
  StepsSeparator,
  StepsContent,
  StepsCompletedContent,
  StepsPrevTrigger,
  StepsNextTrigger,
  StepsHeader,
  StepsTitle,
  StepsDescription,
  StepsContext,
}

export type {
  StepsRootProps,
  StepsListProps,
  StepsItemProps,
  StepsTriggerProps,
  StepsIndicatorProps,
  StepsSeparatorProps,
  StepsContentProps,
  StepsCompletedContentProps,
  StepsPrevTriggerProps,
  StepsNextTriggerProps,
  StepsHeaderProps,
  StepsTitleProps,
  StepsDescriptionProps,
  StepsContextProps,
}
