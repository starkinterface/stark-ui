import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const paginationClasses = tv({
  slots: {
    ellipsis: "pagination-ellipsis",
    firstTrigger: "pagination-first-trigger",
    item: "pagination-item",
    lastTrigger: "pagination-last-trigger",
    nextTrigger: "pagination-next-trigger",
    prevTrigger: "pagination-prev-trigger",
    root: "pagination",
  },
})

export type PaginationVariantProps = VariantProps<typeof paginationClasses>
