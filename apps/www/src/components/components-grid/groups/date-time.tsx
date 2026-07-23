import {
  Calendar,
  DatePicker,
  InputGroup,
  parseDate,
  Portal,
} from "@stark-ui/react"
import {
  LuAlarmClock,
  LuCalendar,
  LuChevronLeft,
  LuChevronRight,
  LuX,
} from "react-icons/lu"

const CalendarExample = () => (
  <Calendar.Root
    variant="accent"
    startOfWeek={1}
    defaultFocusedValue={parseDate("2026-07-01")}
    defaultValue={[parseDate("2026-07-01")]}
  >
    <Calendar.View view="day">
      <Calendar.Context>
        {(calendar) => (
          <>
            <Calendar.ViewControl>
              <Calendar.PrevTrigger>
                <LuChevronLeft />
              </Calendar.PrevTrigger>
              <Calendar.ViewTrigger>
                <Calendar.RangeText />
              </Calendar.ViewTrigger>
              <Calendar.NextTrigger>
                <LuChevronRight />
              </Calendar.NextTrigger>
            </Calendar.ViewControl>
            <Calendar.Table>
              <Calendar.TableHead>
                <Calendar.TableRow>
                  {calendar.weekDays.map((weekDay, dayOfWeekId) => (
                    <Calendar.TableHeader key={dayOfWeekId}>
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
  </Calendar.Root>
)

const DatePickerExample = () => (
  <DatePicker.Root className="w-full">
    <DatePicker.Label>Publish Schedule</DatePicker.Label>
    <DatePicker.Control>
      <InputGroup.Root className="w-full">
        <DatePicker.Input asChild unstyled>
          <InputGroup.Input placeholder="Select a date..." />
        </DatePicker.Input>
        <InputGroup.Addon data-align="inline-start">
          <InputGroup.Icon>
            <LuAlarmClock />
          </InputGroup.Icon>
        </InputGroup.Addon>
        <InputGroup.Addon data-align="inline-end">
          <DatePicker.Trigger asChild>
            <InputGroup.Button
              aria-label="Open calendar"
              variant="outline"
              size="icon-xs"
            >
              <LuCalendar />
            </InputGroup.Button>
          </DatePicker.Trigger>
          <DatePicker.ClearTrigger asChild>
            <InputGroup.Button
              aria-label="Clear"
              variant="danger-soft"
              size="icon-xs"
            >
              <LuX />
            </InputGroup.Button>
          </DatePicker.ClearTrigger>
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
                      <LuChevronLeft />
                    </Calendar.PrevTrigger>
                    <Calendar.ViewTrigger>
                      <Calendar.RangeText />
                    </Calendar.ViewTrigger>
                    <Calendar.NextTrigger>
                      <LuChevronRight />
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
  </DatePicker.Root>
)

const DateTime = () => (
  <div className="flex flex-col gap-4">
    <DatePickerExample />
    <CalendarExample />
  </div>
)

export { DateTime }
