import SchemeSwitch from "./scheme-switch"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "next-themes"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  description: "A living user interface for the modern web.",
  title: "Stark UI · A living user interface for the modern web.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          storageKey="theme"
          defaultTheme="system"
          themes={["white", "black"]}
          attribute="data-scheme"
          value={{
            dark: "black",
            light: "white",
          }}
        >
          <nav className="flex items-center justify-between p-4">
            <div />
            <SchemeSwitch />
          </nav>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
