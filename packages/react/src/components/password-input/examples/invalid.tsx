import { PasswordInput } from "../"
import { Eye, EyeOff } from "lucide-react"

export default function Invalid() {
  return (
    <PasswordInput.Root invalid>
      <PasswordInput.Label>Password</PasswordInput.Label>
      <PasswordInput.Control>
        <PasswordInput.Input placeholder="Enter your password" />
        <PasswordInput.Addon data-align="inline-end">
          <PasswordInput.VisibilityTrigger>
            <PasswordInput.Indicator fallback={<EyeOff className="size-4" />}>
              <Eye className="size-4" />
            </PasswordInput.Indicator>
          </PasswordInput.VisibilityTrigger>
        </PasswordInput.Addon>
      </PasswordInput.Control>
    </PasswordInput.Root>
  )
}
