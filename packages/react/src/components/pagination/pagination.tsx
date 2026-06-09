import { paginationClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Pagination as ArkPagination } from "@ark-ui/react/pagination"

import type { PaginationVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(paginationClasses, {
  name: "Pagination",
})

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type PaginationRootProviderProps = Assign<
  ArkPagination.RootProviderProps,
  PaginationVariantProps & UnstyledProp
>

const PaginationRootProvider = withProviderSlot<
  HTMLElement,
  PaginationRootProviderProps
>(ArkPagination.RootProvider, "root")

///////////////////////////////////////////////////////////////////////////////
/// Root

type PaginationRootProps = Assign<
  ArkPagination.RootProps,
  PaginationVariantProps & UnstyledProp
>

const PaginationRoot = withProviderSlot<HTMLElement, PaginationRootProps>(
  ArkPagination.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// Ellipsis

type PaginationEllipsisProps = Assign<ArkPagination.EllipsisProps, UnstyledProp>

const PaginationEllipsis = withSlot<HTMLDivElement, PaginationEllipsisProps>(
  ArkPagination.Ellipsis,
  "ellipsis"
)

///////////////////////////////////////////////////////////////////////////////
/// Item

type PaginationItemProps = Assign<ArkPagination.ItemProps, UnstyledProp>

const PaginationItem = withSlot<HTMLButtonElement, PaginationItemProps>(
  ArkPagination.Item,
  "item"
)

///////////////////////////////////////////////////////////////////////////////
/// FirstTrigger

type PaginationFirstTriggerProps = Assign<
  ArkPagination.FirstTriggerProps,
  UnstyledProp
>

const PaginationFirstTrigger = withSlot<
  HTMLButtonElement,
  PaginationFirstTriggerProps
>(ArkPagination.FirstTrigger, "firstTrigger")

///////////////////////////////////////////////////////////////////////////////
/// LastTrigger

type PaginationLastTriggerProps = Assign<
  ArkPagination.LastTriggerProps,
  UnstyledProp
>

const PaginationLastTrigger = withSlot<
  HTMLButtonElement,
  PaginationLastTriggerProps
>(ArkPagination.LastTrigger, "lastTrigger")

///////////////////////////////////////////////////////////////////////////////
/// PrevTrigger

type PaginationPrevTriggerProps = Assign<
  ArkPagination.PrevTriggerProps,
  UnstyledProp
>

const PaginationPrevTrigger = withSlot<
  HTMLButtonElement,
  PaginationPrevTriggerProps
>(ArkPagination.PrevTrigger, "prevTrigger")

///////////////////////////////////////////////////////////////////////////////
/// NextTrigger

type PaginationNextTriggerProps = Assign<
  ArkPagination.NextTriggerProps,
  UnstyledProp
>

const PaginationNextTrigger = withSlot<
  HTMLButtonElement,
  PaginationNextTriggerProps
>(ArkPagination.NextTrigger, "nextTrigger")

///////////////////////////////////////////////////////////////////////////////
/// Context

type PaginationContextProps = ArkPagination.ContextProps

const PaginationContext = ArkPagination.Context

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  PaginationRoot,
  PaginationRootProvider,
  PaginationEllipsis,
  PaginationItem,
  PaginationFirstTrigger,
  PaginationLastTrigger,
  PaginationPrevTrigger,
  PaginationNextTrigger,
  PaginationContext,
}

export type {
  PaginationRootProps,
  PaginationRootProviderProps,
  PaginationEllipsisProps,
  PaginationItemProps,
  PaginationFirstTriggerProps,
  PaginationLastTriggerProps,
  PaginationPrevTriggerProps,
  PaginationNextTriggerProps,
  PaginationContextProps,
}
