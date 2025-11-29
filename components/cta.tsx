"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function CTA() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          className={`relative bg-gradient-to-br from-primary/10 via-emerald-500/10 to-orange-500/10 border border-primary/20 rounded-3xl p-12 md:p-16 text-center space-y-8 overflow-hidden ${
            isLoaded ? "animate-slideInUp" : "opacity-0"
          }`}
        >
          {/* Background elements */}
          <div className="absolute top-5 left-5 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
          <div className="absolute bottom-5 right-5 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-emerald-600 to-orange-600 bg-clip-text text-transparent">{t.readyToBuild}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.ctaCollaborate}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all hover:from-orange-600 hover:to-orange-700"
              >
                {t.startYourProject}
              </Link>
              <Link
                href="/#services"
                className="px-8 py-3 border-2 border-orange-500 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-all"
              >
                {t.exploreServices}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
