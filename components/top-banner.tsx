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
    <div ref={bannerRef} className="fixed top-0 left-0 right-0 z-30 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white px-3 md:px-6 py-2 md:py-2.5 backdrop-blur-sm animate-slideInDown">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row max-[470px]:flex-col items-center justify-between gap-2 max-[470px]:gap-2 md:gap-4">
          {/* Below 470px: All on one line | 470px+: Line 1 - WhatsApp and Email */}
          <div className="flex flex-row items-center justify-between max-[470px]:flex-1 min-[470px]:w-auto gap-2 max-[470px]:gap-2 min-[470px]:gap-3 md:gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/923398362133"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 max-[470px]:gap-1 min-[470px]:gap-1.5 md:gap-2 hover:text-blue-300 transition-colors"
            >
              <MessageCircle size={12} className="max-[470px]:w-3 max-[470px]:h-3 min-[470px]:w-[14px] min-[470px]:h-[14px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] flex-shrink-0" />
              <span className="font-medium text-[10px] max-[470px]:text-[10px] min-[470px]:text-xs md:text-sm lg:text-base whitespace-nowrap">+92 3398362133</span>
            </a>
            
            {/* Email */}
            <a
              href="mailto:info@vertexcode.com"
              className="flex items-center gap-1 max-[470px]:gap-1 min-[470px]:gap-1.5 md:gap-2 hover:text-blue-300 transition-colors"
            >
              <Mail size={12} className="max-[470px]:w-3 max-[470px]:h-3 min-[470px]:w-[14px] min-[470px]:h-[14px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] flex-shrink-0" />
              <span className="font-medium text-[9px] max-[470px]:text-[9px] min-[470px]:text-[10px] md:text-xs lg:text-sm whitespace-nowrap truncate max-[470px]:max-w-[100px] min-[470px]:max-w-none">info@vertexcode.com</span>
            </a>
          </div>

          {/* Below 470px: All on one line | 470px+: Line 2 - Social icons and Cross */}
          <div className="flex items-center justify-center max-[470px]:justify-end min-[470px]:justify-center gap-1 max-[470px]:gap-1 min-[470px]:gap-2 md:gap-3 max-[470px]:flex-shrink-0 min-[470px]:w-full min-[470px]:md:w-auto">
            {/* Social icons */}
            <div className="flex items-center gap-1 max-[470px]:gap-1 min-[470px]:gap-2 md:gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 max-[470px]:w-5 max-[470px]:h-5 min-[470px]:w-7 min-[470px]:h-7 md:w-8 md:h-8 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook size={10} className="max-[470px]:w-2.5 max-[470px]:h-2.5 min-[470px]:w-3.5 min-[470px]:h-3.5 md:w-4 md:h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 max-[470px]:w-5 max-[470px]:h-5 min-[470px]:w-7 min-[470px]:h-7 md:w-8 md:h-8 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-all hover:scale-110"
              >
                <Twitter size={10} className="max-[470px]:w-2.5 max-[470px]:h-2.5 min-[470px]:w-3.5 min-[470px]:h-3.5 md:w-4 md:h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 max-[470px]:w-5 max-[470px]:h-5 min-[470px]:w-7 min-[470px]:h-7 md:w-8 md:h-8 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-all hover:scale-110"
              >
                <Linkedin size={10} className="max-[470px]:w-2.5 max-[470px]:h-2.5 min-[470px]:w-3.5 min-[470px]:h-3.5 md:w-4 md:h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 max-[470px]:w-5 max-[470px]:h-5 min-[470px]:w-7 min-[470px]:h-7 md:w-8 md:h-8 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram size={10} className="max-[470px]:w-2.5 max-[470px]:h-2.5 min-[470px]:w-3.5 min-[470px]:h-3.5 md:w-4 md:h-4" />
              </a>
            </div>
            
            {/* Close button */}
            <button
              onClick={() => {
                setIsVisible(false)
                setIsBannerVisible(false)
              }}
              className="w-5 h-5 max-[470px]:w-5 max-[470px]:h-5 min-[470px]:w-7 min-[470px]:h-7 md:w-8 md:h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-all hover:scale-110 flex-shrink-0"
            >
              <X size={10} className="max-[470px]:w-2.5 max-[470px]:h-2.5 min-[470px]:w-3.5 min-[470px]:h-3.5 md:w-4 md:h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
