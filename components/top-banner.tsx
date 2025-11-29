"use client"

import { X, MessageCircle, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/lib/language-context"
import { useBanner } from "@/lib/banner-context"
import { translations } from "@/lib/translations"

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const { setIsBannerVisible, setBannerHeight } = useBanner()
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

  useEffect(() => {
    // Update banner height whenever banner content changes
    if (bannerRef.current && isVisible && !isScrolled) {
      const height = bannerRef.current.offsetHeight
      setBannerHeight(height)
    } else {
      setBannerHeight(0)
    }
  }, [isVisible, isScrolled, setBannerHeight])

  // Also update on window resize
  useEffect(() => {
    const handleResize = () => {
      if (bannerRef.current && isVisible && !isScrolled) {
        const height = bannerRef.current.offsetHeight
        setBannerHeight(height)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize() // Initial call
    return () => window.removeEventListener('resize', handleResize)
  }, [isVisible, isScrolled, setBannerHeight])

  if (!isVisible || isScrolled) return null

  return (
    <div ref={bannerRef} className="fixed top-0 left-0 right-0 z-30 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white px-2 md:px-4 py-1.5 md:py-2.5 backdrop-blur-sm animate-slideInDown">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-1.5 md:gap-3">
          {/* First line on mobile, left section on desktop - Contact info */}
          <div className="flex flex-row items-center gap-1.5 md:gap-3 text-[10px] md:text-xs lg:text-sm w-full md:w-auto justify-between md:justify-start">
            <a
              href="https://wa.me/923398362133"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 md:gap-1.5 hover:text-blue-300 transition-colors hover:scale-105 transform duration-200"
            >
              <MessageCircle size={12} className="md:w-[14px] md:h-[14px] lg:w-[18px] lg:h-[18px] flex-shrink-0" />
              <span className="hidden lg:inline font-medium">{t.needHelp}</span>
              <span className="font-medium text-[10px] md:text-xs lg:text-sm">+92 3398362133</span>
            </a>
            <span className="hidden lg:block text-slate-500 mx-1">•</span>
            <a
              href="mailto:info@vertexcode.com"
              className="flex items-center gap-1 md:gap-1.5 hover:text-blue-300 transition-colors hover:scale-105 transform duration-200"
            >
              <Mail size={12} className="md:w-[14px] md:h-[14px] lg:w-[18px] lg:h-[18px] flex-shrink-0" />
              <span className="hidden lg:inline font-medium">{t.dropUsLine}:</span>
              <span className="font-medium text-[9px] md:text-[10px] lg:text-sm truncate max-w-[120px] md:max-w-none">info@vertexcode.com</span>
            </a>
          </div>

          {/* Second line on mobile, middle section on desktop - Social icons and Close button */}
          <div className="flex items-center justify-center gap-1 md:gap-2 lg:gap-3 w-full md:w-auto">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-all hover:scale-110"
            >
              <Facebook size={10} className="md:w-3 md:h-3 lg:w-4 lg:h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-all hover:scale-110"
            >
              <Twitter size={10} className="md:w-3 md:h-3 lg:w-4 lg:h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-all hover:scale-110"
            >
              <Linkedin size={10} className="md:w-3 md:h-3 lg:w-4 lg:h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-all hover:scale-110"
            >
              <Instagram size={10} className="md:w-3 md:h-3 lg:w-4 lg:h-4" />
            </a>
            {/* Close button - on same line as social icons on mobile */}
            <button
              onClick={() => {
                setIsVisible(false)
                setIsBannerVisible(false)
              }}
              className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-all hover:scale-110 flex-shrink-0 md:ml-2 lg:ml-4"
            >
              <X size={12} className="md:w-[14px] md:h-[14px] lg:w-[18px] lg:h-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
