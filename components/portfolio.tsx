"use client"

import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with real-time inventory management",
    image: "/modern-e-commerce-platform-dashboard.jpg",
    tags: ["Next.js", "React", "Stripe", "MongoDB"],
    link: "#",
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    category: "Mobile App",
    description: "iOS/Android app for workout tracking and fitness analytics",
    image: "/fitness-app-interface.png",
    tags: ["React Native", "Firebase", "Health API"],
    link: "#",
  },
  {
    id: 3,
    title: "AI Chatbot System",
    category: "AI/ML",
    description: "Intelligent customer support chatbot with NLP capabilities",
    image: "/ai-chatbot-conversation-interface.jpg",
    tags: ["Python", "TensorFlow", "NLP"],
    link: "#",
  },
  {
    id: 4,
    title: "Real Estate Portal",
    category: "Web Development",
    description: "Property listing platform with virtual tours and 3D visualization",
    image: "/real-estate-property-listing-portal.jpg",
    tags: ["Next.js", "Three.js", "Maps API"],
    link: "#",
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    category: "Web Development",
    description: "Business intelligence dashboard with real-time data visualization",
    image: "/business-analytics-dashboard-charts.jpg",
    tags: ["React", "D3.js", "WebSocket"],
    link: "#",
  },
  {
    id: 6,
    title: "ML Prediction Engine",
    category: "AI/ML",
    description: "Predictive analytics engine for demand forecasting",
    image: "/ml-prediction-visualization.png",
    tags: ["Python", "Scikit-learn", "FastAPI"],
    link: "#",
  },
]

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Recent Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Showcase of our latest and greatest work</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg ${
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
                  >
                    <ExternalLink size={20} className="text-black" />
                  </Link>
                  <Link
                    href={project.link}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Github size={20} className="text-black" />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-primary uppercase">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            View All Projects
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ArrowRight({ size }: { size: number }) {
  return <span>→</span>
}
