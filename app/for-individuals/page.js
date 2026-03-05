'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'
import { translations } from '@/lib/translations'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Globe, Heart, Shield, FileText, Home, Users, Landmark, BookOpen, Gavel, MessageSquare } from 'lucide-react'

const serviceIcons = [Globe, Heart, Shield, FileText, Home, Gavel, Landmark]

export default function ForIndividualsPage() {
  const { language } = useLanguage()
  const t = translations[language].forIndividuals

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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {t.services.map((service, i) => {
              const Icon = serviceIcons[i] || Globe
              return (
                <Card key={i} className="group border border-flg-light hover:border-flg-accent/30 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-flg-accent/10 flex items-center justify-center mb-4 group-hover:bg-flg-accent/20 transition-colors">
                      <Icon className="h-6 w-6 text-flg-accent" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-flg-dark mb-2">{service.title}</h3>
                    <p className="text-sm text-flg-dark/60 leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <div className="text-center">
            <p className="text-lg text-flg-dark/70 mb-8 max-w-2xl mx-auto font-serif italic">{t.closing}</p>
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
      </section>
    </div>
  )
}
