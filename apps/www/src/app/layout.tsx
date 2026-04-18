import DecorationLine from "@/components/decoration-line"
import Background from "@/components/layout/background"
import Banner from "@/components/layout/banner"
import Footer from "@/components/layout/footer"
import Main from "@/components/layout/main"
import Navigation from "@/components/layout/navigation"
import Provider from "@/components/provider"
import { BANNER_ID } from "@/constants/features"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Geist, Geist_Mono } from "next/font/google"
import { tv } from "tailwind-variants/lite"

import type { Metadata } from "next"
import "@/styles/globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  description:
    "Stark UI is an open-source component library for React and Vue. Carefully crafted themes built with Tailwind CSS. Modern design, accessible by default.",
  title: "Elegant Component Library for React and Vue · Stark UI",
}

const styles = tv({
  slots: {
    background:
      "z-background pointer-events-none fixed inset-0 overflow-hidden",
    banner:
      "z-banner h-banner banner-hidden:h-banner-hidden sticky top-0 bg-background",
    bannerDecorations:
      "content-container pointer-events-none absolute inset-0 -bottom-px",
    footer: "bg-background",
    navigation:
      "z-navigation h-navigation top-banner banner-hidden:top-banner-hidden sticky w-full shrink-0 bg-background",
    navigationDecorations:
      "content-container z-navigation pointer-events-none absolute inset-0",
    navigationDesktop: "hidden h-full md:block",
    navigationMobile: "h-full md:hidden",
    root: "flex min-h-dvh flex-col",
  },
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const {
    root,
    background,
    banner,
    bannerDecorations,
    navigation,
    navigationMobile,
    navigationDesktop,
    navigationDecorations,
    footer,
  } = styles()

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          // oxlint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
            try {
              const bannerId = String(localStorage.getItem("banner-hidden") ?? "")
              const currentBannerId = String("${BANNER_ID}")

              if (bannerId !== currentBannerId) {
                document.documentElement.dataset.bannerVisible = ""
              } else {
                document.documentElement.dataset.bannerHidden = ""
              }
            } catch (e) {
              console.log("Failed to read banner from localStorage", e)
            }
          `,
          }}
        />
      </head>
      <body>
        <Provider>
          <div className={root()}>
            <div className={banner()}>
              <Banner />
              <div className={bannerDecorations()}>
                <DecorationLine orientation="vertical" position="start" />
                <DecorationLine orientation="vertical" position="end" />
                <DecorationLine
                  orientation="horizontal"
                  position="end"
                  className="inside-container"
                />
              </div>
            </div>

            <header className={navigation()}>
              <nav className={navigationMobile()}>
                <Navigation />
              </nav>
              <nav className={navigationDesktop()}>
                <Navigation />
              </nav>
              <div className={navigationDecorations()}>
                <DecorationLine orientation="vertical" position="start" />
                <DecorationLine orientation="vertical" position="end" />
                <DecorationLine
                  orientation="horizontal"
                  position="end"
                  className="inside-container"
                />
              </div>
            </header>

            <Main>{children}</Main>

            <footer className={footer()}>
              <Footer />
            </footer>

            <div className={background()}>
              <Background />
            </div>
          </div>
        </Provider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
