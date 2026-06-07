"use client"

import { Calendar } from "@stark-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

const CalendarExample = () => (
  <Calendar.Root variant="accent" startOfWeek={1}>
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

const DateTime = () => (
  <div className="flex flex-row items-center justify-center gap-4">
    <CalendarExample />
  </div>
)

export { DateTime }
