import {
  Calendar,
  DateInput,
  DatePicker,
  InputGroup,
  Portal,
  useDateInput,
  useDatePicker,
} from "../.."
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

export default function WithDatePicker() {
  const datePicker = useDatePicker({
    disabled: false,
    invalid: false,
  })
  const dateInput = useDateInput({
    disabled: datePicker.disabled,
    invalid: datePicker.invalid,
    onValueChange(details) {
      datePicker.setValue(details.value)
    },
    value: datePicker.value,
  })

  return (
    <div className="flex h-dvh items-center justify-center p-6">
      <DateInput.RootProvider value={dateInput} className="w-64">
        <DateInput.Label>Date</DateInput.Label>
        <DatePicker.RootProvider value={datePicker}>
          <DatePicker.Control>
            <InputGroup.Root>
              <DateInput.Control>
                <DateInput.SegmentGroup>
                  <DateInput.Context>
                    {(date) =>
                      date
                        .getSegments()
                        .map((segment, index) => (
                          <DateInput.Segment
                            key={`${segment.type}-${index}`}
                            segment={segment}
                          />
                        ))
                    }
                  </DateInput.Context>
                </DateInput.SegmentGroup>
              </DateInput.Control>
              <InputGroup.Addon data-align="inline-end">
                <DatePicker.Trigger asChild>
                  <InputGroup.Button
                    aria-label="Open calendar"
                    variant="outline"
                    size="icon-xs"
                  >
                    <CalendarIcon />
                  </InputGroup.Button>
                </DatePicker.Trigger>
              </InputGroup.Addon>
            </InputGroup.Root>
          </DatePicker.Control>
          <Portal>
            <DatePicker.Positioner>
              <DatePicker.Content>
                <Calendar.View view="day">
                  <Calendar.Context>
                    {(calendar) => (
                      <>
                        <Calendar.ViewControl>
                          <Calendar.PrevTrigger>
                            <ChevronLeftIcon />
                          </Calendar.PrevTrigger>
                          <Calendar.ViewTrigger>
                            <Calendar.RangeText />
                          </Calendar.ViewTrigger>
                          <Calendar.NextTrigger>
                            <ChevronRightIcon />
                          </Calendar.NextTrigger>
                        </Calendar.ViewControl>
                        <Calendar.Table>
                          <Calendar.TableHead>
                            <Calendar.TableRow>
                              {calendar.weekDays.map((weekDay, dayId) => (
                                <Calendar.TableHeader key={dayId}>
                                  {weekDay.short}
                                </Calendar.TableHeader>
                              ))}
                            </Calendar.TableRow>
                          </Calendar.TableHead>
                          <Calendar.TableBody>
                            {calendar.weeks.map((week, weekId) => (
                              <Calendar.TableRow key={weekId}>
                                {week.map((day, dayId) => (
                                  <Calendar.TableCell key={dayId} value={day}>
                                    <Calendar.TableCellTrigger>
                                      {day.day}
                                    </Calendar.TableCellTrigger>
                                  </Calendar.TableCell>
                                ))}
                              </Calendar.TableRow>
                            ))}
                          </Calendar.TableBody>
                        </Calendar.Table>
                      </>
                    )}
                  </Calendar.Context>
                </Calendar.View>
              </DatePicker.Content>
            </DatePicker.Positioner>
          </Portal>
        </DatePicker.RootProvider>
      </DateInput.RootProvider>
    </div>
  )
}
