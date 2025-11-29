"use client"

import { Code, Smartphone, Brain, Zap, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const services = [
  {
    id: "web",
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies and optimized for performance.",
    icon: Code,
    features: ["React/Next.js", "Responsive Design", "SEO Optimized", "Fast Loading"],
    color: "from-blue-600 to-cyan-600",
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that provide seamless user experiences.",
    icon: Smartphone,
    features: ["iOS & Android", "Cross-platform", "Native Performance", "Cloud Sync"],
    color: "from-purple-600 to-pink-600",
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by AI and ML to automate and optimize your business.",
    icon: Brain,
    features: ["Custom Models", "Data Analytics", "Automation", "Predictive Analysis"],
    color: "from-orange-600 to-red-600",
  },
]

export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className={`group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg ${
                  isLoaded ? "animate-fadeInScale" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Learn More
                  <span>→</span>
                </Link>
              </div>
            )
          })}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { icon: Zap, title: "Performance Optimization", desc: "Lightning-fast applications" },
            { icon: Shield, title: "Security First", desc: "Enterprise-grade security" },
            { icon: TrendingUp, title: "Growth Strategy", desc: "Scalable solutions" },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className={`bg-card border border-border rounded-xl p-6 flex items-center gap-4 hover:border-primary/50 transition-all ${
                  isLoaded ? "animate-slideInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.45 + i * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
