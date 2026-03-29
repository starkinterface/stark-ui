export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Stark Interface, by{" "}
        <a
          href="https://x.com/enjidev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enji Kusnadi
        </a>
      </p>
    </div>
  )
}
