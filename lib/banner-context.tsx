"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface BannerContextType {
  isBannerVisible: boolean
  setIsBannerVisible: (visible: boolean) => void
  bannerHeight: number
  setBannerHeight: (height: number) => void
}

const BannerContext = createContext<BannerContextType | undefined>(undefined)

export function BannerProvider({ children }: { children: ReactNode }) {
  const [isBannerVisible, setIsBannerVisible] = useState(true)
  const [bannerHeight, setBannerHeight] = useState(0)

  return (
    <BannerContext.Provider value={{ isBannerVisible, setIsBannerVisible, bannerHeight, setBannerHeight }}>
      {children}
    </BannerContext.Provider>
  )
}

export function useBanner() {
  const context = useContext(BannerContext)
  if (!context) {
    throw new Error("useBanner must be used within BannerProvider")
  }
  return context
}

