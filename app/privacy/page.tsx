"use client"

import Navigation from "@/components/navigation"
import TopBanner from "@/components/top-banner"
import Footer from "@/components/footer"
import { useBanner } from "@/lib/banner-context"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function PrivacyPage() {
  const { isBannerVisible } = useBanner()
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <main>
      <Navigation />
      <TopBanner />
      <div className={`${isBannerVisible ? "pt-56" : "pt-40"} pb-20 px-4 transition-all duration-300`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">{t.privacyPolicyTitle}</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-foreground">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold">1. {t.introduction}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.introductionDesc}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">2. {t.informationCollection}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.informationCollectionDesc}
              </p>
              <h3 className="font-bold text-lg">{t.typesOfDataCollected}</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>{t.personalData}</li>
                <li>{t.usageData}</li>
                <li>{t.deviceData}</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">3. {t.useOfData}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.useOfDataDesc}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>{t.provideService}</li>
                <li>{t.notifyChanges}</li>
                <li>{t.interactiveFeatures}</li>
                <li>{t.customerSupport}</li>
                <li>{t.gatherAnalysis}</li>
                <li>{t.monitorUsage}</li>
                <li>{t.detectIssues}</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">4. {t.securityOfData}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.securityOfDataDesc}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">5. {t.changesToPrivacy}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.changesToPrivacyDesc}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">6. {t.privacyContactUs}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.privacyContactDesc}
                <br />
                {t.emailLabel}: {t.email}
                <br />
                {t.phoneLabel}: {t.phone}
                <br />
                {t.locationLabel}: {t.location}
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
