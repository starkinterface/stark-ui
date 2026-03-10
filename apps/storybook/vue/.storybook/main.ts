import { defineMain } from "@storybook/vue3-vite/node"

export default defineMain({
  addons: ["@storybook/addon-a11y", "@storybook/addon-themes"],
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  framework: "@storybook/vue3-vite",
  stories: ["./../../../../packages/vue/src/components/**/*.stories.ts"],
})
