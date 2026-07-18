import { LocaleProvider, useLocaleContext } from "../locale"
import { useState } from "react"

const App = () => {
  const { locale, dir } = useLocaleContext()

  return (
    <div dir={dir}>
      <div className="text-sm mb-4">Locale Information</div>
      <div className="flex flex-col gap-1 text-sm w-48 text-foreground-muted">
        <div className="flex justify-between">
          Active Locale
          <span className="font-mono text-foreground">{locale}</span>
        </div>
        <div className="flex justify-between">
          Layout Direction
          <span className="font-mono text-foreground">{dir.toUpperCase()}</span>
        </div>
      </div>
    </div>
  )
}

export default function Basic() {
  const [currentLocale] = useState("en-US")

  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-6 w-full max-w-md mx-auto p-6">
      <LocaleProvider locale={currentLocale}>
        <App />
      </LocaleProvider>
    </div>
  )
}
