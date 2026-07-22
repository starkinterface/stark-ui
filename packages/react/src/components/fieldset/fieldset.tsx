import { fieldsetClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Fieldset as ArkFieldset } from "@ark-ui/react/fieldset"

import type { FieldsetVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"
import type { ComponentPropsWithoutRef } from "react"

const { withProviderSlot, withSlot } = createStyleContext(fieldsetClasses, {
  name: "Fieldset",
})

///////////////////////////////////////////////////////////////////////////////
/// Root

type FieldsetRootProps = Assign<
  ArkFieldset.RootProps,
  FieldsetVariantProps & UnstyledProp
>

const FieldsetRoot = withProviderSlot<HTMLFieldSetElement, FieldsetRootProps>(
  ArkFieldset.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type FieldsetRootProviderProps = Assign<
  ArkFieldset.RootProviderProps,
  FieldsetVariantProps & UnstyledProp
>

const FieldsetRootProvider = withProviderSlot<
  HTMLFieldSetElement,
  FieldsetRootProviderProps
>(ArkFieldset.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Legend

type FieldsetLegendProps = Assign<ArkFieldset.LegendProps, UnstyledProp>

const FieldsetLegend = withSlot<HTMLLegendElement, FieldsetLegendProps>(
  ArkFieldset.Legend,
  "legend"
)

///////////////////////////////////////////////////////////////////////////////
/// Content

type FieldsetContentProps = ComponentPropsWithoutRef<"div"> & UnstyledProp

const FieldsetContent = withSlot<HTMLDivElement, FieldsetContentProps>(
  "div",
  "content"
)

///////////////////////////////////////////////////////////////////////////////
/// HelperText

type FieldsetHelperTextProps = Assign<ArkFieldset.HelperTextProps, UnstyledProp>

const FieldsetHelperText = withSlot<HTMLSpanElement, FieldsetHelperTextProps>(
  ArkFieldset.HelperText,
  "helperText"
)

///////////////////////////////////////////////////////////////////////////////
/// ErrorText

type FieldsetErrorTextProps = Assign<ArkFieldset.ErrorTextProps, UnstyledProp>

const FieldsetErrorText = withSlot<HTMLSpanElement, FieldsetErrorTextProps>(
  ArkFieldset.ErrorText,
  "errorText"
)

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  FieldsetRoot,
  FieldsetRootProvider,
  FieldsetLegend,
  FieldsetContent,
  FieldsetHelperText,
  FieldsetErrorText,
}

export type {
  FieldsetRootProps,
  FieldsetRootProviderProps,
  FieldsetLegendProps,
  FieldsetContentProps,
  FieldsetHelperTextProps,
  FieldsetErrorTextProps,
}
