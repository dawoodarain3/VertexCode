"use client"

import Navigation from "@/components/navigation"
import TopBanner from "@/components/top-banner"
import Footer from "@/components/footer"
import { Code2, Smartphone, Brain, Database, Cloud, Shield, Zap, Users, BarChart3, Wrench } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { usePagePadding } from "@/hooks/use-page-padding"

const technologies = {
  frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular", "Svelte", "Astro"],
  backend: [
    "Node.js",
    "Python",
    "Java",
    "C#",
    ".NET",
    "PHP",
    "Ruby",
    "Go",
    "Django",
    "DRF",
    "Spring Boot",
    "Laravel",
    "ASP.NET Core",
    "Express.js",
  ],
  mobile: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"],
  aiml: [
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "OpenAI GPT",
    "LangChain",
    "Hugging Face",
    "YOLO",
    "Computer Vision",
    "Numpy",
    "Pandas",
    "Matplotlib",
    "Keras",
    "XGBoost",
    "LLaMA",
    "Mistral AI",
  ],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Supabase", "Redis", "Elasticsearch"],
  devops: ["Docker", "Kubernetes", "AWS", "Google Cloud", "Azure", "CI/CD", "Jenkins", "GitHub Actions"],
}

const services = [
  {
    id: "web",
    icon: Code2,
  },
  {
    id: "mobile",
    icon: Smartphone,
  },
  {
    id: "ai",
    icon: Brain,
  },
  {
    id: "backend",
    icon: Database,
  },
  {
    id: "cloud",
    icon: Cloud,
  },
  {
    id: "security",
    icon: Shield,
  },
  {
    id: "custom",
    icon: Wrench,
  },
]

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { language, isRTL } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const serviceTranslations = [
    {
      title: t.webDevelopment,
      description: t.webDevDesc,
      techs: technologies.frontend,
    },
    {
      title: t.mobileApps,
      description: t.mobileAppsDesc,
      techs: technologies.mobile,
    },
    {
      title: t.aiMl,
      description: t.aiMlDesc,
      techs: technologies.aiml,
    },
    {
      title: t.backend,
      description: t.backendDesc,
      techs: technologies.backend,
    },
    {
      title: t.cloudDevops,
      description: t.cloudDevopsDesc,
      techs: technologies.devops,
    },
    {
      title: t.security,
      description: t.securityDesc,
      techs: ["SSL/TLS", "OWASP", "Penetration Testing", "Performance Tuning", "Load Balancing"],
    },
    {
      title: t.customSoftware,
      description: t.customSoftwareDesc,
      techs: ["Full-Stack Development", "Enterprise Solutions", "Legacy System Modernization", "API Integration"],
    },
  ]

  const paddingTop = usePagePadding()

  return (
    <main className={`bg-white ${isRTL ? "rtl" : "ltr"}`}>
      <Navigation />
      <TopBanner />
      <div className="pb-20 px-4 transition-all duration-300" style={{ paddingTop: `${paddingTop}px` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-slideInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-balance bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {t.ourServicesTitle}
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">{t.ourServicesDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {serviceTranslations.map((service, index) => {
              const Icon = services[index].icon
              return (
                <div
                  key={index}
                  className={`group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 ${
                    isLoaded ? "animate-fadeInScale" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary">{t.technologies}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.techs.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {service.techs.length > 4 && (
                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium border border-accent/20 hover:bg-accent/20 transition-colors">
                          +{service.techs.length - 4} {t.more}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-12 shadow-lg">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {t.completeStack}
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary mb-4">{t.frontendTechs}</h3>
                <div className="flex flex-wrap gap-3">
                  {technologies.frontend.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-accent mb-4">{t.backendTechs}</h3>
                <div className="flex flex-wrap gap-3">
                  {technologies.backend.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium border border-accent/20 hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary mb-4">{t.dbSolutions}</h3>
                <div className="flex flex-wrap gap-3">
                  {technologies.databases.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-accent mb-4">{t.aiMlLibraries}</h3>
                <div className="flex flex-wrap gap-3">
                  {technologies.aiml.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium border border-accent/20 hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, key: "fastDelivery", color: "from-yellow-500 to-orange-500" },
              { icon: Users, key: "expertTeam", color: "from-blue-500 to-cyan-500" },
              { icon: BarChart3, key: "provenResults", color: "from-green-500 to-emerald-500" },
            ].map((item, i) => {
              const Icon = item.icon
              const descKey = (item.key + "Desc") as keyof typeof t
              return (
                <div
                  key={i}
                  className={`bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 ${
                    isLoaded ? "animate-slideInUp" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{t[item.key as keyof typeof t]}</h3>
                  <p className="text-muted-foreground text-sm">{t[descKey]}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
