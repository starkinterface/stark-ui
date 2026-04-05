import { tv } from "tailwind-variants/lite"

const styles = tv({
  slots: {
    base: "size-full",
    content: "content-container flex h-full justify-between",
    line: "h-full w-px bg-decoration",
  },
})

export default function Background() {
  const { base, content, line } = styles()

  return (
    <div className={base()}>
      <div className={content()}>
        <div className={line()} />
        <div className={line()} />
      </div>
    </div>
  )
}
