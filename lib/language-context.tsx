"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { LanguageCode } from "./translations"

interface LanguageContextType {
  language: LanguageCode
  setLanguage: (lang: LanguageCode) => void
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const RTL_LANGUAGES: LanguageCode[] = ["ar", "ur"]

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>("en")
  const [isRTL, setIsRTL] = useState(false)

  useEffect(() => {
    const isRtl = RTL_LANGUAGES.includes(language)
    setIsRTL(isRtl)

    if (typeof document !== "undefined") {
      document.documentElement.dir = isRtl ? "rtl" : "ltr"
      document.documentElement.lang = language
      document.body.style.direction = isRtl ? "rtl" : "ltr"
    }
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
