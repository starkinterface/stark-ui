import { tv } from "tailwind-variants/lite"

import type { VariantProps } from "tailwind-variants/lite"

export const passwordInputClasses = tv({
  slots: {
    addon: "password-input-addon",
    control: "password-input-control",
    indicator: "password-input-indicator",
    input: "password-input-input",
    label: "password-input-label",
    root: "password-input",
    visibilityTrigger: "password-input-visibility-trigger",
  },
})

export type PasswordInputVariantProps = VariantProps<
  typeof passwordInputClasses
>
