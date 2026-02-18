'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'
import { translations } from '@/lib/translations'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer
  const nav = translations[language].nav
  const contact = translations[language].contact

  const practiceLinks = [
    { href: '/for-individuals', label: language === 'en' ? 'Immigration & Citizenship' : 'Inmigraci\u00f3n y Ciudadan\u00eda' },
    { href: '/for-businesses', label: language === 'en' ? 'Business Immigration' : 'Inmigraci\u00f3n Empresarial' },
    { href: '/for-individuals', label: language === 'en' ? 'Estate Planning' : 'Planificaci\u00f3n Patrimonial' },
    { href: '/for-individuals', label: language === 'en' ? 'Real Estate' : 'Bienes Ra\u00edces' },
    { href: '/for-individuals', label: language === 'en' ? 'Family Law' : 'Derecho Familiar' },
    { href: '/for-individuals', label: language === 'en' ? 'Bankruptcy' : 'Bancarrota' },
  ]

  const quickLinks = [
    { href: '/about', label: nav.about },
    { href: '/attorney', label: nav.attorney },
    { href: '/faq', label: nav.faq },
    { href: '/contact', label: nav.contact },
    { href: '/newsletter', label: nav.newsletter },
  ]

  return (
    <footer className="bg-flg-dark text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img src="/logo.svg" alt="FLG" className="h-12 w-auto brightness-0 invert mb-4" />
            <p className="text-white/70 text-sm leading-relaxed font-serif italic">
              {t.tagline}
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-flg-accent mb-4">
              {t.practiceAreasTitle}
            </h4>
            <ul className="space-y-2">
              {practiceLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-flg-accent mb-4">
              {t.quickLinksTitle}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-flg-accent mb-4">
              {t.contactTitle}
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1">{contact.njOffice.label}</p>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-flg-accent mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-white/70">{contact.njOffice.address}<br />{contact.njOffice.city}</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1">{contact.nyOffice.label}</p>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-flg-accent mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-white/70">{contact.nyOffice.address}<br />{contact.nyOffice.city}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-flg-accent flex-shrink-0" />
                <a href="tel:+12018610500" className="text-sm text-white/70 hover:text-white transition-colors">(201) 861-0500</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-flg-accent flex-shrink-0" />
                <a href="mailto:info@figueroalawgroup.com" className="text-sm text-white/70 hover:text-white transition-colors">info@figueroalawgroup.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <p className="text-xs text-white/50">{t.copyright}</p>
            <p className="text-xs text-white/40">{t.disclaimer}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
