import { Avatar } from "../"

export default function Fallback() {
  return (
    <div className="flex items-center gap-4">
      {/* Fallback without Image URL */}
      <Avatar.Root size="md">
        <Avatar.Fallback>EK</Avatar.Fallback>
      </Avatar.Root>

      {/* Fallback with Broken Image URL */}
      <Avatar.Root size="md">
        <Avatar.Image
          src="https://broken-image-link.com/avatar.jpg"
          alt="Broken Avatar"
        />
        <Avatar.Fallback>EK</Avatar.Fallback>
      </Avatar.Root>
    </div>
  )
}
