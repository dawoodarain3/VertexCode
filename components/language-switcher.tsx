"use client"

import { useState } from "react"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState("EN")

  const languages = [
    { code: "EN", name: "English" },
    { code: "FR", name: "Français" },
    { code: "ES", name: "Español" },
    { code: "AR", name: "العربية" },
    { code: "UR", name: "اردو" },
    { code: "HI", name: "हिन्दी" },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm font-medium"
      >
        <Globe size={18} />
        {currentLang}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setCurrentLang(lang.code)
                setIsOpen(false)
              }}
              className="w-full text-left px-4 py-2 hover:bg-primary/10 transition-colors text-sm first:rounded-t-lg last:rounded-b-lg"
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
