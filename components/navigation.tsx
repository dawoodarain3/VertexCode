"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useBanner } from "@/lib/banner-context"
import { translations, type LanguageCode } from "@/lib/translations"
import Logo from "@/components/logo"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
  const { isBannerVisible, bannerHeight } = useBanner()
  const t = translations[language]

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <nav
      className="fixed w-full z-40 transition-all duration-300 bg-gradient-to-r from-blue-900 to-emerald-900 backdrop-blur-md border-b border-blue-700/50 shadow-xl"
      style={{ top: isBannerVisible && bannerHeight > 0 ? `${bannerHeight}px` : '0' }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
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
              className="md:hidden text-white hover:text-blue-300 transition-colors p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Sheet/Drawer */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side={isRTL ? "left" : "right"} className="w-[85vw] sm:w-[400px] bg-gradient-to-b from-blue-900 to-emerald-900 border-blue-700/50 p-0 [&>button]:hidden">
          <SheetHeader className="p-6 border-b border-blue-700/50">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-white text-xl font-bold">
                <Logo showText={true} size="md" textColor="light" />
              </SheetTitle>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-blue-300 transition-colors p-2"
              >
                <X size={24} />
              </button>
            </div>
          </SheetHeader>
          
          <div className="flex flex-col h-full">
            <div className="flex-1 p-6 space-y-1">
              <Link
                href="/"
                className="block px-4 py-3 text-white hover:bg-blue-800/50 rounded-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.home}
              </Link>
              <Link
                href="/services"
                className="block px-4 py-3 text-white hover:bg-blue-800/50 rounded-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.services}
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-white hover:bg-blue-800/50 rounded-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.aboutUs}
              </Link>
              <Link
                href="/blogs"
                className="block px-4 py-3 text-white hover:bg-blue-800/50 rounded-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.blogs}
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 text-white hover:bg-blue-800/50 rounded-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.contactUs}
              </Link>
            </div>

            {/* Mobile Language Switcher - Dropdown */}
            <div className="border-t border-blue-700/50 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Globe size={18} className="text-white" />
                <p className="text-white font-semibold">{t.selectLanguage}</p>
              </div>
              <Select
                value={language}
                onValueChange={(value) => {
                  setLanguage(value as LanguageCode)
                }}
              >
                <SelectTrigger className="w-full bg-blue-800/50 border-blue-600 text-white hover:bg-blue-700/50">
                  <SelectValue>
                    {languages.find((l) => l.code === language)?.name}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-blue-950 border-blue-700">
                  {languages.map((lang) => (
                    <SelectItem
                      key={lang.code}
                      value={lang.code}
                      className="text-white hover:bg-blue-800 focus:bg-blue-800"
                    >
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
