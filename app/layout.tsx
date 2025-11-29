import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import { BannerProvider } from "@/lib/banner-context"
import CookieConsent from "@/components/cookie-consent"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vertex Code Solutions - Web, Mobile & AI Development",
  description: "Build stunning websites, mobile apps, and AI/ML solutions with Vertex Code Solutions",
  icons: {
    icon: [
      {
        url: "/vertexlogo.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/vertexlogo.png",
        type: "image/png",
      },
    ],
    shortcut: "/vertexlogo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          <BannerProvider>
            {children}
            <CookieConsent />
          </BannerProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
