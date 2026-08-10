import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = typeof window !== 'undefined' ? window.__lang : null
    if (saved) return saved
    const browserLang = typeof navigator !== 'undefined' ? navigator.language : 'pt'
    return browserLang.toLowerCase().startsWith('pt') ? 'pt' : 'en'
  })

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    if (typeof window !== 'undefined') window.__lang = lang
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'pt' ? 'en' : 'pt'))
  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
