"use client"

import Navigation from "@/components/navigation"
import TopBanner from "@/components/top-banner"
import Footer from "@/components/footer"
import { useBanner } from "@/lib/banner-context"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function TermsPage() {
  const { isBannerVisible } = useBanner()
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <main>
      <Navigation />
      <TopBanner />
      <div className={`${isBannerVisible ? "pt-56" : "pt-40"} pb-20 px-4 transition-all duration-300`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">{t.termsConditionsTitle}</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-foreground">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold">1. {t.agreementToTerms}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.agreementToTermsDesc}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">2. {t.useLicense}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.useLicenseDesc}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>{t.modifyingMaterials}</li>
                <li>{t.commercialUse}</li>
                <li>{t.reverseEngineer}</li>
                <li>{t.removeCopyright}</li>
                <li>{t.transferMaterials}</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">3. {t.disclaimer}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.disclaimerDesc}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">4. {t.limitations}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.limitationsDesc}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">5. {t.accuracyOfMaterials}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.accuracyOfMaterialsDesc}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">6. {t.links}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.linksDesc}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">7. {t.modifications}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.modificationsDesc}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">8. {t.contactInformation}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.termsContactDesc}
                <br />
                {t.emailLabel}: {t.email}
                <br />
                {t.phoneLabel}: {t.phone}
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
