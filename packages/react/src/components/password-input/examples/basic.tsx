import { PasswordInput } from "../"
import { Eye, EyeOff } from "lucide-react"

export default function Basic() {
  return (
    <PasswordInput.Root>
      <PasswordInput.Label>Password</PasswordInput.Label>
      <PasswordInput.Control>
        <PasswordInput.Input placeholder="Enter your password" />
        <PasswordInput.Addon data-align="inline-end">
          <PasswordInput.VisibilityTrigger>
            <PasswordInput.Indicator fallback={<EyeOff />}>
              <Eye />
            </PasswordInput.Indicator>
          </PasswordInput.VisibilityTrigger>
        </PasswordInput.Addon>
      </PasswordInput.Control>
    </PasswordInput.Root>
  )
}
