import { DownloadTrigger } from "../"
import { Button } from "../../button"

export default function Basic() {
  return (
    <DownloadTrigger
      fileName="hello.txt"
      mimeType="text/plain"
      data="Hello from Stark UI!"
      asChild
    >
      <Button variant="outline">Download Text File</Button>
    </DownloadTrigger>
  )
}
