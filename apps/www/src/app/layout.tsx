import DecorationLine from "@/components/decoration-line"
import Background from "@/components/layout/background"
import Banner from "@/components/layout/banner"
import Footer from "@/components/layout/footer"
import Main from "@/components/layout/main"
import Navigation from "@/components/layout/navigation"
import Provider from "@/components/provider"
import { BANNER_ID } from "@/config/features"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Geist, Geist_Mono } from "next/font/google"
import { tv } from "tailwind-variants/lite"

import type { Metadata } from "next"
import type { WithContext, WebSite } from "schema-dts"
import "@/styles/globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const TITLE = "Beautiful component library for React and Vue | Stark UI"
const DESCRIPTION =
  "Stark UI is a component library for React and Vue with carefully crafted themes, modern design, and accessible components."
const URL = "https://stark-ui.com"
const NAME = "Stark UI"

export const metadata: Metadata = {
  description: DESCRIPTION,
  icons: {
    apple: [
      {
        sizes: "76x76",
        type: "image/png",
        url: "/icons/apple-icon-76x76.png",
      },
      {
        sizes: "120x120",
        type: "image/png",
        url: "/icons/apple-icon-120x120.png",
      },
      {
        sizes: "152x152",
        type: "image/png",
        url: "/icons/apple-icon-152x152.png",
      },
      {
        sizes: "180x180",
        type: "image/png",
        url: "/icons/apple-icon-180x180.png",
      },
      {
        sizes: "167x167",
        type: "image/png",
        url: "/icons/apple-icon-167x167.png",
      },
    ],
    icon: [
      {
        type: "image/svg+xml",
        url: "/icons/icon.svg",
      },
      {
        sizes: "32x32",
        type: "image/png",
        url: "/icons/icon-32x32.png",
      },
      {
        sizes: "128x128",
        type: "image/png",
        url: "/icons/icon-128x128.png",
      },
      {
        sizes: "192x192",
        type: "image/png",
        url: "/icons/icon-192x192.png",
      },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    description: DESCRIPTION,
    siteName: NAME,
    title: TITLE,
    type: "website",
    url: URL,
  },
  title: TITLE,
}

const webSiteJsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: NAME,
  url: URL,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteJsonLd).replaceAll("<", "\\u003c"),
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
