'use client'

import { useLanguage } from '@/components/LanguageProvider'
import Link from 'next/link'

export default function SMSTermsPage() {
  const { language } = useLanguage()

  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 lg:py-20" style={{ background: 'linear-gradient(135deg, #0f2032 0%, #1a3a5a 100%)' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {language === 'en' ? 'SMS Terms of Service' : 'T\u00e9rminos de Servicio SMS'}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-lg text-flg-dark/70 leading-relaxed mb-8">
              By opting into SMS from a web form or other medium, you are agreeing to receive SMS messages from Rafael Figueroa PC. This includes SMS messages for conversations (external). Message frequency varies. Message and data rates may apply. See privacy policy at{' '}
              <Link href="/privacy-policy" className="text-flg-accent hover:text-flg-blue underline">
                Privacy Policy
              </Link>. Message HELP for help. Reply STOP to any message to opt out.
            </p>

            <h2 className="font-serif text-2xl font-bold text-flg-dark mt-12 mb-6">
              {language === 'en' ? 'Full Terms & Conditions for SMS' : 'T\u00e9rminos y Condiciones Completos para SMS'}
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl font-semibold text-flg-dark mb-3">1. {language === 'en' ? 'Types of Messages You May Receive' : 'Tipos de Mensajes que Puede Recibir'}</h3>
                <p className="text-flg-dark/70 mb-3">
                  {language === 'en'
                    ? 'By opting in to receive SMS communications from Rafael Figueroa PC, you agree to receive messages that may include:'
                    : 'Al optar por recibir comunicaciones SMS de Rafael Figueroa PC, usted acepta recibir mensajes que pueden incluir:'}
                </p>
                <ul className="list-disc pl-6 text-flg-dark/70 space-y-2">
                  <li>{language === 'en' ? 'Appointment confirmations and reminders' : 'Confirmaciones y recordatorios de citas'}</li>
                  <li>{language === 'en' ? 'Legal case updates and notifications' : 'Actualizaciones y notificaciones de casos legales'}</li>
                  <li>{language === 'en' ? 'Requests for documentation or information' : 'Solicitudes de documentaci\u00f3n o informaci\u00f3n'}</li>
                  <li>{language === 'en' ? 'General office announcements' : 'Anuncios generales de la oficina'}</li>
                  <li>{language === 'en' ? 'Marketing or promotional content (only with your explicit consent)' : 'Contenido de marketing o promocional (solo con su consentimiento expl\u00edcito)'}</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-flg-dark mb-3">2. {language === 'en' ? 'Frequency' : 'Frecuencia'}</h3>
                <p className="text-flg-dark/70">
                  {language === 'en'
                    ? 'Message frequency will vary depending on the nature of your case and your communication preferences.'
                    : 'La frecuencia de los mensajes variar\u00e1 seg\u00fan la naturaleza de su caso y sus preferencias de comunicaci\u00f3n.'}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-flg-dark mb-3">3. {language === 'en' ? 'Charges' : 'Cargos'}</h3>
                <p className="text-flg-dark/70">
                  {language === 'en'
                    ? 'Standard message and data rates may apply as determined by your mobile carrier. Rafael Figueroa PC is not responsible for any messaging fees.'
                    : 'Pueden aplicarse tarifas est\u00e1ndar de mensajes y datos seg\u00fan lo determine su operador m\u00f3vil. Rafael Figueroa PC no es responsable de los cargos de mensajer\u00eda.'}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-flg-dark mb-3">4. {language === 'en' ? 'Opting Out' : 'Cancelaci\u00f3n'}</h3>
                <p className="text-flg-dark/70">
                  {language === 'en'
                    ? 'You may opt out of receiving SMS messages at any time by replying STOP to any message.'
                    : 'Puede optar por no recibir mensajes SMS en cualquier momento respondiendo STOP a cualquier mensaje.'}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-flg-dark mb-3">5. {language === 'en' ? 'Support & Help' : 'Soporte y Ayuda'}</h3>
                <p className="text-flg-dark/70">
                  {language === 'en' ? 'Reply HELP or visit ' : 'Responda HELP o visite '}
                  <a href="https://rafaelfigueroalaw.com" target="_blank" rel="noopener noreferrer" className="text-flg-accent hover:text-flg-blue underline">
                    rafaelfigueroalaw.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-flg-dark mb-3">6. {language === 'en' ? 'Privacy' : 'Privacidad'}</h3>
                <p className="text-flg-dark/70">
                  {language === 'en'
                    ? 'Your phone number and SMS consent will not be shared with third parties.'
                    : 'Su n\u00famero de tel\u00e9fono y consentimiento SMS no ser\u00e1n compartidos con terceros.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
