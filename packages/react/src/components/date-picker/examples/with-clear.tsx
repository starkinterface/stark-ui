import { Button, Calendar, DatePicker, Portal } from "../.."
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from "lucide-react"

export default function WithClear() {
  return (
    <div className="flex h-dvh items-center justify-center p-6">
      <DatePicker.Root selectionMode="range" className="w-full max-w-sm">
        <DatePicker.Label>Upgrade window</DatePicker.Label>
        <DatePicker.Control>
          <DatePicker.Input index={0} placeholder="Start date" />
          <DatePicker.Input index={1} placeholder="End date" />
          <DatePicker.Trigger asChild>
            <Button variant="outline" size="icon-md" aria-label="Open calendar">
              <CalendarIcon />
            </Button>
          </DatePicker.Trigger>
          <DatePicker.ClearTrigger asChild>
            <Button
              variant="danger-soft"
              size="icon-md"
              aria-label="Clear dates"
            >
              <XIcon />
            </Button>
          </DatePicker.ClearTrigger>
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
