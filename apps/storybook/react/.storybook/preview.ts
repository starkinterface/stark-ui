import addonA11y from "@storybook/addon-a11y"
import addonTheme, { withThemeByDataAttribute } from "@storybook/addon-themes"
import { definePreview } from "@storybook/react-vite"
import "./globals.css"

export default definePreview({
  addons: [addonA11y(), addonTheme()],
  decorators: [
    withThemeByDataAttribute({
      attributeName: "data-scheme",
      defaultTheme: "black",
      themes: {
        black: "black",
        white: "white",
      },
    }),
  ],
  parameters: {},
})
