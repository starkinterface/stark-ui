import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const calendarClasses = tv({
  slots: {
    nextTrigger: "calendar-next-trigger",
    prevTrigger: "calendar-prev-trigger",
    rangeText: "calendar-range-text",
    root: "calendar",
    table: "calendar-table",
    tableBody: "calendar-table-body",
    tableCell: "calendar-table-cell",
    tableCellTrigger: "calendar-table-cell-trigger",
    tableHead: "calendar-table-head",
    tableHeader: "calendar-table-header",
    tableRow: "calendar-table-row",
    view: "calendar-view",
    viewControl: "calendar-view-control",
    viewTrigger: "calendar-view-trigger",
  },
  variants: {
    variant: {
      accent: {
        root: "calendar--accent",
      },
      primary: {
        root: "calendar--primary",
      },
    },
  },
})

export type CalendarVariantProps = VariantProps<typeof calendarClasses>
