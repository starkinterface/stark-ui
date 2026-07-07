import { drawerStackClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Drawer as ArkDrawer } from "@ark-ui/react/drawer"

import type { DrawerStackVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProvider, withSlot } = createStyleContext(drawerStackClasses, {
  name: "DrawerStack",
})

///////////////////////////////////////////////////////////////////////////////
/// Root

type DrawerStackRootProps = Assign<
  ArkDrawer.StackProps,
  DrawerStackVariantProps & UnstyledProp
>

const DrawerStackRoot = withProvider<DrawerStackRootProps>(ArkDrawer.Stack)

///////////////////////////////////////////////////////////////////////////////
/// Content

type DrawerStackContentProps = Assign<ArkDrawer.IndentProps, UnstyledProp>

const DrawerStackContent = withSlot<HTMLDivElement, DrawerStackContentProps>(
  ArkDrawer.Indent,
  "content"
)

///////////////////////////////////////////////////////////////////////////////
/// ContentBackground

type DrawerStackContentBackgroundProps = Assign<
  ArkDrawer.IndentBackgroundProps,
  UnstyledProp
>

const DrawerStackContentBackground = withSlot<
  HTMLDivElement,
  DrawerStackContentBackgroundProps
>(ArkDrawer.IndentBackground, "contentBackground")

export { DrawerStackRoot, DrawerStackContent, DrawerStackContentBackground }
export type {
  DrawerStackRootProps,
  DrawerStackContentProps,
  DrawerStackContentBackgroundProps,
}
