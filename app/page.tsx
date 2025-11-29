import Navigation from "@/components/navigation"
import TopBanner from "@/components/top-banner"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <TopBanner />
      <Hero />
      <Services />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  )
}
