import { Calendar, parseDate } from "../"

import type { DateValue } from "@ark-ui/react"

const isWeekend = (date: DateValue) => {
  const dayOfWeek = date.toDate("UTC").getDay()
  return dayOfWeek === 0 || dayOfWeek === 6
}

export default function FullYear() {
  return (
    <div className="flex items-center justify-center flex-1 size-full">
      <div>
        <Calendar.Root
          variant="accent"
          numOfMonths={12}
          defaultFocusedValue={parseDate("2026-01-01")}
          selectionMode="range"
          isDateUnavailable={isWeekend}
        >
          <Calendar.Context>
            {(calendar) => (
              <div className="grid grid-cols-4 gap-6 w-fit">
                {Array.from({ length: 12 }).map((_, index) => {
                  const offset = calendar.getOffset({ months: index })

                  return (
                    <Calendar.View view="day" key={index}>
                      <div className="flex">
                        {offset.visibleRangeText.start}
                      </div>
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
                          {offset.weeks.map((week, weekId) => (
                            <Calendar.TableRow key={weekId}>
                              {week.map((day, dayId) => (
                                <Calendar.TableCell
                                  key={dayId}
                                  value={day}
                                  visibleRange={offset.visibleRange}
                                >
                                  <Calendar.TableCellTrigger>
                                    {day.day}
                                  </Calendar.TableCellTrigger>
                                </Calendar.TableCell>
                              ))}
                            </Calendar.TableRow>
                          ))}
                        </Calendar.TableBody>
                      </Calendar.Table>
                    </Calendar.View>
                  )
                })}
              </div>
            )}
          </Calendar.Context>
        </Calendar.Root>
      </div>
    </div>
  )
}
