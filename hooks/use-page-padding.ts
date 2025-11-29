"use client"

import { useEffect, useState } from "react"
import { useBanner } from "@/lib/banner-context"

export function usePagePadding() {
  const [paddingTop, setPaddingTop] = useState(64)
  const { isBannerVisible, bannerHeight } = useBanner()
  
  useEffect(() => {
    const calculatePadding = () => {
      const navHeight = window.innerWidth >= 640 ? 80 : 64
      const calculatedPadding = isBannerVisible && bannerHeight > 0 
        ? bannerHeight + navHeight + 16 // Add 16px extra spacing
        : navHeight + 16
      setPaddingTop(calculatedPadding)
    }
    
    calculatePadding()
    
    const handleResize = () => {
      calculatePadding()
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isBannerVisible, bannerHeight])
  
  return paddingTop
}

