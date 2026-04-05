import DecorationLine from "@/components/decoration-line"

export default function Footer() {
  return (
    <div className="relative z-0">
      <div className="content-container px-content-padding flex items-center justify-between gap-4 py-4 text-xs">
        <p className="text-sm text-foreground-muted">
          © {new Date().getFullYear()} Stark Interface, by{" "}
          <a
            href="https://x.com/enjidev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground"
          >
            Enji Kusnadi
          </a>
        </p>
      </div>

      <div className="relative h-2">
        <DecorationLine orientation="horizontal" position="start" />
      </div>

      <div className="content-container pointer-events-none absolute inset-0">
        <DecorationLine orientation="vertical" position="start" />
        <DecorationLine orientation="vertical" position="end" />
        <DecorationLine
          orientation="horizontal"
          position="start"
          className="inside-container"
        />
      </div>
    </div>
  )
}
