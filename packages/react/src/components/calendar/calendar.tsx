import { calendarClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import {
  DatePicker as ArkDatePicker,
  parseDate as arkParseDate,
} from "@ark-ui/react/date-picker"

import type { CalendarVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProviderSlot, withSlot } = createStyleContext(calendarClasses, {
  name: "Calendar",
})

///////////////////////////////////////////////////////////////////////////////
/// Root

type CalendarRootProps = Assign<
  ArkDatePicker.RootProps,
  CalendarVariantProps & UnstyledProp
>

const CalendarRoot = withProviderSlot<HTMLDivElement, CalendarRootProps>(
  ArkDatePicker.Root,
  "root",
  { defaultProps: { inline: true } }
)

///////////////////////////////////////////////////////////////////////////////
/// View

type CalendarViewProps = Assign<ArkDatePicker.ViewProps, UnstyledProp>

const CalendarView = withSlot<HTMLDivElement, CalendarViewProps>(
  ArkDatePicker.View,
  "view"
)

///////////////////////////////////////////////////////////////////////////////
/// ViewControl

type CalendarViewControlProps = Assign<
  ArkDatePicker.ViewControlProps,
  UnstyledProp
>

const CalendarViewControl = withSlot<HTMLDivElement, CalendarViewControlProps>(
  ArkDatePicker.ViewControl,
  "viewControl"
)

///////////////////////////////////////////////////////////////////////////////
/// PrevTrigger

type CalendarPrevTriggerProps = Assign<
  ArkDatePicker.PrevTriggerProps,
  UnstyledProp
>

const CalendarPrevTrigger = withSlot<
  HTMLButtonElement,
  CalendarPrevTriggerProps
>(ArkDatePicker.PrevTrigger, "prevTrigger")

///////////////////////////////////////////////////////////////////////////////
/// ViewTrigger

type CalendarViewTriggerProps = Assign<
  ArkDatePicker.ViewTriggerProps,
  UnstyledProp
>

const CalendarViewTrigger = withSlot<
  HTMLButtonElement,
  CalendarViewTriggerProps
>(ArkDatePicker.ViewTrigger, "viewTrigger")

///////////////////////////////////////////////////////////////////////////////
/// RangeText

type CalendarRangeTextProps = Assign<ArkDatePicker.RangeTextProps, UnstyledProp>

const CalendarRangeText = withSlot<HTMLSpanElement, CalendarRangeTextProps>(
  ArkDatePicker.RangeText,
  "rangeText"
)

///////////////////////////////////////////////////////////////////////////////
/// NextTrigger

type CalendarNextTriggerProps = Assign<
  ArkDatePicker.NextTriggerProps,
  UnstyledProp
>

const CalendarNextTrigger = withSlot<
  HTMLButtonElement,
  CalendarNextTriggerProps
>(ArkDatePicker.NextTrigger, "nextTrigger")

///////////////////////////////////////////////////////////////////////////////
/// Table

type CalendarTableProps = Assign<ArkDatePicker.TableProps, UnstyledProp>

const CalendarTable = withSlot<HTMLTableElement, CalendarTableProps>(
  ArkDatePicker.Table,
  "table"
)

///////////////////////////////////////////////////////////////////////////////
/// TableHead

type CalendarTableHeadProps = Assign<ArkDatePicker.TableHeadProps, UnstyledProp>

const CalendarTableHead = withSlot<
  HTMLTableSectionElement,
  CalendarTableHeadProps
>(ArkDatePicker.TableHead, "tableHead")

///////////////////////////////////////////////////////////////////////////////
/// TableBody

type CalendarTableBodyProps = Assign<ArkDatePicker.TableBodyProps, UnstyledProp>

const CalendarTableBody = withSlot<
  HTMLTableSectionElement,
  CalendarTableBodyProps
>(ArkDatePicker.TableBody, "tableBody")

///////////////////////////////////////////////////////////////////////////////
/// TableRow

type CalendarTableRowProps = Assign<ArkDatePicker.TableRowProps, UnstyledProp>

const CalendarTableRow = withSlot<HTMLTableRowElement, CalendarTableRowProps>(
  ArkDatePicker.TableRow,
  "tableRow"
)

///////////////////////////////////////////////////////////////////////////////
/// TableHeader

type CalendarTableHeaderProps = Assign<
  ArkDatePicker.TableHeaderProps,
  UnstyledProp
>

const CalendarTableHeader = withSlot<
  HTMLTableCellElement,
  CalendarTableHeaderProps
>(ArkDatePicker.TableHeader, "tableHeader")

///////////////////////////////////////////////////////////////////////////////
/// TableCell

type CalendarTableCellProps = Assign<ArkDatePicker.TableCellProps, UnstyledProp>

const CalendarTableCell = withSlot<
  HTMLTableCellElement,
  CalendarTableCellProps
>(ArkDatePicker.TableCell, "tableCell")

///////////////////////////////////////////////////////////////////////////////
/// TableCellTrigger

type CalendarTableCellTriggerProps = Assign<
  ArkDatePicker.TableCellTriggerProps,
  UnstyledProp
>

const CalendarTableCellTrigger = withSlot<
  HTMLButtonElement,
  CalendarTableCellTriggerProps
>(ArkDatePicker.TableCellTrigger, "tableCellTrigger")

///////////////////////////////////////////////////////////////////////////////
/// Context

type CalendarContextProps = ArkDatePicker.ContextProps

const CalendarContext = ArkDatePicker.Context

///////////////////////////////////////////////////////////////////////////////
/// Utility

const parseDate = arkParseDate

///////////////////////////////////////////////////////////////////////////////
/// Exports

export {
  CalendarRoot,
  CalendarView,
  CalendarViewControl,
  CalendarPrevTrigger,
  CalendarViewTrigger,
  CalendarRangeText,
  CalendarNextTrigger,
  CalendarTable,
  CalendarTableHead,
  CalendarTableBody,
  CalendarTableRow,
  CalendarTableHeader,
  CalendarTableCell,
  CalendarTableCellTrigger,
  CalendarContext,
  parseDate,
}

export type {
  CalendarRootProps,
  CalendarViewProps,
  CalendarViewControlProps,
  CalendarPrevTriggerProps,
  CalendarViewTriggerProps,
  CalendarRangeTextProps,
  CalendarNextTriggerProps,
  CalendarTableProps,
  CalendarTableHeadProps,
  CalendarTableBodyProps,
  CalendarTableRowProps,
  CalendarTableHeaderProps,
  CalendarTableCellProps,
  CalendarTableCellTriggerProps,
  CalendarContextProps,
}
