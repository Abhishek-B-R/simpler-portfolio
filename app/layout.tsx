import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
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
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5DZGRD85');`}
      </Script>   
      <body className="font-sans">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5DZGRD85"
        height="0" width="0" style={{"display":"none","visibility":"hidden"}}></iframe></noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
