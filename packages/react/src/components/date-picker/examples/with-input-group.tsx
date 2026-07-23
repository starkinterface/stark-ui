import { Calendar, DatePicker, InputGroup, Portal } from "../.."
import {
  AlarmClockIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from "lucide-react"

export default function WithInputGroup() {
  return (
    <div className="flex h-dvh items-center justify-center p-6">
      <DatePicker.Root className="w-full max-w-sm">
        <DatePicker.Label>Publish Schedule</DatePicker.Label>
        <DatePicker.Control>
          <InputGroup.Root className="w-full">
            <DatePicker.Input asChild unstyled>
              <InputGroup.Input placeholder="Select a date..." />
            </DatePicker.Input>
            <InputGroup.Addon data-align="inline-start">
              <InputGroup.Icon>
                <AlarmClockIcon />
              </InputGroup.Icon>
            </InputGroup.Addon>
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
              <DatePicker.ClearTrigger asChild>
                <InputGroup.Button
                  aria-label="Clear"
                  variant="danger-soft"
                  size="icon-xs"
                >
                  <XIcon />
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
      </DatePicker.Root>
    </div>
  )
}
