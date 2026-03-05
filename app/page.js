'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/components/LanguageProvider'
import { translations } from '@/lib/translations'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Globe, Plane, Users, Shield, FileText, Home, Heart,
  ArrowRight, Check, Scale, Landmark, BookOpen, UserCheck,
  Gavel, ShieldCheck, MessageSquare
} from 'lucide-react'

const immigrationIcons = [Users, Plane, Heart, Landmark, BookOpen, ShieldCheck]
const practiceIcons = { Shield: Shield, FileText: FileText, Home: Home, Heart: Heart }

export default function HomePage() {
  const { language } = useLanguage()
  const t = translations[language]
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/api/newsletter/posts')
      .then(res => res.json())
      .then(data => { if (data.posts) setPosts(data.posts.slice(0, 3)) })
      .catch(() => {})
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-[85vh] flex items-center"
        style={{
          background: 'linear-gradient(135deg, #0f2032 0%, #1a3a5a 50%, #255382 100%)'
        }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1534778094620-d9a64838b8e0?auto=format&fit=crop&w=1920&q=80")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2032]/95 to-[#1a3a5a]/80" />
        <div className="relative container mx-auto px-4 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-block mb-6">
                <div className="flex items-center space-x-2 text-flg-accent text-sm font-semibold uppercase tracking-[0.2em]">
                  <div className="w-8 h-[2px] bg-flg-accent" />
                  <span>Figueroa Law Group</span>
                </div>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                {t.hero.tagline}
              </h1>
              <p className="text-xl sm:text-2xl text-white/80 font-light mb-4 leading-relaxed">
                {t.hero.supporting}
              </p>
              <p className="text-base text-white/60 mb-10 max-w-2xl leading-relaxed">
                {t.hero.intro.substring(0, 200)}...
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-flg-accent hover:bg-flg-blue text-white font-semibold text-base px-8 py-6 w-full sm:w-auto">
                    {t.nav.schedule}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+12018610500">
                  <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8 py-6 w-full sm:w-auto bg-transparent">
                    {t.nav.callNow}: (201) 861-0500
                  </Button>
                </a>
                <a href="sms:+12018610500" aria-label="Send a text message to Figueroa Law Group">
                  <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8 py-6 w-full sm:w-auto bg-transparent">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    {language === 'en' ? 'Text Us' : 'Escr\u00edbanos'}
                  </Button>
                </a>
              </div>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              {t.hero.tagline}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 font-light mb-4 leading-relaxed">
              {t.hero.supporting}
            </p>
            <p className="text-base text-white/60 mb-10 max-w-2xl leading-relaxed">
              {t.hero.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-flg-accent hover:bg-flg-blue text-white font-semibold text-base px-8 py-6 w-full sm:w-auto">
                  {t.nav.schedule}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="sms:+12018610500" aria-label="Send a text message to Figueroa Law Group">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:!text-white font-semibold text-base px-8 py-6 w-full sm:w-auto bg-transparent"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  {language === 'en' ? 'Text Us' : 'Escr\u00edbanos'}
                </Button>
              </a>
              <a href="tel:+12018610500">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:!text-white font-semibold text-base px-8 py-6 w-full sm:w-auto bg-transparent"
                >
                  {t.nav.callNow}: (201) 861-0500
                </Button>
              </a>
            {/* Right: Hero Image */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-image.jpg"
                  alt="Person standing at a crossroads with arrows pointing in many directions, symbolizing clarity and guidance through legal uncertainty"
                  width={800}
                  height={800}
                  className="w-full h-[500px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2032]/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Immigration Feature Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center space-x-2 text-flg-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                <div className="w-8 h-[2px] bg-flg-accent" />
                <span>{language === 'en' ? 'Our Primary Focus' : 'Nuestro Enfoque Principal'}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-flg-dark mb-6">
                {t.immigration.title}
              </h2>
              <p className="text-lg text-flg-dark/70 leading-relaxed mb-4">
                {t.immigration.subtitle}
              </p>
              <p className="text-lg text-flg-dark/70 leading-relaxed mb-8">
                {language === 'en'
                  ? 'We understand that behind every visa, status, or filing is a personal story and a goal worth protecting.'
                  : 'Entendemos que detr\u00e1s de cada visa, estatus o solicitud hay una historia personal y un objetivo que vale la pena proteger.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-flg-accent hover:bg-flg-blue text-white font-semibold px-8">
                    {t.immigration.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="sms:+12018610500" aria-label="Text Figueroa Law Group about immigration">
                  <Button size="lg" variant="outline" className="border-flg-navy text-flg-navy hover:bg-flg-navy hover:text-white font-semibold px-8">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    {language === 'en' ? 'Text Us' : 'Escr\u00edbanos'}
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/world-map.jpg"
                  alt="Vintage world map with people from diverse backgrounds, representing international immigration and global perspective"
                  width={800}
                  height={800}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-flg-accent/10 rounded-full" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-flg-navy/10 rounded-full" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.immigration.services.map((service, i) => {
              const Icon = immigrationIcons[i] || Globe
              return (
                <Card key={i} className="group border border-flg-light/80 hover:border-flg-accent/30 hover:shadow-lg transition-all duration-300">
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
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 lg:py-28 bg-[#f8f9fb]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center space-x-2 text-flg-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              <div className="w-8 h-[2px] bg-flg-accent" />
              <span>{language === 'en' ? 'Comprehensive Legal Services' : 'Servicios Legales Integrales'}</span>
              <div className="w-8 h-[2px] bg-flg-accent" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-flg-dark mb-4">
              {t.practiceAreas.title}
            </h2>
            <p className="text-lg text-flg-dark/60 max-w-2xl mx-auto mb-3">
              {t.practiceAreas.subtitle}
            </p>
            <p className="text-lg text-flg-dark/60 max-w-3xl mx-auto">
              {language === 'en'
                ? "Whether you\u2019re seeking to build a new life, grow a business, or protect what you\u2019ve built, we provide strategic legal solutions rooted in clarity, empathy, and trust."
                : "Ya sea que busque construir una nueva vida, hacer crecer un negocio o proteger lo que ha construido, brindamos soluciones legales estrat\u00e9gicas basadas en claridad, empat\u00eda y confianza."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.practiceAreas.areas.map((area, i) => {
              const Icon = practiceIcons[area.icon] || Scale
              return (
                <Card key={i} className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-flg-navy/5 flex items-center justify-center mx-auto mb-5 group-hover:bg-flg-accent/10 transition-colors">
                      <Icon className="h-7 w-7 text-flg-navy group-hover:text-flg-accent transition-colors" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-flg-dark mb-3">{area.title}</h3>
                    <p className="text-sm text-flg-dark/60 leading-relaxed">{area.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/for-individuals">
              <Button variant="outline" className="border-flg-navy text-flg-navy hover:bg-flg-navy hover:text-white font-medium px-8">
                {language === 'en' ? 'View All Services' : 'Ver Todos los Servicios'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose FLG */}
      <section className="py-20 lg:py-28" style={{ background: 'linear-gradient(135deg, #0f2032 0%, #1a3a5a 100%)' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              {t.whyChoose.title}
            </h2>
            <div className="w-16 h-[2px] bg-flg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.whyChoose.reasons.map((reason, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <Check className="h-8 w-8 text-flg-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-white/70 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/about">
              <Button size="lg" className="bg-flg-accent hover:bg-flg-blue text-white font-semibold px-8">
                {language === 'en' ? 'Learn More About Us' : 'Conozca M\u00e1s Sobre Nosotros'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Preview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center space-x-2 text-flg-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              <div className="w-8 h-[2px] bg-flg-accent" />
              <span>{language === 'en' ? 'Stay Informed' : 'Mant\u00e9ngase Informado'}</span>
              <div className="w-8 h-[2px] bg-flg-accent" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-flg-dark mb-4">
              {t.newsletterPreview.title}
            </h2>
            <p className="text-lg text-flg-dark/60 max-w-2xl mx-auto">
              {t.newsletterPreview.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.length > 0 ? posts.map((post, i) => (
              <Card key={i} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="h-2 bg-flg-accent" />
                <CardContent className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-flg-accent">{post.category}</span>
                  <h3 className="font-serif text-lg font-semibold text-flg-dark mt-2 mb-3 group-hover:text-flg-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-flg-dark/60 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-flg-dark/40">{post.date}</span>
                    {/* <span className="text-sm font-medium text-flg-accent flex items-center">
                      {t.newsletter?.readMore || 'Read More'}
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </span> */}
                  </div>
                </CardContent>
              </Card>
            )) : (
              <div className="col-span-3 text-center py-8">
                <p className="text-flg-dark/40">{t.newsletter?.noArticles || 'Articles coming soon.'}</p>
              </div>
            )}
          </div>

          <div className="text-center mt-10">
            <Link href="/newsletter">
              <Button variant="outline" className="border-flg-navy text-flg-navy hover:bg-flg-navy hover:text-white font-medium px-8">
                {t.newsletterPreview.viewAll}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #316da9 0%, #255382 100%)' }}>
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.ctaBanner.text}
          </h2>
          <p className="text-xl text-white/80 mb-10">
            {t.ctaBanner.subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-flg-navy hover:bg-white/90 font-semibold text-lg px-10 py-6">
                {t.ctaBanner.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="sms:+12018610500" aria-label="Text Figueroa Law Group">
              <Button size="lg" variant="outline" className="border-2 border-white/40 text-white hover:bg-white/10 font-semibold text-lg px-10 py-6 bg-transparent">
                <MessageSquare className="mr-2 h-5 w-5" />
                {language === 'en' ? 'Text Us' : 'Escr\u00edbanos'}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}