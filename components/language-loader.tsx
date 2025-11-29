"use client"

// This component is now just a pass-through
// The LanguageProvider handles the loading guard internally
export default function LanguageLoader({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

