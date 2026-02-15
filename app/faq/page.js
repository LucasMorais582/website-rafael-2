'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'
import { translations } from '@/lib/translations'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ArrowRight, ExternalLink } from 'lucide-react'

export default function FAQPage() {
  const { language } = useLanguage()
  const t = translations[language].faq

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-24" style={{ background: 'linear-gradient(135deg, #0f2032 0%, #1a3a5a 100%)' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">{t.title}</h1>
            <p className="text-xl text-white/80">{t.subtitle}</p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {t.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-flg-dark mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-flg-accent text-white text-sm flex items-center justify-center mr-3 flex-shrink-0">
                    {sectionIndex + 1}
                  </span>
                  {section.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <AccordionItem
                      key={itemIndex}
                      value={`section-${sectionIndex}-item-${itemIndex}`}
                      className="border border-flg-light rounded-lg px-6 data-[state=open]:border-flg-accent/30 data-[state=open]:shadow-md transition-all"
                    >
                      <AccordionTrigger className="text-left font-medium text-flg-dark hover:text-flg-accent py-5 text-base [&[data-state=open]]:text-flg-accent">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-flg-dark/70 leading-relaxed pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            {/* Footer CTA */}
            <div className="mt-14 p-8 bg-[#f8f9fb] rounded-xl text-center">
              <p className="text-lg text-flg-dark/70 mb-6">{t.footerCta}</p>
              <Link href="/contact">
                <Button size="lg" className="bg-flg-accent hover:bg-flg-blue text-white font-semibold px-8">
                  {language === 'en' ? 'Schedule a Consultation' : 'Programar una Consulta'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Resources */}
            <div className="mt-14">
              <h2 className="font-serif text-2xl font-bold text-flg-dark mb-6">
                {language === 'en' ? 'Helpful Resources' : 'Recursos \u00datiles'}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {t.resources.map((resource, i) => (
                  <a
                    key={i}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 border border-flg-light rounded-lg hover:border-flg-accent/30 hover:shadow-md transition-all group"
                  >
                    <span className="text-sm font-medium text-flg-dark group-hover:text-flg-accent transition-colors">{resource.name}</span>
                    <ExternalLink className="h-4 w-4 text-flg-dark/30 group-hover:text-flg-accent transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
