"use client"

import { cx } from "@stark-ui/react"
import * as React from "react"
import { tv } from "tailwind-variants/lite"

import type { ComponentPropsWithRef } from "react"
import type { VariantProps } from "tailwind-variants/lite"

export const decorationLineStyles = tv({
  base: ["pointer-events-none absolute"],
  compoundVariants: [
    {
      className: "decoration-line-dashed-horizontal",
      orientation: "horizontal",
      shape: "dashed",
    },
    {
      className: "decoration-line-dashed-vertical",
      orientation: "vertical",
      shape: "dashed",
    },
    {
      className: "top-0",
      orientation: "horizontal",
      position: "start",
    },
    {
      className: "left-0",
      orientation: "vertical",
      position: "start",
    },
    {
      className: "bottom-0",
      orientation: "horizontal",
      position: "end",
    },
    {
      className: "right-0",
      orientation: "vertical",
      position: "end",
    },
  ],
  defaultVariants: {
    orientation: "horizontal",
    position: "start",
    shape: "solid",
  },
  variants: {
    orientation: {
      horizontal: "inset-x-0 h-px w-full",
      vertical: "inset-y-0 h-full w-px",
    },
    position: {
      end: "",
      start: "",
    },
    shape: {
      dashed: "",
      solid: "bg-decoration",
    },
  },
})

export type DecorationLineProps = ComponentPropsWithRef<"div"> &
  VariantProps<typeof decorationLineStyles>

const DecorationLine = ({
  className,
  orientation,
  position,
  shape,
  ...props
}: DecorationLineProps) => (
  <div
    data-decoration-line
    data-orientation={orientation}
    data-shape={shape}
    {...props}
    className={cx(
      decorationLineStyles({ orientation, position, shape }),
      className
    )}
  />
)

export default DecorationLine
