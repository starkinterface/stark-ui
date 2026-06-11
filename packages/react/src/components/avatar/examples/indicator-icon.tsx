import { Avatar } from "../"
import { MoonIcon, MinusIcon } from "lucide-react"

export default function IndicatorIcon() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        {/* Circle Avatar with green indicator */}
        <Avatar.Root size="xs">
          <Avatar.Image
            src="https://github.com/enjidev.png"
            alt="Enji Kusnadi"
          />
          <Avatar.Fallback>EK</Avatar.Fallback>
          <Avatar.Indicator className="bg-red-500 white:bg-red-600">
            <MinusIcon className="text-white" />
          </Avatar.Indicator>
        </Avatar.Root>

        <Avatar.Root size="sm">
          <Avatar.Image
            src="https://github.com/enjidev.png"
            alt="Enji Kusnadi"
          />
          <Avatar.Fallback>EK</Avatar.Fallback>
          <Avatar.Indicator>
            <MoonIcon className="fill-amber-400 text-amber-400 white:fill-amber-600 white:text-amber-600" />
          </Avatar.Indicator>
        </Avatar.Root>

        <Avatar.Root size="md">
          <Avatar.Image
            src="https://github.com/enjidev.png"
            alt="Enji Kusnadi"
          />
          <Avatar.Fallback>EK</Avatar.Fallback>
          <Avatar.Indicator>
            <MoonIcon className="fill-amber-400 text-amber-400 white:fill-amber-600 white:text-amber-600" />
          </Avatar.Indicator>
        </Avatar.Root>

        <Avatar.Root size="lg">
          <Avatar.Image
            src="https://github.com/enjidev.png"
            alt="Enji Kusnadi"
          />
          <Avatar.Fallback>EK</Avatar.Fallback>
          <Avatar.Indicator>
            <MoonIcon className="fill-amber-400 text-amber-400 white:fill-amber-600 white:text-amber-600" />
          </Avatar.Indicator>
        </Avatar.Root>
      </div>

      {/* Square Avatar with red indicator */}
      <div className="flex items-center gap-4">
        {/* Circle Avatar with green indicator */}
        <Avatar.Root shape="square" size="xs">
          <Avatar.Image
            src="https://github.com/enjidev.png"
            alt="Enji Kusnadi"
          />
          <Avatar.Fallback>EK</Avatar.Fallback>
          <Avatar.Indicator>
            <MoonIcon />
          </Avatar.Indicator>
        </Avatar.Root>

        <Avatar.Root shape="square" size="sm">
          <Avatar.Image
            src="https://github.com/enjidev.png"
            alt="Enji Kusnadi"
          />
          <Avatar.Fallback>EK</Avatar.Fallback>
          <Avatar.Indicator>
            <MoonIcon />
          </Avatar.Indicator>
        </Avatar.Root>

        <Avatar.Root shape="square" size="md">
          <Avatar.Image
            src="https://github.com/enjidev.png"
            alt="Enji Kusnadi"
          />
          <Avatar.Fallback>EK</Avatar.Fallback>
          <Avatar.Indicator>
            <MoonIcon />
          </Avatar.Indicator>
        </Avatar.Root>

        <Avatar.Root shape="square" size="lg">
          <Avatar.Image
            src="https://github.com/enjidev.png"
            alt="Enji Kusnadi"
          />
          <Avatar.Fallback>EK</Avatar.Fallback>
          <Avatar.Indicator>
            <MoonIcon />
          </Avatar.Indicator>
        </Avatar.Root>
      </div>
    </div>
  )
}
