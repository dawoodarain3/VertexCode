import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import { BannerProvider } from "@/lib/banner-context"
import LanguageLoader from "@/components/language-loader"
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem("vertex-code-language");
                  const lang = (stored && ["en", "es", "fr", "ur", "ar", "hi"].includes(stored)) ? stored : "en";
                  const isRtl = ["ar", "ur"].includes(lang);
                  document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
                  document.documentElement.setAttribute("lang", lang);
                  document.documentElement.setAttribute("data-language-set", "true");
                  window.__VERTEX_LANGUAGE__ = lang;
                  if (document.body) {
                    document.body.style.direction = isRtl ? "rtl" : "ltr";
                  }
                } catch (e) {
                  document.documentElement.setAttribute("dir", "ltr");
                  document.documentElement.setAttribute("lang", "en");
                  document.documentElement.setAttribute("data-language-set", "true");
                  window.__VERTEX_LANGUAGE__ = "en";
                  if (document.body) {
                    document.body.style.direction = "ltr";
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        <LanguageLoader>
          <LanguageProvider>
            <BannerProvider>
              {children}
              <CookieConsent />
            </BannerProvider>
          </LanguageProvider>
        </LanguageLoader>
        <Analytics />
      </body>
    </html>
  )
}
