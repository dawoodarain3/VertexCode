"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function CTA() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          className={`relative bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-12 md:p-16 text-center space-y-8 overflow-hidden ${
            isLoaded ? "animate-slideInUp" : "opacity-0"
          }`}
        >
          {/* Background elements */}
          <div className="absolute top-5 left-5 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
          <div className="absolute bottom-5 right-5 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate and transform your ideas into powerful digital solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                Start Your Project
              </Link>
              <Link
                href="/#services"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
