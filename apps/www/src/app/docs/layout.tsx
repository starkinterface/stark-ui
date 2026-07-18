import { DocsSidebar } from "@/components/layout/docs/sidebar"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="content-container flex flex-1">
      <div>
        <DocsSidebar />
      </div>
      <div>{children}</div>
    </div>
  )
}
