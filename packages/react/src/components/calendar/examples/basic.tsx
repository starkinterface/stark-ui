import { Calendar } from "../"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

export default function Basic() {
  return (
    <Calendar.Root variant="accent" locale="id-ID" startOfWeek={1}>
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
}
