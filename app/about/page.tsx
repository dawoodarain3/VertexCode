"use client"

import Navigation from "@/components/navigation"
import TopBanner from "@/components/top-banner"
import Footer from "@/components/footer"
import { Award, Users, Target, Zap, Code, Rocket, Shield, Heart, TrendingUp, Globe, Clock, CheckCircle2 } from "lucide-react"
import { useEffect, useState } from "react"
import { useBanner } from "@/lib/banner-context"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import CountUp from "@/components/count-up"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { isBannerVisible } = useBanner()
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const values = [
    { icon: Award, title: t.qualityFirst, desc: t.qualityFirstDesc, color: "from-blue-500 to-cyan-500" },
    { icon: Users, title: t.teamCollaboration, desc: t.teamCollaborationDesc, color: "from-purple-500 to-pink-500" },
    { icon: Target, title: t.goalOriented, desc: t.goalOrientedDesc, color: "from-orange-500 to-red-500" },
    { icon: Zap, title: t.innovation, desc: t.innovationDesc, color: "from-green-500 to-emerald-500" },
  ]

  const stats = [
    { number: 50, label: t.projectsCompleted, icon: Rocket, suffix: "+" },
    { number: 30, label: t.happyClients, icon: Heart, suffix: "+" },
    { number: 5, label: t.yearsExperience, icon: Clock, suffix: "+" },
    { number: 100, label: t.satisfactionRate, icon: CheckCircle2, suffix: "%" },
  ]

  const services = [
    { icon: Code, title: t.webDevelopment, desc: t.webDevDesc },
    { icon: Globe, title: t.mobileApps, desc: t.mobileAppsDesc },
    { icon: TrendingUp, title: t.aiMl, desc: t.aiMlDesc },
    { icon: Shield, title: t.security, desc: t.securityDesc },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <TopBanner />
      
      {/* Hero Section */}
      <section className={`relative ${isBannerVisible ? "pt-56" : "pt-40"} pb-12 px-4 transition-all duration-300 overflow-hidden bg-white`}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center space-y-6 mb-12`}>
            <h1 className="text-5xl md:text-7xl font-bold text-balance bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {t.aboutVertexTitle}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.aboutVertexDesc}
            </p>
          </div>

          {/* Single Stats Box */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-card to-card/80 border border-border rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {stats.map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <div key={i} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                        <CountUp end={stat.number} suffix={stat.suffix} />
                      </div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                {t.whoAreWe}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.whoAreWe}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {t.whoAreWeDesc1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.whoAreWeDesc2}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-6 border border-primary/30 h-48 flex flex-col items-center justify-center">
                <Code className="w-12 h-12 text-primary mb-3" />
                <p className="text-sm font-semibold text-center">Clean Code</p>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl p-6 border border-accent/30 h-48 flex flex-col items-center justify-center mt-8">
                <Rocket className="w-12 h-12 text-accent mb-3" />
                <p className="text-sm font-semibold text-center">Fast Delivery</p>
              </div>
              <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl p-6 border border-secondary/30 h-48 flex flex-col items-center justify-center -mt-8">
                <Shield className="w-12 h-12 text-secondary mb-3" />
                <p className="text-sm font-semibold text-center">Secure</p>
              </div>
              <div className="bg-gradient-to-br from-orange/20 to-red/20 rounded-2xl p-6 border border-orange/30 h-48 flex flex-col items-center justify-center">
                <Heart className="w-12 h-12 text-orange mb-3" />
                <p className="text-sm font-semibold text-center">Client Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <div
                  key={i}
                  className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-10 md:p-12 border border-primary/20 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-primary">{t.ourMission}</h3>
              <p className="text-foreground leading-relaxed text-lg">
                {t.ourMissionDesc}
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange/10 via-orange/5 to-transparent rounded-3xl p-10 md:p-12 border border-orange/20 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-orange to-red rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-orange">{t.ourVision}</h3>
              <p className="text-foreground leading-relaxed text-lg">
                {t.ourVisionDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for all your digital needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <div
                  key={i}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
