import { Toggle } from "../"
import { WifiIcon, WifiOffIcon } from "lucide-react"

export default function WithIcon() {
  return (
    <Toggle.Root variant="secondary" variantActive="primary">
      <Toggle.Context>
        {({ pressed }) =>
          pressed ? (
            <WifiIcon data-icon="inline-start" />
          ) : (
            <WifiOffIcon data-icon="inline-start" />
          )
        }
      </Toggle.Context>
      Wi-Fi
    </Toggle.Root>
  )
}
