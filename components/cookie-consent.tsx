"use client"

import { useState, useEffect } from "react"
import { X, Cookie } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import Link from "next/link"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      // Show after a small delay
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const essentialCookiesOnly = () => {
    localStorage.setItem("cookieConsent", "essential")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slideInUp">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <Cookie className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">{t.cookieTitle}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {t.cookieDescription}
            </p>
            <p className="text-xs text-muted-foreground">
              {t.cookieLearnMore}{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                {t.privacyPolicy}
              </Link>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={acceptCookies}
              className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 whitespace-nowrap"
            >
              {t.cookieAccept}
            </button>
            <button
              onClick={essentialCookiesOnly}
              className="px-6 py-2 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-all duration-300 whitespace-nowrap"
            >
              {t.cookieEssentialOnly}
            </button>
          </div>

          <button
            onClick={essentialCookiesOnly}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

