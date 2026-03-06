'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/components/LanguageProvider'
import { translations } from '@/lib/translations'
import { Button } from '@/components/ui/button'
import { ArrowRight, Award, BookOpen, Globe, Quote, MessageSquare } from 'lucide-react'

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
            {/* Attorney Photo & Intro */}
            <div className="flex flex-col md:flex-row gap-10 items-start mb-14">
              <div className="w-full md:w-[280px] flex-shrink-0">
                <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-flg-light">
                  <Image
                    src="/rafael-figueroa.jpeg"
                    alt="Rafael Figueroa, Esq. – Founder and President of Figueroa Law Group, Immigration Attorney serving New Jersey and New York"
                    width={560}
                    height={700}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-3xl font-bold text-flg-dark mb-2">{t.name}</h2>
                <p className="text-flg-accent font-medium mb-6">{t.role}</p>
                <div className="relative p-6 bg-[#f8f9fb] rounded-xl border-l-4 border-flg-accent">
                  <Quote className="h-6 w-6 text-flg-accent/30 mb-2" />
                  <p className="font-serif text-lg text-flg-dark/80 italic leading-relaxed">
                    {t.quote}
                  </p>
                </div>
              </div>
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-flg-accent hover:bg-flg-blue text-white font-semibold px-8">
                    {language === 'en' ? 'Schedule a Consultation' : 'Programar una Consulta'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="sms:+12018610500" aria-label="Text Figueroa Law Group">
                  <Button size="lg" variant="outline" className="border-flg-navy text-flg-navy hover:bg-flg-navy hover:text-white font-semibold px-8">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    {language === 'en' ? 'Text Us' : 'Escr\u00edbanos'}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
