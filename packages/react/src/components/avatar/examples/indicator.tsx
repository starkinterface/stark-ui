import { Avatar } from "../"

export default function Indicator() {
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
          <Avatar.Indicator className="bg-emerald-500 white:bg-emerald-600" />
        </Avatar.Root>

        <Avatar.Root size="sm">
          <Avatar.Image
            src="https://github.com/enjidev.png"
            alt="Enji Kusnadi"
          />
          <Avatar.Fallback>EK</Avatar.Fallback>
          <Avatar.Indicator className="bg-emerald-500 white:bg-emerald-600" />
        </Avatar.Root>

        <Avatar.Root size="md">
          <Avatar.Image
            src="https://github.com/enjidev.png"
            alt="Enji Kusnadi"
          />
          <Avatar.Fallback>EK</Avatar.Fallback>
          <Avatar.Indicator className="bg-emerald-500 white:bg-emerald-600" />
        </Avatar.Root>

        <Avatar.Root size="lg">
          <Avatar.Image
            src="https://github.com/enjidev.png"
            alt="Enji Kusnadi"
          />
          <Avatar.Fallback>EK</Avatar.Fallback>
          <Avatar.Indicator className="bg-emerald-500 white:bg-emerald-600" />
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
          <Avatar.Indicator className="bg-red-500 white:bg-red-600" />
        </Avatar.Root>

        <Avatar.Root shape="square" size="sm">
          <Avatar.Image
            src="https://github.com/enjidev.png"
            alt="Enji Kusnadi"
          />
          <Avatar.Fallback>EK</Avatar.Fallback>
          <Avatar.Indicator className="bg-red-500 white:bg-red-600" />
        </Avatar.Root>

        <Avatar.Root shape="square" size="md">
          <Avatar.Image
            src="https://github.com/enjidev.png"
            alt="Enji Kusnadi"
          />
          <Avatar.Fallback>EK</Avatar.Fallback>
          <Avatar.Indicator className="bg-red-500 white:bg-red-600" />
        </Avatar.Root>

        <Avatar.Root shape="square" size="lg">
          <Avatar.Image
            src="https://github.com/enjidev.png"
            alt="Enji Kusnadi"
          />
          <Avatar.Fallback>EK</Avatar.Fallback>
          <Avatar.Indicator className="bg-red-500 white:bg-red-600" />
        </Avatar.Root>
      </div>
    </div>
  )
}
