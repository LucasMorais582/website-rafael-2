'use client'

import { useLanguage } from '@/components/LanguageProvider'

export default function PrivacyPolicyPage() {
  const { language } = useLanguage()

  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 lg:py-20" style={{ background: 'linear-gradient(135deg, #0f2032 0%, #1a3a5a 100%)' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {language === 'en' ? 'Privacy Policy' : 'Pol\u00edtica de Privacidad'}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-flg-dark/70 leading-relaxed mb-10">
              {language === 'en'
                ? 'At Rafael Figueroa Law, we are committed to protecting your privacy.'
                : 'En Rafael Figueroa Law, estamos comprometidos con la protecci\u00f3n de su privacidad.'}
            </p>

            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-xl font-semibold text-flg-dark mb-4">1. {language === 'en' ? 'Information We Collect' : 'Informaci\u00f3n que Recopilamos'}</h2>
                <ul className="list-disc pl-6 text-flg-dark/70 space-y-2">
                  <li>{language === 'en' ? 'Name' : 'Nombre'}</li>
                  <li>{language === 'en' ? 'Phone number' : 'N\u00famero de tel\u00e9fono'}</li>
                  <li>{language === 'en' ? 'Email address' : 'Direcci\u00f3n de correo electr\u00f3nico'}</li>
                  <li>{language === 'en' ? 'Mailing address' : 'Direcci\u00f3n postal'}</li>
                  <li>{language === 'en' ? 'Information submitted through forms' : 'Informaci\u00f3n enviada a trav\u00e9s de formularios'}</li>
                  <li>{language === 'en' ? 'SMS consent and communication preferences' : 'Consentimiento SMS y preferencias de comunicaci\u00f3n'}</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-flg-dark mb-4">2. {language === 'en' ? 'How We Use Your Information' : 'C\u00f3mo Usamos Su Informaci\u00f3n'}</h2>
                <ul className="list-disc pl-6 text-flg-dark/70 space-y-2">
                  <li>{language === 'en' ? 'Respond to inquiries' : 'Responder a consultas'}</li>
                  <li>{language === 'en' ? 'Schedule consultations' : 'Programar consultas'}</li>
                  <li>{language === 'en' ? 'Send case updates and communications' : 'Enviar actualizaciones de casos y comunicaciones'}</li>
                  <li>{language === 'en' ? 'Improve services' : 'Mejorar servicios'}</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-flg-dark mb-4">3. {language === 'en' ? 'Sharing of Information' : 'Compartir Informaci\u00f3n'}</h2>
                <p className="text-flg-dark/70">
                  {language === 'en'
                    ? 'We do not sell or share personal information for marketing purposes.'
                    : 'No vendemos ni compartimos informaci\u00f3n personal con fines de marketing.'}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-flg-dark mb-4">4. {language === 'en' ? 'Your Rights' : 'Sus Derechos'}</h2>
                <p className="text-flg-dark/70">
                  {language === 'en'
                    ? 'Users may request access, corrections, or deletion of personal information.'
                    : 'Los usuarios pueden solicitar acceso, correcciones o eliminaci\u00f3n de informaci\u00f3n personal.'}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-flg-dark mb-4">5. {language === 'en' ? 'SMS Communications' : 'Comunicaciones SMS'}</h2>
                <p className="text-flg-dark/70">
                  {language === 'en'
                    ? 'Users may opt out by replying STOP.'
                    : 'Los usuarios pueden optar por no participar respondiendo STOP.'}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-flg-dark mb-4">6. {language === 'en' ? 'Security' : 'Seguridad'}</h2>
                <p className="text-flg-dark/70">
                  {language === 'en'
                    ? 'We implement appropriate data protection measures.'
                    : 'Implementamos medidas apropiadas de protecci\u00f3n de datos.'}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-flg-dark mb-4">7. {language === 'en' ? 'Contact' : 'Contacto'}</h2>
                <p className="text-flg-dark/70">
                  Rafael Figueroa Law
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
