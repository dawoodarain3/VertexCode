"use client"

import Link from "next/link"
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react"
import { translations } from "@/lib/translations"
import { useLanguage } from "@/lib/language-context"
import Logo from "@/components/logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { language, isRTL } = useLanguage()
  const t = translations[language]

  return (
    <footer
      className={`bg-gradient-to-r from-blue-900 to-emerald-900 border-t border-blue-700 ${isRTL ? "rtl" : "ltr"}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="space-y-2 sm:space-y-4 col-span-2 md:col-span-1">
            <Logo 
              showText={true} 
              size="md"
              textColor="light"
            />
            <p className="text-xs sm:text-sm text-blue-100">Building the future of technology, one project at a time.</p>
            <div className="flex gap-2 sm:gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-blue-700/50 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-all hover:scale-110 shadow-md"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-blue-700/50 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-all hover:scale-110 shadow-md"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-blue-700/50 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-all hover:scale-110 shadow-md"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-blue-700/50 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-all hover:scale-110 shadow-md"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3 sm:mb-6 text-sm sm:text-lg">{t.services}</h4>
            <ul className="space-y-1.5 sm:space-y-3">
              <li>
                <Link href="/services" className="text-blue-100 hover:text-blue-300 transition-colors text-xs sm:text-sm">
                  {t.webDevelopment}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-blue-300 transition-colors text-xs sm:text-sm">
                  {t.mobileApps}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-blue-300 transition-colors text-xs sm:text-sm">
                  {t.aiMl}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-blue-300 transition-colors text-xs sm:text-sm">
                  {t.backend}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-blue-300 transition-colors text-xs sm:text-sm">
                  {t.cloudDevops}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-blue-300 transition-colors text-xs sm:text-sm">
                  {t.customSoftware}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-blue-300 transition-colors text-xs sm:text-sm">
                  {t.security}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white mb-3 sm:mb-6 text-sm sm:text-lg">{t.company}</h4>
            <ul className="space-y-1.5 sm:space-y-3">
              <li>
                <Link href="/about" className="text-blue-100 hover:text-blue-300 transition-colors text-xs sm:text-sm">
                  {t.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-blue-100 hover:text-blue-300 transition-colors text-xs sm:text-sm">
                  {t.blogs}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-blue-300 transition-colors text-xs sm:text-sm">
                  {t.contactUs}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-blue-100 hover:text-blue-300 transition-colors text-xs sm:text-sm">
                  {t.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-blue-100 hover:text-blue-300 transition-colors text-xs sm:text-sm">
                  {t.termsConditions}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-3 sm:mb-6 text-sm sm:text-lg">{t.quickLinks}</h4>
            <ul className="space-y-1.5 sm:space-y-3">
              <li>
                <Link href="/" className="text-blue-100 hover:text-blue-300 transition-colors text-xs sm:text-sm">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-blue-300 transition-colors text-xs sm:text-sm">
                  {t.services}
                </Link>
              </li>
              <li>
                <a href="#portfolio" className="text-blue-100 hover:text-blue-300 transition-colors text-xs sm:text-sm">
                  Portfolio
                </a>
              </li>
              <li>
                <Link href="/blogs" className="text-blue-100 hover:text-blue-300 transition-colors text-xs sm:text-sm">
                  {t.blogs}
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-white mb-3 sm:mb-6 text-sm sm:text-lg">{t.contactInfo}</h4>
            <div className="space-y-2 sm:space-y-4">
              <div>
                <p className="text-blue-100 text-xs sm:text-sm font-medium mb-0.5 sm:mb-1">Email:</p>
                <a
                  href="mailto:info@vertexcode.com"
                  className="text-blue-300 hover:text-white transition-colors break-all text-xs sm:text-sm"
                >
                  info@vertexcode.com
                </a>
              </div>
              <div>
                <p className="text-blue-100 text-xs sm:text-sm font-medium mb-0.5 sm:mb-1">Phone:</p>
                <a href="tel:+923398362133" className="text-blue-300 hover:text-white transition-colors text-xs sm:text-sm">
                  +92 3398362133
                </a>
              </div>
              <div>
                <p className="text-blue-100 text-xs sm:text-sm font-medium mb-0.5 sm:mb-1">Location:</p>
                <p className="text-blue-200 text-xs sm:text-sm">{t.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 pt-4 sm:pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-4 text-xs sm:text-sm text-blue-200">
            <p>
              &copy; {currentYear} Vertex Code Solutions. {t.allRightsReserved}.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-blue-300 transition-colors">
                {t.privacyPolicy}
              </Link>
              <Link href="/terms" className="hover:text-blue-300 transition-colors">
                {t.termsConditions}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
