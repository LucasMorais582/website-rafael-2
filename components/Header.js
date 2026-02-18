'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'
import { translations } from '@/lib/translations'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Phone, Globe, MessageSquare } from 'lucide-react'

export default function Header() {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language].nav
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: '/', label: t.home },
    { href: '/for-individuals', label: t.forIndividuals },
    { href: '/for-businesses', label: t.forBusinesses },
    { href: '/about', label: t.about },
    { href: '/attorney', label: t.attorney },
    { href: '/faq', label: t.faq },
    { href: '/contact', label: t.contact },
    { href: '/newsletter', label: t.newsletter },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-flg-light shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/logo.svg"
              alt="Figueroa Law Group"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-flg-dark hover:text-flg-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden xl:flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-2 text-sm font-semibold text-flg-navy hover:text-flg-accent transition-colors border border-flg-light rounded-md"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'en' ? 'ES' : 'EN'}</span>
            </button>
            <Link href="/contact">
              <Button className="bg-flg-accent hover:bg-flg-blue text-white font-medium text-sm px-5">
                {t.schedule}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2 py-1.5 text-sm font-semibold text-flg-navy border border-flg-light rounded-md"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'en' ? 'ES' : 'EN'}</span>
            </button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6 text-flg-dark" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-flg-light">
                    <img src="/logo.svg" alt="FLG" className="h-10 w-auto" />
                  </div>
                  <nav className="flex-1 p-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-3 text-base font-medium text-flg-dark hover:text-flg-accent hover:bg-flg-light/50 rounded-md transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="p-4 border-t border-flg-light space-y-3">
                    <a href="tel:+12018610500" className="flex items-center justify-center space-x-2 w-full py-3 text-flg-navy font-medium border border-flg-navy rounded-md hover:bg-flg-navy hover:text-white transition-colors">
                      <Phone className="h-4 w-4" />
                      <span>{t.callNow}</span>
                    </a>
                    <a href="sms:+12018610500" className="flex items-center justify-center space-x-2 w-full py-3 text-flg-navy font-medium border border-flg-navy rounded-md hover:bg-flg-navy hover:text-white transition-colors" aria-label="Send a text message to Figueroa Law Group">
                      <MessageSquare className="h-4 w-4" />
                      <span>{language === 'en' ? 'Text Us' : 'Escr\u00edbanos'}</span>
                    </a>
                    <Link href="/contact" onClick={() => setOpen(false)}>
                      <Button className="w-full bg-flg-accent hover:bg-flg-blue text-white font-medium">
                        {t.schedule}
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
