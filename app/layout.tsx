import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Abhishek's Portfolio",
  description: "Minimalistic portfolio showcasing my projects and skills",
}

const logo = "https://pub-7ddfd5cf9541446c8d9caa4c53b1cbb5.r2.dev/logo.png";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="icon" href={logo} />
      </head>   
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
