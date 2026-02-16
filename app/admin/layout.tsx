import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Panel | Yazid Hamza Portfolio",
  description: "Manage portfolio projects, education, and experience entries.",
  robots: "noindex, nofollow",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
