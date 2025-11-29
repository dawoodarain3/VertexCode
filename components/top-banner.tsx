"use client"

import { X, MessageCircle, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { useBanner } from "@/lib/banner-context"
import { translations } from "@/lib/translations"

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language } = useLanguage()
  const { setIsBannerVisible } = useBanner()
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100
      setIsScrolled(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    // Check initial scroll position
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Update banner visibility whenever isVisible or isScrolled changes
    setIsBannerVisible(isVisible && !isScrolled)
  }, [isVisible, isScrolled, setIsBannerVisible])

  if (!isVisible || isScrolled) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white px-4 py-4 border-b border-blue-700/50 backdrop-blur-sm animate-slideInDown">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left section - Contact info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm">
            <a
              href="https://wa.me/923398362133"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-300 transition-colors hover:scale-105 transform duration-200"
            >
              <MessageCircle size={18} />
              <span className="hidden sm:inline font-medium">{t.needHelp}</span>
              <span className="font-medium">+92 3398362133</span>
            </a>
            <span className="hidden sm:block text-slate-500">•</span>
            <a
              href="mailto:info@vertexcode.com"
              className="flex items-center gap-2 hover:text-blue-300 transition-colors hover:scale-105 transform duration-200"
            >
              <Mail size={18} />
              <span className="hidden sm:inline font-medium">{t.dropUsLine}:</span>
              <span className="font-medium">info@vertexcode.com</span>
            </a>
          </div>

          {/* Right section - Social icons and close button */}
          <div className="flex items-center gap-4">
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-all hover:scale-110"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-all hover:scale-110"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram size={16} />
              </a>
            </div>
            <button
              onClick={() => {
                setIsVisible(false)
                setIsBannerVisible(false)
              }}
              className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-all hover:scale-110"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
