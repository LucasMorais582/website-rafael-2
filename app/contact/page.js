'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/LanguageProvider'
import { translations } from '@/lib/translations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Phone, Mail, MapPin, Clock, Globe, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  const { language } = useLanguage()
  const t = translations[language].contact
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle') // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })
      if (response.ok) {
        setStatus('success')
        setFormState({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-24" style={{ background: 'linear-gradient(135deg, #0f2032 0%, #1a3a5a 100%)' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">{t.title}</h1>
            <p className="text-xl text-white/80">{t.headerText}</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <p className="text-lg text-flg-dark/70 mb-8">{t.subtitle}</p>
              
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-green-800">{t.form.success}</p>
                </div>
              )}
              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-red-800">{t.form.error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-flg-dark mb-2 block">{t.form.name}</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    className="h-12 border-flg-light focus:border-flg-accent"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-flg-dark mb-2 block">{t.form.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                      className="h-12 border-flg-light focus:border-flg-accent"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-flg-dark mb-2 block">{t.form.phone}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={e => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                      className="h-12 border-flg-light focus:border-flg-accent"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-flg-dark mb-2 block">{t.form.message}</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    className="border-flg-light focus:border-flg-accent resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === 'sending'}
                  className="w-full bg-flg-accent hover:bg-flg-blue text-white font-semibold"
                >
                  {status === 'sending' ? t.form.sending : t.form.submit}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Office Hours & Languages */}
              <div className="p-6 bg-[#f8f9fb] rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-5 w-5 text-flg-accent" />
                  <h3 className="font-serif text-lg font-semibold text-flg-dark">
                    {language === 'en' ? 'Office Hours' : 'Horario de Oficina'}
                  </h3>
                </div>
                <p className="text-flg-dark/70 mb-4">{t.officeHours}</p>
                <div className="flex items-center space-x-3 mb-2">
                  <Globe className="h-5 w-5 text-flg-accent" />
                  <h3 className="font-serif text-lg font-semibold text-flg-dark">
                    {language === 'en' ? 'Languages' : 'Idiomas'}
                  </h3>
                </div>
                <p className="text-flg-dark/70">{t.languages}</p>
              </div>

              {/* Contact Details */}
              <div className="p-6 bg-[#f8f9fb] rounded-xl space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-flg-accent" />
                  <a href="tel:+12018610500" className="text-flg-dark hover:text-flg-accent transition-colors font-medium">(201) 861-0500</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-flg-accent" />
                  <a href="mailto:info@figueroalawgroup.com" className="text-flg-dark hover:text-flg-accent transition-colors font-medium">info@figueroalawgroup.com</a>
                </div>
              </div>

              {/* NJ Office */}
              <div className="rounded-xl overflow-hidden border border-flg-light">
                <div className="p-5">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-flg-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-flg-dark mb-1">{t.njOffice.label}</h3>
                      <p className="text-flg-dark/70">{t.njOffice.address}<br />{t.njOffice.city}</p>
                    </div>
                  </div>
                </div>
                <iframe
                  src="https://maps.google.com/maps?q=221+River+Street+9th+Floor+Hoboken+NJ+07030&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NJ Office Location"
                />
              </div>

              {/* NY Office */}
              {/* <div className="rounded-xl overflow-hidden border border-flg-light">
                <div className="p-5">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-flg-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-flg-dark mb-1">{t.nyOffice.label}</h3>
                      <p className="text-flg-dark/70">{t.nyOffice.address}<br />{t.nyOffice.city}</p>
                    </div>
                  </div>
                </div>
                <iframe
                  src="https://maps.google.com/maps?q=400+Rella+Blvd+Suite+165+Suffern+NY+10901&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NY Office Location"
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
