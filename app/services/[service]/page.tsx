"use client"

import { notFound } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Code, Smartphone, Brain, CheckCircle } from "lucide-react"
import { useBanner } from "@/lib/banner-context"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

const services = {
  web: {
    title: "Web Development",
    description: "Create stunning, high-performance websites that drive results",
    icon: Code,
    color: "from-blue-600 to-cyan-600",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "SEO Best Practices",
      "Accessibility Standards",
      "Progressive Web Apps",
      "Real-time Updates",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    process: [
      { step: 1, title: "Discovery", desc: "Understanding your vision and goals" },
      { step: 2, title: "Design", desc: "Creating beautiful, user-centric designs" },
      { step: 3, title: "Development", desc: "Building robust, scalable solutions" },
      { step: 4, title: "Testing", desc: "Ensuring quality and performance" },
      { step: 5, title: "Launch", desc: "Deploying to production" },
      { step: 6, title: "Support", desc: "Ongoing maintenance and optimization" },
    ],
  },
  mobile: {
    title: "Mobile Applications",
    description: "Build powerful iOS and Android apps that users love",
    icon: Smartphone,
    color: "from-purple-600 to-pink-600",
    features: [
      "Native Performance",
      "iOS & Android Support",
      "Offline Functionality",
      "Push Notifications",
      "App Store Optimization",
      "Cross-Platform Compatibility",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
    process: [
      { step: 1, title: "Strategy", desc: "Planning app architecture" },
      { step: 2, title: "Design", desc: "UX/UI for mobile platforms" },
      { step: 3, title: "Development", desc: "Native app development" },
      { step: 4, title: "Integration", desc: "Backend and APIs" },
      { step: 5, title: "Testing", desc: "QA on multiple devices" },
      { step: 6, title: "Deployment", desc: "App Store submission" },
    ],
  },
  ai: {
    title: "AI & Machine Learning",
    description: "Harness the power of AI to transform your business",
    icon: Brain,
    color: "from-orange-600 to-red-600",
    features: [
      "Custom ML Models",
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Data Analytics",
      "AI Integration",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "FastAPI", "Docker"],
    process: [
      { step: 1, title: "Analysis", desc: "Data collection and exploration" },
      { step: 2, title: "Modeling", desc: "Building ML models" },
      { step: 3, title: "Training", desc: "Model training and optimization" },
      { step: 4, title: "Validation", desc: "Testing and validation" },
      { step: 5, title: "Deployment", desc: "Production deployment" },
      { step: 6, title: "Monitoring", desc: "Performance monitoring" },
    ],
  },
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = services[params.service as keyof typeof services]
  const { isBannerVisible } = useBanner()
  const { language } = useLanguage()
  const t = translations[language]

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  // Map service features to translations
  const featureTranslations: Record<string, Record<string, string>> = {
    web: {
      "Responsive Design": t.responsiveDesign,
      "Performance Optimization": t.performanceOptimization,
      "SEO Best Practices": t.seoBestPractices,
      "Accessibility Standards": t.accessibilityStandards,
      "Progressive Web Apps": t.progressiveWebApps,
      "Real-time Updates": t.realtimeUpdates,
    },
    mobile: {
      "Native Performance": t.nativePerformance,
      "iOS & Android Support": t.iosAndroidSupport,
      "Offline Functionality": t.offlineFunctionality,
      "Push Notifications": t.pushNotifications,
      "App Store Optimization": t.appStoreOptimization,
      "Cross-Platform Compatibility": t.crossPlatformCompatibility,
    },
    ai: {
      "Custom ML Models": t.customMlModels,
      "Predictive Analytics": t.predictiveAnalytics,
      "Natural Language Processing": t.naturalLanguageProcessing,
      "Computer Vision": t.computerVision,
      "Data Analytics": t.dataAnalytics,
      "AI Integration": t.aiIntegration,
    },
  }

  // Map process steps to translations
  const processStepTranslations: Record<string, Record<string, string>> = {
    web: {
      Discovery: t.discovery,
      "Discovery Desc": t.discoveryDesc,
      Design: t.design,
      "Design Desc": t.designDesc,
      Development: t.development,
      "Development Desc": t.developmentDesc,
      Testing: t.testing,
      "Testing Desc": t.testingDesc,
      Launch: t.launch,
      "Launch Desc": t.launchDesc,
      Support: t.support,
      "Support Desc": t.supportDesc,
    },
    mobile: {
      Strategy: t.strategy,
      "Strategy Desc": t.strategyDesc,
      Design: t.designMobile,
      "Design Desc": t.designMobileDesc,
      Development: t.developmentMobile,
      "Development Desc": t.developmentMobileDesc,
      Integration: t.integration,
      "Integration Desc": t.integrationDesc,
      Testing: t.testingMobile,
      "Testing Desc": t.testingMobileDesc,
      Deployment: t.deployment,
      "Deployment Desc": t.deploymentDesc,
    },
    ai: {
      Analysis: t.analysis,
      "Analysis Desc": t.analysisDesc,
      Modeling: t.modeling,
      "Modeling Desc": t.modelingDesc,
      Training: t.training,
      "Training Desc": t.trainingDesc,
      Validation: t.validation,
      "Validation Desc": t.validationDesc,
      Deployment: t.deploymentAi,
      "Deployment Desc": t.deploymentAiDesc,
      Monitoring: t.monitoring,
      "Monitoring Desc": t.monitoringDesc,
    },
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className={`${isBannerVisible ? "pt-56" : "pt-40"} pb-16 px-4 transition-all duration-300`}>
          <div className="max-w-7xl mx-auto">
            <div className="space-y-6 mb-12">
              <div className="inline-block">
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                  {t.ourServicesLabel}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">{service.title}</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">{service.description}</p>
            </div>

            <div
              className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center`}
            >
              <Icon size={48} className="text-white" />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">{t.keyFeatures}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature) => {
                const serviceKey = params.service as keyof typeof featureTranslations
                const translatedFeature = featureTranslations[serviceKey]?.[feature] || feature
                return (
                  <div key={feature} className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
                    <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">{translatedFeature}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">{t.technologiesWeUse}</h2>
            <div className="flex flex-wrap gap-4">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-6 py-3 bg-primary/10 text-primary rounded-full font-semibold hover:bg-primary/20 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">{t.ourProcess}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((item) => {
                const serviceKey = params.service as keyof typeof processStepTranslations
                const translatedTitle = processStepTranslations[serviceKey]?.[item.title] || item.title
                const translatedDesc = processStepTranslations[serviceKey]?.[`${item.title} Desc`] || item.desc
                return (
                  <div key={item.step} className="relative">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{translatedTitle}</h3>
                        <p className="text-muted-foreground">{translatedDesc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">{t.readyToGetStarted}</h2>
            <p className="text-lg text-muted-foreground">{t.letsDiscuss}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                {t.scheduleConsultation}
              </Link>
              <Link
                href="/#services"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all"
              >
                {t.exploreOtherServices}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
