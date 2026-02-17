'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/components/LanguageProvider'
import { translations } from '@/lib/translations'
import { Button } from '@/components/ui/button'
import { ArrowRight, Award, BookOpen, Globe, Quote } from 'lucide-react'

export default function AttorneyPage() {
  const { language } = useLanguage()
  const t = translations[language].attorney

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28" style={{ background: 'linear-gradient(135deg, #0f2032 0%, #1a3a5a 100%)' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 text-flg-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              <div className="w-8 h-[2px] bg-flg-accent" />
              <span>{t.role}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white">{t.name}</h1>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Quote */}
            <div className="relative mb-14 p-8 bg-[#f8f9fb] rounded-xl border-l-4 border-flg-accent">
              <Quote className="h-8 w-8 text-flg-accent/30 mb-3" />
              <p className="font-serif text-xl text-flg-dark/80 italic leading-relaxed">
                {t.quote}
              </p>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-6 mb-14">
              {t.bio.map((paragraph, i) => (
                <p key={i} className="text-lg text-flg-dark/70 leading-relaxed">{paragraph}</p>
              ))}
            </div>

            {/* Details Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-14">
              <div className="p-6 bg-[#f8f9fb] rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-flg-accent/10 flex items-center justify-center mb-3">
                  <BookOpen className="h-5 w-5 text-flg-accent" />
                </div>
                <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-flg-dark/50 mb-2">
                  {language === 'en' ? 'Practice Areas' : 'Areas de Pr\u00e1ctica'}
                </h3>
                <p className="text-sm text-flg-dark/70 leading-relaxed">{t.practiceAreas}</p>
              </div>
              <div className="p-6 bg-[#f8f9fb] rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-flg-accent/10 flex items-center justify-center mb-3">
                  <Award className="h-5 w-5 text-flg-accent" />
                </div>
                <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-flg-dark/50 mb-2">
                  {language === 'en' ? 'Memberships' : 'Membres\u00edas'}
                </h3>
                <ul className="space-y-1">
                  {t.memberships.map((m, i) => (
                    <li key={i} className="text-sm text-flg-dark/70">{m}</li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-[#f8f9fb] rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-flg-accent/10 flex items-center justify-center mb-3">
                  <Globe className="h-5 w-5 text-flg-accent" />
                </div>
                <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-flg-dark/50 mb-2">
                  {language === 'en' ? 'Languages' : 'Idiomas'}
                </h3>
                <p className="text-sm text-flg-dark/70 leading-relaxed">{t.languages}</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <Button size="lg" className="bg-flg-accent hover:bg-flg-blue text-white font-semibold px-8">
                  {language === 'en' ? 'Schedule a Consultation' : 'Programar una Consulta'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
