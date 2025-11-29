"use client"

import Navigation from "@/components/navigation"
import TopBanner from "@/components/top-banner"
import Footer from "@/components/footer"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { usePagePadding } from "@/hooks/use-page-padding"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
    image: "/modern-e-commerce-platform-dashboard.jpg",
    tags: ["Next.js", "React", "Stripe", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    category: "Mobile App",
    description: "iOS/Android app for workout tracking and fitness analytics with social features.",
    image: "/fitness-app-interface.png",
    tags: ["React Native", "Firebase", "Health API"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "AI Chatbot System",
    category: "AI/ML",
    description: "Intelligent customer support chatbot with NLP capabilities and sentiment analysis.",
    image: "/ai-chatbot-conversation-interface.jpg",
    tags: ["Python", "TensorFlow", "NLP"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Real Estate Portal",
    category: "Web Development",
    description: "Property listing platform with virtual tours and 3D visualization technology.",
    image: "/real-estate-property-listing-portal.jpg",
    tags: ["Next.js", "Three.js", "Maps API"],
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    category: "Web Development",
    description: "Business intelligence dashboard with real-time data visualization and reporting.",
    image: "/business-analytics-dashboard-charts.jpg",
    tags: ["React", "D3.js", "WebSocket"],
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "ML Prediction Engine",
    category: "AI/ML",
    description: "Predictive analytics engine for demand forecasting and business insights.",
    image: "/ml-prediction-visualization.png",
    tags: ["Python", "Scikit-learn", "FastAPI"],
    link: "#",
    github: "#",
  },
]

export default function PortfolioPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const paddingTop = usePagePadding()
  const { language, isRTL } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className={`bg-white ${isRTL ? "rtl" : "ltr"}`}>
      <Navigation />
      <TopBanner />
      <div className="pb-20 px-4 transition-all duration-300" style={{ paddingTop: `${paddingTop}px` }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 animate-slideInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-balance bg-gradient-to-r from-primary via-emerald-500 to-orange-500 bg-clip-text text-transparent">
              {t.ourPortfolio}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.portfolioDesc}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 ${
                  isLoaded ? "animate-fadeInScale" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden bg-muted relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link
                      href={project.link}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label={t.viewProject}
                      title={t.viewProject}
                    >
                      <ExternalLink size={20} className="text-black" />
                    </Link>
                    <Link
                      href={project.github}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label={t.viewGitHub}
                      title={t.viewGitHub}
                    >
                      <Github size={20} className="text-black" />
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className={`flex items-center justify-between mb-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <span className="text-xs font-semibold text-primary uppercase">
                      {project.category === "Web Development" && t.webDevelopment}
                      {project.category === "Mobile App" && t.mobileApp}
                      {project.category === "AI/ML" && t.aiMl}
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors ${isRTL ? "text-right" : "text-left"}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm text-muted-foreground mb-4 ${isRTL ? "text-right" : "text-left"}`}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className={`flex flex-wrap gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                    {project.tags.map((tag, tagIndex) => {
                      const colors = [
                        "bg-primary/10 text-primary",
                        "bg-emerald-500/10 text-emerald-600",
                        "bg-orange-500/10 text-orange-600",
                      ]
                      return (
                        <span key={tag} className={`text-xs px-2 py-1 ${colors[tagIndex % 3]} rounded-full`}>
                          {tag}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-primary/10 via-emerald-500/10 to-orange-500/10 border border-primary/20 rounded-3xl p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t.readyToStartProject}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                {t.letsCollaborate}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all hover:from-orange-600 hover:to-orange-700"
                >
                  {t.getStarted}
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3 border-2 border-orange-500 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-all"
                >
                  {t.viewServices}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

