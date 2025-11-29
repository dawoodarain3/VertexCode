import { en } from './en'
import { es } from './es'
import { fr } from './fr'
import { ur } from './ur'
import { ar } from './ar'
import { hi } from './hi'

export const translations = {
  en,
  es,
  fr,
  ur,
  ar,
  hi,
} as const

export type LanguageCode = keyof typeof translations
export type TranslationKey = keyof (typeof translations)[LanguageCode]

export const getTranslation = (lang: LanguageCode, key: TranslationKey): string => {
  return (
    (translations[lang]?.[key as keyof (typeof translations)[LanguageCode]] as string) ||
    (translations.en[key as keyof typeof translations.en] as string) ||
    key
  )
}

export const LANGUAGE_NAMES: Record<LanguageCode, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  ur: "اردو",
  ar: "العربية",
  hi: "हिन्दी",
}
