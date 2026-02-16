import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk, Kanit } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-kanit",
})

export const metadata: Metadata = {
  title: "Yazid Hamza | Mechanical & Aerospace Engineer",
  description:
    "Portfolio of Yazid Hamza -- Mechanical & Aerospace Engineering student focused on design, manufacturing & simulation.",
  keywords: [
    "Mechanical Engineer",
    "Aerospace Engineer",
    "CAD",
    "CFD",
    "Portfolio",
    "Yazid Hamza",
    "ANSYS",
    "SolidWorks",
    "CATIA",
  ],
  authors: [{ name: "Yazid Hamza" }],
  openGraph: {
    title: "Yazid Hamza | Mechanical & Aerospace Engineer",
    description:
      "Portfolio of Yazid Hamza -- Mechanical & Aerospace Engineering student focused on design, manufacturing & simulation.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0f1626",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${kanit.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
