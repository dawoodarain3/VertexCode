"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useBanner } from "@/lib/banner-context"
import { translations, type LanguageCode } from "@/lib/translations"
import Logo from "@/components/logo"

const languages = [
  { code: "en" as LanguageCode, name: "English" },
  { code: "es" as LanguageCode, name: "Español" },
  { code: "fr" as LanguageCode, name: "Français" },
  { code: "ur" as LanguageCode, name: "اردو" },
  { code: "ar" as LanguageCode, name: "العربية" },
  { code: "hi" as LanguageCode, name: "हिन्दी" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { language, setLanguage, isRTL } = useLanguage()
  const { isBannerVisible } = useBanner()
  const t = translations[language]

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isBannerVisible ? "top-16" : "top-0"
      } bg-gradient-to-r from-blue-900 to-emerald-900 backdrop-blur-md border-b border-blue-700/50 shadow-xl`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="group">
            <Logo 
              showText={true} 
              size="md"
              textColor="light"
              className="group-hover:[&_span]:text-blue-300 transition-colors"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-white hover:text-blue-300 transition-colors font-medium">
              {t.home}
            </Link>
            <Link href="/services" className="text-white hover:text-blue-300 transition-colors font-medium">
              {t.services}
            </Link>
            <Link href="/about" className="text-white hover:text-blue-300 transition-colors font-medium">
              {t.aboutUs}
            </Link>
            <Link href="/blogs" className="text-white hover:text-blue-300 transition-colors font-medium">
              {t.blogs}
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-300 transition-colors font-medium">
              {t.contactUs}
            </Link>
          </div>

          {/* Language Switcher and Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-blue-500/30 text-white transition-all duration-200 hover:scale-105"
              >
                <Globe size={18} />
                <span className="font-medium">{languages.find((l) => l.code === language)?.name}</span>
              </button>
              {langOpen && (
                <div
                  className={`absolute mt-12 w-40 bg-blue-950 border border-blue-500/50 rounded-lg shadow-xl animate-slideInDown z-50 ${isRTL ? "right-0" : "left-0"}`}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setLangOpen(false)
                      }}
                      className={`w-full text-left px-4 py-3 transition-all ${
                        language === lang.code ? "bg-blue-600 text-white font-semibold" : "text-white hover:bg-blue-800"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-blue-300 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-slideInDown">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-white hover:text-blue-300 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.home}
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-blue-300 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.services}
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-blue-300 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.aboutUs}
              </Link>
              <Link
                href="/blogs"
                className="text-white hover:text-blue-300 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.blogs}
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-blue-300 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.contactUs}
              </Link>

              {/* Mobile Language Switcher */}
              <div className="border-t border-blue-700 pt-4 mt-4">
                <p className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Globe size={18} />
                  {t.selectLanguage}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setIsOpen(false)
                      }}
                      className={`px-3 py-2 rounded-lg transition-all text-sm font-medium ${
                        language === lang.code ? "bg-blue-600 text-white" : "bg-blue-800 text-white hover:bg-blue-700"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
