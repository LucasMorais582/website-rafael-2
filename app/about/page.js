'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'
import { translations } from '@/lib/translations'
import { Button } from '@/components/ui/button'
import { ArrowRight, Target, Eye, UserCheck, Users, Check } from 'lucide-react'

export default function AboutPage() {
  const { language } = useLanguage()
  const t = translations[language].about
  const w = translations[language].whyChoose

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28" style={{ background: 'linear-gradient(135deg, #0f2032 0%, #1a3a5a 100%)' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">{t.title}</h1>
            <p className="text-xl text-white/80 leading-relaxed">{t.mission.text}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Mission */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <div>
                <div className="w-16 h-16 rounded-full bg-flg-accent/10 flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-flg-accent" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-flg-dark">{t.mission.title}</h2>
              </div>
              <div className="flex items-center">
                <p className="text-lg text-flg-dark/70 leading-relaxed">{t.mission.text}</p>
              </div>
            </div>

            <div className="border-t border-flg-light" />

            {/* Philosophy */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <div>
                <div className="w-16 h-16 rounded-full bg-flg-accent/10 flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-flg-accent" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-flg-dark">{t.philosophy.title}</h2>
              </div>
              <div className="flex items-center">
                <p className="text-lg text-flg-dark/70 leading-relaxed">{t.philosophy.text}</p>
              </div>
            </div>

            <div className="border-t border-flg-light" />

            {/* Founder */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <div>
                <div className="w-16 h-16 rounded-full bg-flg-accent/10 flex items-center justify-center mb-4">
                  <UserCheck className="h-8 w-8 text-flg-accent" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-flg-dark">{t.founder.title}</h2>
              </div>
              <div className="flex items-center">
                <p className="text-lg text-flg-dark/70 leading-relaxed">{t.founder.text}</p>
              </div>
            </div>

            <div className="border-t border-flg-light" />

            {/* Team */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <div>
                <div className="w-16 h-16 rounded-full bg-flg-accent/10 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-flg-accent" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-flg-dark">{t.team.title}</h2>
              </div>
              <div className="flex items-center">
                <p className="text-lg text-flg-dark/70 leading-relaxed">{t.team.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 lg:py-24" style={{ background: 'linear-gradient(135deg, #0f2032 0%, #1a3a5a 100%)' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white text-center mb-14">{w.title}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {w.reasons.map((reason, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-7 w-7 text-flg-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/attorney">
              <Button size="lg" className="bg-flg-accent hover:bg-flg-blue text-white font-semibold px-8">
                {language === 'en' ? 'Meet Our Attorney' : 'Conozca a Nuestro Abogado'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
