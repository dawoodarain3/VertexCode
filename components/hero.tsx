"use client"

import Link from "next/link"
import { ArrowRight, Code, Smartphone, Brain } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import CountUp from "@/components/count-up"
import { usePagePadding } from "@/hooks/use-page-padding"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const paddingTop = usePagePadding()
  const { language, isRTL } = useLanguage()
  const t = translations[language]
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section 
      className="relative pb-20 px-4 overflow-hidden transition-all duration-300 bg-white"
      style={{ paddingTop: `${paddingTop}px` }}
    >

      <div className="max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isRTL ? "text-right" : ""}`}>
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                {t.innovativeDigitalSolutions}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
              {t.buildTheFuture}{" "}
              <span className="block bg-gradient-to-r from-primary via-emerald-500 to-orange-500 bg-clip-text text-transparent">
                {t.vertexCodeSolutions}
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">{t.heroDescription}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 flex items-center justify-center gap-2 group hover:from-orange-600 hover:to-orange-700"
              >
                {t.startYourProject}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300"
              >
                {t.exploreServices}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
                  <CountUp end={50} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">{t.projectsCompleted}</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                  <CountUp end={30} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">{t.happyClients}</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  <CountUp end={5} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">{t.yearsExperience}</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Floating cards */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center animate-float border border-primary/30">
                <Code size={48} className="text-primary" />
              </div>
              <div
                className="absolute bottom-10 left-0 w-40 h-40 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl flex items-center justify-center animate-float border border-accent/30"
                style={{ animationDelay: "0.5s" }}
              >
                <Smartphone size={48} className="text-accent" />
              </div>
              <div
                className="absolute bottom-0 right-10 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center animate-float border border-orange-500/30"
                style={{ animationDelay: "1s" }}
              >
                <Brain size={48} className="text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
