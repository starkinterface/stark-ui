import { ThemeProvider } from "next-themes"

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      storageKey="theme"
      defaultTheme="black"
      enableSystem={false}
      disableTransitionOnChange
      themes={["black", "white"]}
      attribute="data-scheme"
      enableColorScheme={false}
    >
      {children}
    </ThemeProvider>
  )
}
