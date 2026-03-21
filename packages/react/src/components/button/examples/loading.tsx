import { Button } from "../button"
import { RingLoader } from "@stark-loader/react"
import { useState } from "react"

export default function Loading() {
  const [loading] = useState(true)

  return (
    <div className="flex gap-2">
      <Button loading={loading} variant="accent">
        Accent
        {loading && <RingLoader />}
      </Button>
      <Button loading={loading} variant="primary">
        Primary
        {loading && <RingLoader />}
      </Button>
      <Button loading={loading} variant="secondary">
        Secondary
        {loading && <RingLoader />}
      </Button>
      <Button loading={loading} variant="ghost">
        Ghost
        {loading && <RingLoader />}
      </Button>
      <Button loading={loading} variant="outline">
        Outline
        {loading && <RingLoader />}
      </Button>
      <Button loading={loading} variant="danger">
        Danger
        {loading && <RingLoader />}
      </Button>
      <Button loading={loading} variant="danger-soft">
        Danger Soft
        {loading && <RingLoader />}
      </Button>
    </div>
  )
}
