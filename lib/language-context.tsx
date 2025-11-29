"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { LanguageCode } from "./translations"

interface LanguageContextType {
  language: LanguageCode
  setLanguage: (lang: LanguageCode) => void
  isRTL: boolean
  isLanguageLoaded: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const RTL_LANGUAGES: LanguageCode[] = ["ar", "ur"]

const LANGUAGE_STORAGE_KEY = "vertex-code-language"

// Function to get language from localStorage or window global (can be called synchronously)
export function getStoredLanguage(): LanguageCode {
  if (typeof window !== "undefined") {
    // First check the global variable set by inline script (fastest)
    if ((window as any).__VERTEX_LANGUAGE__) {
      const lang = (window as any).__VERTEX_LANGUAGE__
      if (["en", "es", "fr", "ur", "ar", "hi"].includes(lang)) {
        return lang as LanguageCode
      }
    }
    // Fallback to localStorage
    try {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
      if (stored && ["en", "es", "fr", "ur", "ar", "hi"].includes(stored)) {
        return stored as LanguageCode
      }
    } catch (e) {
      // localStorage might not be available in some cases
      return "en"
    }
  }
  return "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en")
  const [isRTL, setIsRTL] = useState(false)
  const [isLanguageLoaded, setIsLanguageLoaded] = useState(false)

  // Load language from localStorage on mount
  useEffect(() => {
    const loadLanguage = () => {
      try {
        const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
        const savedLang = (stored && ["en", "es", "fr", "ur", "ar", "hi"].includes(stored))
          ? (stored as LanguageCode)
          : "en"
        
        // Set the language
        setLanguageState(savedLang)
        setIsRTL(RTL_LANGUAGES.includes(savedLang))
        
        // Update HTML attributes
        if (typeof document !== "undefined") {
          const isRtl = RTL_LANGUAGES.includes(savedLang)
          document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr")
          document.documentElement.setAttribute("lang", savedLang)
          if (document.body) {
            document.body.style.direction = isRtl ? "rtl" : "ltr"
          }
        }
        
        // Update global variable
        if (typeof window !== "undefined") {
          ;(window as any).__VERTEX_LANGUAGE__ = savedLang
        }
        
        // Mark as loaded
        setIsLanguageLoaded(true)
      } catch (e) {
        // If localStorage fails, use default
        setLanguageState("en")
        setIsRTL(false)
        setIsLanguageLoaded(true)
      }
    }

    loadLanguage()
  }, [])

  // Wrapper function to update language and save to localStorage
  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang)
    setIsRTL(RTL_LANGUAGES.includes(lang))
    
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
        ;(window as any).__VERTEX_LANGUAGE__ = lang
      } catch (e) {
        // localStorage might not be available
      }
    }
    
    // Update HTML attributes
    if (typeof document !== "undefined") {
      const isRtl = RTL_LANGUAGES.includes(lang)
      document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr")
      document.documentElement.setAttribute("lang", lang)
      if (document.body) {
        document.body.style.direction = isRtl ? "rtl" : "ltr"
      }
    }
  }

  // Don't render children until language is loaded
  if (!isLanguageLoaded) {
    return null
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, isLanguageLoaded }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
