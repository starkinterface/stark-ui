import { ThemeProvider } from "next-themes"

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </ThemeProvider>
  )
}
