"use client"

import type React from "react"
import Navigation from "@/components/navigation"
import TopBanner from "@/components/top-banner"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Clock, MessageSquare, Calendar, HeadphonesIcon } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { usePagePadding } from "@/hooks/use-page-padding"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const paddingTop = usePagePadding()
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactMethods = [
    { icon: Mail, title: t.emailLabel, content: t.email, link: `mailto:${t.email}`, color: "from-blue-500 to-cyan-500" },
    { icon: Phone, title: t.phoneLabel, content: t.phone, link: `tel:${t.phone}`, color: "from-purple-500 to-pink-500" },
    { icon: MapPin, title: t.locationLabel, content: t.location, link: "#", color: "from-orange-500 to-red-500" },
  ]

  return (
    <>
      <Navigation />
      <TopBanner />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pb-20 px-4 transition-all duration-300 overflow-hidden bg-white" style={{ paddingTop: `${paddingTop}px` }}>
          
          <div className="max-w-7xl mx-auto">
            <div className={`text-center space-y-6 mb-16 ${isLoaded ? "animate-slideInUp" : "opacity-0"}`}>
              <h1 className="text-5xl md:text-7xl font-bold text-balance bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                {t.getInTouch}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t.getInTouchDesc}
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {contactMethods.map((item, i) => {
                const Icon = item.icon
                return (
                  <a
                    key={i}
                    href={item.link}
                    className={`group bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 ${
                      isLoaded ? "animate-fadeInScale" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="font-bold mb-2 text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.content}</p>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Google Maps */}
              <div className={`bg-card border border-border rounded-2xl overflow-hidden shadow-xl ${
                isLoaded ? "animate-slideInLeft" : "opacity-0"
              }`} style={{ animationDelay: "0.3s" }}>
                <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-accent/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{t.locationLabel}</h2>
                      <p className="text-muted-foreground text-sm">{t.location}</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <a href={`tel:${t.phone}`} className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-muted transition-colors">
                      <Phone size={18} className="text-primary" />
                      <div>
                        <span className="font-medium text-muted-foreground">{t.phoneLabel}:</span>
                        <span className="ml-2 text-primary font-semibold">{t.phone}</span>
                      </div>
                    </a>
                    <a href={`mailto:${t.email}`} className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-muted transition-colors">
                      <Mail size={18} className="text-primary" />
                      <div>
                        <span className="font-medium text-muted-foreground">{t.emailLabel}:</span>
                        <span className="ml-2 text-primary font-semibold">{t.email}</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="h-96 w-full relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.1234567890!2d74.3456789!3d31.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0x23d6a5e5e5e5e5e5!2sJohar%20Town%2C%20Lahore%2C%20Punjab%2044700%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="Vertex Code Solutions Location"
                  />
                  <div className="absolute top-4 right-4">
                    <a
                      href="https://www.google.com/maps/place/Johar+Town,+Lahore,+Punjab+44700,+Pakistan/@31.4567890,74.3456789,15z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors shadow-lg"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>
                <div className="p-6 border-t border-border bg-gradient-to-r from-muted/50 to-muted/30">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <h3 className="font-semibold text-sm">{t.officeHours}</h3>
                      <p className="text-xs text-muted-foreground">{t.officeHoursDesc}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className={`bg-gradient-to-br from-card to-card/80 border border-border rounded-2xl p-8 md:p-12 shadow-xl ${
                isLoaded ? "animate-slideInRight" : "opacity-0"
              }`} style={{ animationDelay: "0.4s" }}>
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-2">{t.sendUsMessage}</h2>
                  <p className="text-muted-foreground">{t.contactFormDesc}</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">{t.yourName}</label>
                      <input
                        type="text"
                        placeholder={t.yourName}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">{t.yourEmail}</label>
                      <input
                        type="email"
                        placeholder={t.yourEmail}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t.projectTitle}</label>
                    <input
                      type="text"
                      placeholder={t.projectTitle}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t.selectServiceType}</label>
                    <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all">
                      <option>{t.selectServiceType}</option>
                      <option>{t.webDevelopmentOption}</option>
                      <option>{t.mobileAppOption}</option>
                      <option>{t.aiMlSolutionOption}</option>
                      <option>{t.otherOption}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t.tellAboutProject}</label>
                    <textarea
                      placeholder={t.tellAboutProject}
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none transition-all"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 group text-lg"
                  >
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    {t.sendMessage}
                  </button>

                  {isSubmitted && (
                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300 animate-slideInDown">
                      {t.thankYouMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Additional Contact Cards */}
            <div className={`grid md:grid-cols-2 gap-6 ${
              isLoaded ? "animate-slideInUp" : "opacity-0"
            }`} style={{ animationDelay: "0.5s" }}>
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <HeadphonesIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{t.emergencyContact}</h3>
                    <p className="text-sm text-muted-foreground">{t.emergencyContactDesc}</p>
                  </div>
                </div>
                <a
                  href={`tel:${t.phone}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
                >
                  <Phone size={20} />
                  {t.phone}
                </a>
              </div>
              <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-accent">{t.businessInquiries}</h3>
                    <p className="text-sm text-muted-foreground">{t.businessInquiriesDesc}</p>
                  </div>
                </div>
                <a
                  href={`mailto:${t.email}`}
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:underline text-lg"
                >
                  <Mail size={20} />
                  {t.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.followUs}
            </h2>
            <p className="text-muted-foreground mb-8">{t.connectSocialMedia}</p>
            <div className="flex justify-center gap-6">
              {[
                { icon: Github, href: "#", label: "GitHub", color: "hover:bg-slate-800 hover:text-white" },
                { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600 hover:text-white" },
                { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500 hover:text-white" },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <a
                    key={i}
                    href={item.href}
                    className={`group w-16 h-16 bg-card border border-border rounded-2xl flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl ${item.color}`}
                    aria-label={item.label}
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
