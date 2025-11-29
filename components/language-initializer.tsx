"use client"

import { useEffect } from "react"
import { getStoredLanguage } from "@/lib/language-context"

const RTL_LANGUAGES = ["ar", "ur"]

export default function LanguageInitializer() {
  useEffect(() => {
    // Ensure data attribute is set as fallback in case script didn't run
    if (typeof document !== "undefined") {
      const lang = getStoredLanguage()
      const isRtl = RTL_LANGUAGES.includes(lang)
      
      // Set attributes if not already set
      if (!document.documentElement.hasAttribute("data-language-set")) {
        document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr")
        document.documentElement.setAttribute("lang", lang)
        document.documentElement.setAttribute("data-language-set", "true")
      }
      
      if (document.body) {
        document.body.style.direction = isRtl ? "rtl" : "ltr"
      }
    }
  }, [])

  return null
}

