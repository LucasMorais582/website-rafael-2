'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'
import { translations } from '@/lib/translations'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Briefcase, Globe, Building, Plane, FileCheck } from 'lucide-react'

const serviceIcons = [Globe, Briefcase, Building, Plane, FileCheck]

export default function ForBusinessesPage() {
  const { language } = useLanguage()
  const t = translations[language].forBusinesses

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28" style={{ background: 'linear-gradient(135deg, #0f2032 0%, #1a3a5a 100%)' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 text-flg-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              <div className="w-8 h-[2px] bg-flg-accent" />
              <span>{t.subtitle}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">{t.title}</h1>
            <p className="text-xl text-white/80 leading-relaxed">{t.intro}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-6 mb-14 max-w-4xl mx-auto">
            {t.services.map((service, i) => {
              const Icon = serviceIcons[i] || Briefcase
              return (
                <Card key={i} className="group border border-flg-light hover:border-flg-accent/30 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-start space-x-5">
                    <div className="w-14 h-14 rounded-lg bg-flg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-flg-accent/20 transition-colors">
                      <Icon className="h-7 w-7 text-flg-accent" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-flg-dark mb-2">{service.title}</h3>
                      <p className="text-flg-dark/60 leading-relaxed">{service.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <div className="text-center">
            <p className="text-lg text-flg-dark/70 mb-8 max-w-2xl mx-auto font-serif italic">{t.closing}</p>
            <Link href="/contact">
              <Button size="lg" className="bg-flg-accent hover:bg-flg-blue text-white font-semibold px-8">
                {language === 'en' ? 'Partner With Us' : 'Asoci\u00e9se Con Nosotros'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
