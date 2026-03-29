import Footer from "@/components/layout/footer"
import Navigation from "@/components/layout/navigation"
import Provider from "@/components/provider"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Geist, Geist_Mono } from "next/font/google"
import "@/styles/globals.css"
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
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <Provider>
          <div className="flex min-h-dvh flex-col">
            <header className="p-4">
              <nav>
                <Navigation />
              </nav>
            </header>

            <main className="flex flex-1 flex-col p-4">{children}</main>

            <footer className="p-4">
              <Footer />
            </footer>
          </div>
        </Provider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
