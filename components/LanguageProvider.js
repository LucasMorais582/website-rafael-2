'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext(undefined)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const saved = localStorage.getItem('flg-language')
    if (saved === 'en' || saved === 'es') {
      setLanguage(saved)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('flg-language', language)
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    return { language: 'en', setLanguage: () => {}, toggleLanguage: () => {} }
  }
  return context
}
