import { Button } from "@stark-ui/react"
import Link from "next/link"

const Page = () => (
  <div className="content-container px-content-padding flex flex-1 flex-col items-center justify-center gap-4">
    Not Found
    <Button asChild>
      <Link href="/">Back to Home</Link>
    </Button>
  </div>
)

export default Page
